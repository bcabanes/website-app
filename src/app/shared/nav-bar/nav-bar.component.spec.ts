import { LocalizeRouterService } from 'localize-router';
import { skip } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
// app
import { NavBarComponent } from './nav-bar.component';

fdescribe('NavBarComponent', () => {
  it('should instantiate', () => {
    const localizeRouterServiceMock = {
      routerEvents: new Subject<string>(),
      parser: { currentLang: 'en' },
      translateRoute: function(path): string { return this.parser.currentLang.concat(path); }
    };

    expect(new NavBarComponent(localizeRouterServiceMock as LocalizeRouterService)).toBeTruthy();
  });

  it('should start with a default language for translating paths', () => {
    const localizeRouterServiceMock = {
      routerEvents: new Subject<string>(),
      parser: { currentLang: 'en' },
      translateRoute: function(path): string { return this.parser.currentLang.concat(path); }
    };
    const component = new NavBarComponent(localizeRouterServiceMock as LocalizeRouterService);

    component.ngOnInit();

    component.linkList.subscribe(data => {
      expect(data).toEqual([
        { name: 'Events', path: 'en/events' },
        { name: 'Team', path: 'en/page/team' },
        { name: 'Partners', path: 'en/page/partners' }
      ]);
    });
  });

  it('should be able to switch the language for translating paths', () => {
    const localizeRouterServiceMock = {
      routerEvents: new Subject<string>(),
      parser: { currentLang: 'en' },
      translateRoute: function(path): string { return this.parser.currentLang.concat(path); }
    };
    const component = new NavBarComponent(localizeRouterServiceMock as LocalizeRouterService);

    component.ngOnInit(); // language 'en'

    localizeRouterServiceMock.parser.currentLang = 'fr';
    localizeRouterServiceMock.routerEvents.next('fr'); // language 'fr'

    component.linkList.pipe(skip(1)).subscribe(data => {
      expect(data).toEqual([
        { name: 'Events', path: 'fr/events' },
        { name: 'Team', path: 'fr/page/team' },
        { name: 'Partners', path: 'fr/page/partners' }
      ]);
    });
  });
});

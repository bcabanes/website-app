import { skip } from 'rxjs/operators';
import { Subject } from 'rxjs';
// app
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  it('should instantiate', () => {
    const changeLang$ = new Subject<string>();
    const translateServiceMock = {
      onLangChange: changeLang$.asObservable()
    };

    expect(new NavBarComponent(translateServiceMock as any)).toBeTruthy();
  });

  it('should start with a default language for translating paths', () => {
    const changeLang$ = new Subject<string>();
    const translateServiceMock = {
      onLangChange: changeLang$.asObservable()
    };
    const component = new NavBarComponent(translateServiceMock as any);

    component.ngOnInit();
    changeLang$.next('en');

    component.linkList.subscribe(data => {
      expect(data).toEqual([
        { name: 'Events', path: 'en/events' },
        { name: 'Team', path: 'en/page/team' },
        { name: 'Partners', path: 'en/page/partners' }
      ]);
    });
  });

  it('should be able to switch the language for translating paths', () => {
    const changeLang$ = new Subject<string>();
    const translateServiceMock = {
      onLangChange: changeLang$.asObservable()
    };
    const component = new NavBarComponent(translateServiceMock as any);

    component.ngOnInit();
    changeLang$.next('en'); // language 'en' (is skipped)
    changeLang$.next('fr'); // language 'fr'

    component.linkList.pipe(skip(1)).subscribe(data => {
      expect(data).toEqual([
        { name: 'Events', path: 'fr/events' },
        { name: 'Team', path: 'fr/page/team' },
        { name: 'Partners', path: 'fr/page/partners' }
      ]);
    });
  });
});

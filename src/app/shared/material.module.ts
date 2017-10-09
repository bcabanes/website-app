import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import 'hammerjs';

const MATERIALS_MODULES: any[] = [
  MatButtonModule
];

@NgModule({
  imports: [ ...MATERIALS_MODULES ],
  exports: [ ...MATERIALS_MODULES ]
})
export class MaterialModule {
}

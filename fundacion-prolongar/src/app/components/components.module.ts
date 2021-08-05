import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './components.routes';
import { SubModuleComponent } from './sub-module/sub-module.component';
import { ModulesComponent } from './modules/modules.component';
import { LoaderModuleComponent } from '../shared/loader-module/loader-module.component';
@NgModule({
  declarations: [
    SubModuleComponent,
    ModulesComponent,
    LoaderModuleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    APP_ROUTING
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ComponentsModule { }

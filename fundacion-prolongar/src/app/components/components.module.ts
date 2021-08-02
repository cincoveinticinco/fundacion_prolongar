import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './components.routes';
import { SubModuleComponent } from './sub-module/sub-module.component';
import { ModulesComponent } from './modules/modules.component';
@NgModule({
  declarations: [
    SubModuleComponent,
    ModulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    APP_ROUTING
  ]
})
export class ComponentsModule { }

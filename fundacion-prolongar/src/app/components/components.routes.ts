import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthguardGuard } from '../guards/authguard.guard';
import { SubModuleComponent } from './sub-module/sub-module.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
    {
      path: 'modulo/:tipomodule/:idsubmodule',
      canActivate:[AuthguardGuard],
      component: SubModuleComponent,
    },
    {
      path: 'modulo/:tipomodule',
      canActivate:[AuthguardGuard],
      component: ModulesComponent,
    }
];

export const APP_ROUTING = RouterModule.forChild(routes);

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }

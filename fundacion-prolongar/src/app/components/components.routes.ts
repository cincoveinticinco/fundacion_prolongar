import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CorporalidadComponent } from './corporalidad/corporalidad.component';
import { PrejuiciosComponent } from './prejuicios/prejuicios.component';
import { EmocionesComponent } from './emociones/emociones.component';
import { AuthguardGuard } from '../guards/authguard.guard';

const routes: Routes = [
  {
    path: 'corporalidad',
    canActivate:[AuthguardGuard],
    component: CorporalidadComponent
  },
	{
		path: 'emociones',
    canActivate:[AuthguardGuard],
		component: EmocionesComponent
	},
	{
		path: 'prejuicios',
    canActivate:[AuthguardGuard],
		component: PrejuiciosComponent
	},
    /* {
      path: '**',
      redirectTo: '/home/homes',
      pathMatch: 'full'
    } */
  ];

export const APP_ROUTING = RouterModule.forChild(routes);

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }

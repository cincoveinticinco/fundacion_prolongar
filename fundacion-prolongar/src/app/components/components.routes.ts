import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CorporalidadComponent } from './corporalidad/corporalidad.component';
/* const routes: Routes = [
	{
		path: 'home', component: HomeComponent,
		children: [
			{ path: 'a-quienva-dirigida', component:AQuienVaDirigidaComponent },
			{ path: 'principios', component: PrincipiosComponent},
			{ path: 'para-que-es', component:ParaQueEsComponent  },
			{ path: 'kas', component: KasComponent},
			{ path: 'homes', component:HomesComponent },
			{ path: 'prejucios', component:PrejuiciosComponent},
			{ path: 'emociones', component: EmocionesComponent},
			{ path: 'corporalidad', component:CorporalidadComponent },
			{ path: '', redirectTo: '/home/homes', pathMatch: 'full' },
		]
	} 
]; */

const routes: Routes = [
    {
      path: 'corporalidad',
      component: CorporalidadComponent
    },
    {
      path: '**',
      redirectTo: '/home/homes',
      pathMatch: 'full'
    }
  ];

export const APP_ROUTING = RouterModule.forChild(routes);

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }

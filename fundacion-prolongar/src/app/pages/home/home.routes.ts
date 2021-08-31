import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AQuienVaDirigidaComponent } from './a-quien-va-dirigida/a-quien-va-dirigida.component';
import { PrincipiosComponent } from './principios/principios.component';
import { ParaQueEsComponent } from './para-que-es/para-que-es.component';
import { KasComponent } from './kas/kas.component';
import { HomesComponent } from './home/home.component';
import { RegisterComponent } from '../register/register.component';
import { SeccionMenuComponent } from './seccion-menu/seccion-menu.component';

const routes: Routes = [
	{
		path: 'home', component: HomeComponent,
    children: [
      { path: 'homes', component:HomesComponent },
      { path: ':seccionId', component:SeccionMenuComponent },
			// { path: 'a-quienva-dirigida', component:AQuienVaDirigidaComponent },
			// { path: 'principios', component: PrincipiosComponent},
			// { path: 'para-que-es', component:ParaQueEsComponent  },
			// { path: 'kas', component: KasComponent},

			{
				path: '**',
				redirectTo: '/home/homes',
				pathMatch: 'full'
			}
		]
	}
];

export const APP_ROUTING = RouterModule.forChild(routes);

@NgModule({
	imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
	exports: [RouterModule]
})
export class HomeRoutingModule { }

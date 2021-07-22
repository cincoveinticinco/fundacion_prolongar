import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AQuienVaDirigidaComponent } from './a-quien-va-dirigida/a-quien-va-dirigida.component';
import { PrincipiosComponent } from './principios/principios.component';
import { ParaQueEsComponent } from './para-que-es/para-que-es.component';
import { KasComponent } from './kas/kas.component';
import { HomesComponent } from './home/home.component';
import { PrejuiciosComponent } from '../../components/prejuicios/prejuicios.component';
import { EmocionesComponent } from '../../components/emociones/emociones.component';
import { CorporalidadComponent } from '../../components/corporalidad/corporalidad.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
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
];

export const APP_ROUTING = RouterModule.forChild(routes);

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }

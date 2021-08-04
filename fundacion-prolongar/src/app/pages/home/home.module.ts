import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AQuienVaDirigidaComponent } from './a-quien-va-dirigida/a-quien-va-dirigida.component';
import { PrincipiosComponent } from './principios/principios.component';
import { ParaQueEsComponent } from './para-que-es/para-que-es.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './home.routes';
import { KasComponent } from './kas/kas.component';
import { HomesComponent } from './home/home.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';


@NgModule({
  declarations: [
    AQuienVaDirigidaComponent,
    PrincipiosComponent,
    ParaQueEsComponent,
    KasComponent,
    HomesComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    APP_ROUTING
  ],
  exports: [
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './components.routes';
import { CorporalidadComponent } from './corporalidad/corporalidad.component';
import { EmocionesComponent } from './emociones/emociones.component';
import { PrejuiciosComponent } from './prejuicios/prejuicios.component';



@NgModule({
  declarations: [
    CorporalidadComponent,
    EmocionesComponent,
    PrejuiciosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    APP_ROUTING
  ]
})
export class ComponentsModule { }

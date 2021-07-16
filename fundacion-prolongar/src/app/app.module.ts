import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { AQuienVaDirigidaComponent } from './pages/home/a-quien-va-dirigida/a-quien-va-dirigida.component';
import { PrincipiosComponent } from './pages/home/principios/principios.component';
import { ParaQueEsComponent } from './pages/home/para-que-es/para-que-es.component';
import { PrejuiciosComponent } from './components/prejuicios/prejuicios.component';
import { EmocionesComponent } from './components/emociones/emociones.component';
import { CorporalidadComponent } from './components/corporalidad/corporalidad.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AQuienVaDirigidaComponent,
    PrincipiosComponent,
    ParaQueEsComponent,
    PrejuiciosComponent,
    EmocionesComponent,
    CorporalidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

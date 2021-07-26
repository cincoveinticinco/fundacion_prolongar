import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeModule } from './pages/home/home.module';
import { ComponentsModule } from './components/components.module';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    APP_ROUTING,
    ComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

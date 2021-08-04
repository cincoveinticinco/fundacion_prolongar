import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ValidarPasswordDirective } from './shared/directives/validar-password.directive';
import { TextTransformPipe } from './shared/pipes/text-transform.pipe';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { ValidateEqualDirective } from './shared/directives/validate-equal.directive';
import { ValidateAgeDirective } from './shared/directives/validate-age.directive';
import { LoaderModuleComponent } from './shared/loader-module/loader-module.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ValidarPasswordDirective,
    TextTransformPipe,
    RecuperarPasswordComponent,
    ValidateEqualDirective,
    ValidateAgeDirective,
    LoaderModuleComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    APP_ROUTING,
    ComponentsModule,
    FormsModule,
  ],

  providers: [TextTransformPipe],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

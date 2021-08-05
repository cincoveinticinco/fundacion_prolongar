import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'recuperar-contraseña',
      component: RecuperarPasswordComponent
  },
  {
    path: 'recovery_password/:token',
    component: RecuperarPasswordComponent
  },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '**',
      redirectTo: '/home/homes',
      pathMatch: 'full'
    }
  ];


export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

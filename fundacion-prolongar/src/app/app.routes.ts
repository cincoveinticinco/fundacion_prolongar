import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthguardGuard } from './guards/authguard.guard';

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
      path: 'editar-datos',
      component: PerfilComponent,
      canActivate:[AuthguardGuard],
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

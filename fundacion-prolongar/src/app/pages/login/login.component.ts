import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any ={}
  public error:any;
  constructor(private auth:AuthservicesService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this.auth.login(this.model).subscribe(data=>{
      if (data.error) {
        this.error = data.msg;
        return;
      }

      const lastView = localStorage.getItem('lastView')
      if (lastView && lastView.indexOf('modulo') != -1) {
        this.router.navigate([lastView])
      } else {
        this.router.navigate(['/modulo/1'])
      }

    })
  }

  redirectToRegister(){
    this.router.navigate(['register'])
  }

  redirectToRecPass(){
    this.router.navigate(['recuperar-contraseña'])
  }
}

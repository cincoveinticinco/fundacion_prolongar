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
      console.log(data);
      if (data.error) {
        this.error = data.msg;
        return;
      }
      this.router.navigate(['/home'])
    })
  }

  redirectToRegister(){
    this.router.navigate(['register'])
  }

  redirectToRecPass(){
    this.router.navigate(['recuperar-contraseña'])
  }
}

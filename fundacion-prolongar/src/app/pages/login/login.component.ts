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
  constructor(private auth:AuthservicesService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.model);
    this.auth.login(this.model).subscribe(data=>{
      console.log(data);
    })
  }
}

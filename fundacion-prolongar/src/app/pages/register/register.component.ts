import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { DepartamentosCiudadesService } from 'src/app/services/departamentos-ciudades.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public checkedDepart: boolean=false;
  public departamentos:any;
  public municipios:any;
  info:any;
  current_location:any;

  model:any={};
  error: string = "";

  constructor(
    private router:Router,
    private register: RegisterService,
    private auth: AuthservicesService) { }

  ngOnInit(): void {
    this.departamentosCiudades();
  }

  checkDepartamentos(event: any): void {
    let valorDept = event.target.checked;
    if (valorDept==true) {
        this.checkedDepart =true;
    }else if (valorDept==false) {
      this.checkedDepart =false;
    }
    console.log(this.departamentos);
  }

  departamentosCiudades(){
    this.register.gnederDepartamentCity().subscribe((data:any)=>{
     this.departamentos=data.department;
     console.log(this.departamentos);

    })
  }

  ciudad() {

    this.model.city_id = null;

    const departamento = this.departamentos.find((x:any) => x.id == this.model.departamento)
    if (departamento) {
        this.municipios = departamento.cityf
    }

  }

  registrarUsuario(){
    console.log(this.model);
    this.info=1;
    if (this.model.receive_info==false) {
      this.info=0;
    }

    if (this.model.current_location == 0) {
      this.model.city_id = 0
    }

    let datosUsuario ={
      user_name:this.model.user_name,
      password:this.model.password,
      email:this.model.email,
      age:this.model.age,
      gender_id:this.model.gender_id,
      current_location:this.model.current_location,
      city_id:this.model.city_id,
      receive_info:this.info
    }
    this.register.registrarUsuario(datosUsuario).subscribe((data:any) => {
      if (data.error) {
        this.error = data.msg
        return;
      }

      this.auth.login({ email: this.model.email, password: this.model.password })
        .subscribe(data => {
          this.router.navigate(['/'])
        })


    })
  }

}

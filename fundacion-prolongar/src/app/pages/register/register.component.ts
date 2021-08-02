import { Component, OnInit } from '@angular/core';
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

  constructor(private serviceDept:RegisterService,private register:RegisterService) { }

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
    this.serviceDept.gnederDepartamentCity().subscribe((data:any)=>{
     this.departamentos=data.department;
     console.log(this.departamentos);
     
    })
  }

  ciudad(event: any){
    let pais = event.target.value;
    this.municipios=this.departamentos[pais]['cityf'];  
  }

  registrarUsuario(){
    console.log(this.model);
    this.info=1;
    if (this.model.receive_info==false) {
      this.info=0;
    }

    if (this.model.current_location == 0) {
      this.model.city_id=0;
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
    this.register.registrarUsuario(datosUsuario).subscribe(data=>{
      console.log(data);
      /* this.ngOnInit(); */
    }) 
  }

}

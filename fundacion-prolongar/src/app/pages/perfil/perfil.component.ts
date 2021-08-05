import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { DepartamentosCiudadesService } from 'src/app/services/departamentos-ciudades.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public checkedDepart: boolean=false;
  public departamentos:any;
  public municipios:any;
  info:any;
  current_location:any;

  model:any={};
  error: string = "";
  alert: string = "";

  constructor(
    private router:Router,
    private register: RegisterService,
    private auth: AuthservicesService) { }

  async ngOnInit() {
    const responseDepartamentos:any = await this.register.gnederDepartamentCity().toPromise()
    if (responseDepartamentos) {
      this.departamentos=responseDepartamentos.department;
    }

    const userId = localStorage.getItem('id')
    if (userId) {
      this.auth.infoUserData({id: userId})
        .subscribe(data => {
          if (data) {
            if (data.user) {
              this.model = {
                ...data.user
              }

              if (data.user.current_location) {
                this.model.current_location = "1"
                this.checkedDepart = true
              } else {
                this.model.current_location = "0"
              }

              if (data.user.gender_id) {
                this.model.gender_id = `${data.user.gender_id}`
              }

              if (data.user.city_id) {

                const departament = this.departamentos.find((dep: any) => dep.cityf.find((city: any) => city.id == data.user.city_id))
                if (departament) {
                  this.model.departamento = departament.id
                  this.ciudad()
                  this.model.city_id = data.user.city_id
                }
              }

              console.log(this.model)
            }
          }

        })
    } else {
      this.auth.logout()
    }


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
      this.model.city_id = null
    }

    let datosUsuario = {
      id: this.model.id,
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

      this.alert = "Datos actualizados con exito"

    })
  }

}

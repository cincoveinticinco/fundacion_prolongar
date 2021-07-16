import { Component, OnInit } from '@angular/core';
import { DepartamentosCiudadesService } from 'src/app/services/departamentos-ciudades.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public checkedDepart: boolean=false;
  public departamentos:any;
  public municipios:any;

  constructor(private serviceDept:DepartamentosCiudadesService) { }

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
    this.serviceDept.getDepartamentos().subscribe(data=>{
     this.departamentos=data;
    })
  }

  ciudad(event: any){
    let pais = event.target.value;
    this.municipios=this.departamentos[pais]['ciudades'];  
  }

}

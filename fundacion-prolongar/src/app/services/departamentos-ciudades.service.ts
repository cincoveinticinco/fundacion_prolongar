import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosCiudadesService {

  constructor(private http:HttpClient) { }


  getDepartamentos(){
    return this.http.get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json');
  }
}

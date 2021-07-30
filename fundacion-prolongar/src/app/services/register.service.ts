import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public apiUrl:any=environment.url;

  constructor(private http: HttpClient) { }

  registrarUsuario(dataUser:any){
    let datosUsuario ={
      user_name:dataUser.user_name,
      password:dataUser.password,
      email:dataUser.email,
      age:dataUser.age,
      gender_id:dataUser.gender_id,
      current_location:dataUser.current_location,
      city_id:dataUser.city_id,
      receive_info:dataUser.info
    }
    return this.http.post(`${this.apiUrl}create_user`,datosUsuario)
  }

  gnederDepartamentCity(){
    return this.http.post(`${this.apiUrl}info_register`,'');
  }
}

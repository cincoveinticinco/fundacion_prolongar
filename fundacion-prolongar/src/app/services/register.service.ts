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
    return this.http.post(`${this.apiUrl}create_user`,dataUser)
  }
}

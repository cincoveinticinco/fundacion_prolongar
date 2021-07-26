import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  public apiUrl:any=environment.url;

  constructor(private http: HttpClient) { }

  login(user:any) {
    localStorage.setItem('token','1');
    return this.http.post(`${this.apiUrl}validate_user`,user).pipe(map(resp=>{
      let body = resp;
      /* if (body.msg != "Usuario y/o contraseña invalido") {
        
      } */
      return body;
    }))
  }

  logout() {}
}

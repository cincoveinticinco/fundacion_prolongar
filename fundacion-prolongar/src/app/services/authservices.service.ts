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
    return this.http.post(`${this.apiUrl}validate_user`,user).pipe(map(resp=>{
      let body:any = resp;
      if (body.error ==false) {
        localStorage.setItem('token',body.token);
      }
      return body;
    }))
  }

  logout() {
    return localStorage.removeItem('token');
  }
}

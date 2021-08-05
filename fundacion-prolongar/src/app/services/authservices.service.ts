import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  public apiUrl: any = environment.url;

  private _infoUserData:any = null
  private infoUserResponse = new Subject<any>()
  private infoUserRequest = new BehaviorSubject(this._infoUserData)
  private infoUserMessage = this.infoUserRequest.asObservable()


  constructor(private http: HttpClient) { }

  login(user:any) {
    return this.http.post(`${this.apiUrl}validate_user`,user).pipe(map(resp=>{
      let body:any = resp;
      if (body.error ==false) {
        localStorage.setItem('token',body.token);
        localStorage.setItem('id',body.user_id);
      }
      return body;
    }))
  }

  public infoUserData(id: any) {
    if (!this._infoUserData) {
      this.infoUser(id).subscribe(data => {
        this._infoUserData = data
        this.infoUserRequest.next(data)
      })
    }

    return this.infoUserMessage
  }

  infoUser(id: any) {
    return this.http.post(`${this.apiUrl}info_user`, id)
    .pipe(map(result => result))
  }

  logout() {
    return localStorage.clear();
  }
}

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesProlongarService {

  public apiUrl:any=environment.url;

  constructor(private http: HttpClient) { }

  infoHome(){
    return this.http.post(`${this.apiUrl}info_home`,'').pipe(map(result=> result))
  }

  dataModule(id:string){
    let token = localStorage.getItem('token');
    let datos={
      id:id,
      token:token,
    }
    return this.http.post(`${this.apiUrl}get_module`,datos)
  }

  dataSubModule(id:string){
    let token = localStorage.getItem('token');
    let datos={
      id:id,
      token:token,
    }
    return this.http.post(`${this.apiUrl}get_sub_module`,datos)
  }
}

import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesProlongarService {

  public apiUrl: any = environment.url;

  _infoHomeData:any = null
  infoHomeResponse = new Subject<any>()
  private infoHomeRequest = new BehaviorSubject(this._infoHomeData)
  private infoHomeMessage = this.infoHomeRequest.asObservable()
  public get infoHomeData() {
    return this.infoHomeMessage
  }

  constructor(private http: HttpClient) { }

  infoHome() {
    return this.http.post(`${this.apiUrl}info_home`, '')
      .pipe(map((result: any) => {
        this._infoHomeData = result
        this.infoHomeRequest.next(result)
        return result
      }))
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

  viewSubModules(data:any){
    let token = localStorage.getItem('token');
    let datos={
      view_module:data.view_module,
      sub_module_page_id:data.id,
      token:token
    }
    return this.http.post(`${this.apiUrl}view_module`,datos)
  }

}

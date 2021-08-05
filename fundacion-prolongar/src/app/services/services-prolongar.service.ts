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

  _infoDataModule:any = null
  private infoDataModuleRequest = new BehaviorSubject(this._infoDataModule)
  private infoDataModuleMessage = this.infoDataModuleRequest.asObservable()
  private isLoadingInfoDataModule: boolean = false;

  _infoHomeData:any = null
  infoHomeResponse = new Subject<any>()
  private infoHomeRequest = new BehaviorSubject(this._infoHomeData)
  private infoHomeMessage = this.infoHomeRequest.asObservable()
  private isLoadingInfoHome: boolean = false;

  public get infoHomeData() {
    if (!this._infoHomeData && !this.isLoadingInfoHome) {
      this.isLoadingInfoHome = true;
      this.infoHome()
        .subscribe(data => {
          this._infoHomeData = data
          this.infoHomeRequest.next(data)
        })
    }
    return this.infoHomeMessage
  }

  constructor(private http: HttpClient) { }

  infoHome() {
    return this.http.post(`${this.apiUrl}info_home`, '')
      .pipe(map((result => result)))
  }

  public set loadIngoDataModule(value:boolean) {
    this.isLoadingInfoDataModule = value
    if (!value) {
      this._infoDataModule = null;
    }
  }

  public infoDataModule(id: string) {
    if (!this._infoDataModule && !this.isLoadingInfoDataModule) {
      this.isLoadingInfoDataModule = true;
      this.dataModule(id).subscribe(data => {
        this._infoDataModule = data;
        this.infoDataModuleRequest.next(data)
      })
    }

    return this.infoDataModuleMessage
  }

  private dataModule(id:string){
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

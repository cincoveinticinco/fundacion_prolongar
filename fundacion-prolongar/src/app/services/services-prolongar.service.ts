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
}

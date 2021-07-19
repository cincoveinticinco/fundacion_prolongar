import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http:HttpClient) { }
  
  public apiUrl:any=environment.url;

  infoFooter() {
   let headers={
      'Access-Control-Allow-Origin':'*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return this.http.post(`${this.apiUrl}info_home`,headers)
  }
}

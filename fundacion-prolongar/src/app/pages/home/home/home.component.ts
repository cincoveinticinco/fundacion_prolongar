import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomesComponent implements OnInit {

  homeBanner:any;
  datos: any;
  urlimage: any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    console.log(this.urlimage);
    this.datosBanner();
  }

  datosBanner(){
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.homeBanner = this.datos.menu_content;
      console.log(this.datos);
    })
  }

}

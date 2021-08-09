import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomesComponent implements OnInit {

  @ViewChild('video') video: any;
  homeBanner:any;
  datos: any;
  urlimage: any;

  constructor(private services: ServicesProlongarService,
    private title: Title) {
    this.title.setTitle(`${environment.titlePage} - Inicio garabatos`)
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
  }

  datosBanner() {
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.homeBanner = this.datos.menu_content;
      console.log(this.datos);
    })
  }

}

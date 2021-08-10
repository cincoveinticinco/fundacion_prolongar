import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kas',
  templateUrl: './kas.component.html',
  styleUrls: ['./kas.component.scss']
})
export class KasComponent implements OnInit {

  public datos:any;
  public kas:any;
  urlimage: any;

  constructor(private services:ServicesProlongarService,
    private title: Title) {
    this.title.setTitle(`${environment.titlePage} - KAS`)
  }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    this.datoskas();
  }

  datoskas(){
    this.services.infoHomeData.subscribe(data => {
      if (data) {
        this.datos = data
        this.kas = this.datos.menu_content[4];
      }

    })
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private services: ServicesProlongarService) { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.video)
    // this.video.nativeElement.play().then(() => {
    //   console.log('autoplay')
    // }).catch((error:any) => {
    //   console.log('error', error)
    // })
  }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
  }

  datosBanner() {
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.homeBanner = this.datos.menu_content;
    })
  }

}

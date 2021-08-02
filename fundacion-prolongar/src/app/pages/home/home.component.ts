import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datos:any;
  public menu:any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.datosMenu();
  }

  datosMenu(){
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.menu = this.datos.menu_content;
      console.log(this.menu);
    })
  }

}

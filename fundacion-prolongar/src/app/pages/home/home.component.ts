import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datos:any;
  public menu:any;
  menuInterno:any;
  urlimage: any;

  constructor(private services:ServicesProlongarService, private router:Router) { }

  ngOnInit(): void {
    this.datosMenu();
    this.urlimage = environment.urlImage;
  }

  datosMenu(){
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.menu = this.datos.menu_content;
      this.menuInterno = this.datos.module_page
      console.log(this.menuInterno);
      
    })
  }

  redirecMenu(id: any){
    this.router.navigate(['modulo/',id])
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';

@Component({
  selector: 'app-corporalidad',
  templateUrl: './corporalidad.component.html',
  styleUrls: ['./corporalidad.component.scss']
})
export class CorporalidadComponent implements OnInit {

  public datos:any;
  public modules:any;
  public subModule:any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.corporalidad();
  }

  corporalidad(){
    let id:string ='1';
    this.services.dataModule(id).subscribe(data => {
      console.log(data);  
      this.datos=data;
      this.subModule = this.datos.sub_module_pages
      this.modules = this.datos.module_page
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  public datos:any;
  public modules:any;
  public subModule:any;
  moduleId: any;
  urlimage: any;
  messageSubModule:boolean=false;

  constructor(private services:ServicesProlongarService, private router:Router,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    this.rutaActiva.paramMap.subscribe(data=>{
      this.moduleId=data;
      this.viewModules(this.moduleId.params['tipomodule']);
    })
  }

  viewModules(id: any){
    this.services.dataModule(id).subscribe(data => {
      console.log(data);
      this.datos=data;
      this.subModule = this.datos.sub_module_pages
      this.modules = this.datos.module_page
    })
  }

  verSubmodule(item: any) {

    if (item.locked == 1) {
      item.showMessageLocked = true;
      return;
    }

    if (this.subModule.view_module==0) {
      this.messageSubModule =true;
      return
    }
    this.router.navigate(['modulo',this.moduleId.params['tipomodule'],item.id])
  }

}

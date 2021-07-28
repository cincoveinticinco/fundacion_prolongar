import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';

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

  constructor(private services:ServicesProlongarService, private router:Router,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(data=>{
      console.log(data)
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

  verSubmodule(id:any){
    this.router.navigate([this.moduleId.params['tipomodule'],id])
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import {DomSanitizer} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
environment
@Component({
  selector: 'app-sub-module',
  templateUrl: './sub-module.component.html',
  styleUrls: ['./sub-module.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class SubModuleComponent implements OnInit {

  moduleId:any;
  datos:any;
  previus:any;
  next:any;
  completado:boolean=false;
  verDespues:boolean=false;
  messageSubModule:any = null;
  urlPdf: any;
  moduleInfo: any;

  constructor(private router: Router, private services:ServicesProlongarService,private rutaActiva: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.urlPdf= environment.url;

    this.datInfo();
  }

  datInfo(){
    this.rutaActiva.paramMap.subscribe(data=>{
      this.moduleId=data;
      this.services.dataSubModule(this.moduleId.params['idsubmodule']).subscribe((data:any) => {
        this.datos = data;
        this.moduleInfo = data.module_page
        this.next = this.datos.next_submodule[0];
        this.previus = this.datos.prev_submodule[0]

        this.completado = this.moduleInfo.view_module == 1

        console.log(data);
      });
    });
  }

  compled(event:MouseEvent, id: any) {

    event.preventDefault()

    this.completado =!this.completado;
    this.verDespues = !this.completado;

    let view;
    if (this.completado) {
      view =1;
      console.log("1");

    }else {
      console.log("0");
      view =0;
    }
    let datos={
      view_module:view,
      id:id
    };

    this.services.viewSubModules(datos).subscribe(data=>{
      this.datInfo();
      this.messageSubModule=null;
    })

  }

  verdespues(event:MouseEvent, id: any) {

    event.preventDefault()

    this.verDespues =!this.verDespues;
    this.completado =!this.verDespues;

    let view;
    if (this.verDespues) {
      view =0;
      console.log("1");

    }else {
      console.log("0");
      view =1;
    }
    let datos={
      view_module:view,
      id:id
    };

    this.services.viewSubModules(datos).subscribe(data=>{
      this.datInfo();
      this.messageSubModule=null;
    })
  }

  next_submodule(data:any,module:any){

   if(this.next.locked==1){
      this.messageSubModule ='next';
      return
   }

    this.verDespues =false;
    this.completado =false;
    let idmodule=module.params['tipomodule'];
    let idsubmodule=data[0].id;
    this.router.navigate(['modulo',idmodule,idsubmodule])
    //this.services.viewSubModules(data).subscribe(data =>{})
  }

  previus_submodule(data: any, module: any) {

    if(this.previus.locked==1){
      this.messageSubModule ='next';
      return
    }

    this.verDespues =false;
    this.completado =false;
    let idmodule=module.params['tipomodule'];
    let idsubmodule=data[0].id;
    this.router.navigate(['modulo',idmodule,idsubmodule])
  }

  messageModule(data:any){
    if (data ==0) {
      this.messageSubModule =true;
    }
  }

  url(url:string) {
    /* lo que llega de BD: https://youtu.be/ayd3yWr4tqU */
    /* la correcta para el iframe: https://www.youtube.com/embed/ayd3yWr4tqU */
    let urlgood = url
    let url2 = urlgood.split('https://youtu.be/');
    let urlYouTube="https://www.youtube.com/embed/"
    let url3 = url2.concat(urlYouTube+url2[1])
    return this.sanitizer.bypassSecurityTrustResourceUrl(url3[2])
  }

  safeHtml(content:any) {
    return this.sanitizer.bypassSecurityTrustHtml(content)
  }

}

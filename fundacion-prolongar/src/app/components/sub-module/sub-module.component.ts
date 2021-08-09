import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import {DomSanitizer, Title} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
environment
@Component({
  selector: 'app-sub-module',
  templateUrl: './sub-module.component.html',
  styleUrls: ['./sub-module.component.scss'],
})
export class SubModuleComponent implements OnInit {

  loader: boolean = true;
  moduleId:any;
  subModuleId:any;
  datos:any;
  previus:any;
  next:any;
  completado:boolean=false;
  verDespues:boolean=false;
  messageSubModule:any = null;
  urlPdf: any;
  moduleInfo: any;

  constructor(
    private router: Router,
    private services:ServicesProlongarService,
    private rutaActiva: ActivatedRoute,
    private sanitizer:DomSanitizer,
    private title: Title) {

  }

  ngOnInit(): void {
    this.urlPdf = environment.urlImage;

    this.datInfo();
  }

  datInfo(){
    this.rutaActiva.params.subscribe(params => {

      this.moduleId = params.tipomodule;
      this.subModuleId = params.idsubmodule;

      this.services.dataSubModule(this.subModuleId).subscribe((data:any) => {
        this.datos = data;
        this.moduleInfo = data.module_page
        this.next = this.datos.next_submodule[0];
        this.previus = this.datos.prev_submodule[0]

        this.title.setTitle(`${environment.titlePage} - ${this.moduleInfo.module_page_id} / ${this.moduleInfo.sub_module_name}`)

        this.completado = this.moduleInfo.view_module == 1

        if (this.moduleInfo.locked == 1) {
          this.router.navigate(['modulo', this.moduleId])
        }



        this.loader = false
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

    }else {
      view =0;
    }
    let datos={
      view_module:view,
      id:id
    };

    this.services.viewSubModules(datos).subscribe(data => {
      console.log(data);
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

    }else {
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
    let idmodule=this.moduleId;
    let idsubmodule=data.id;
    this.router.navigate(['modulo',idmodule,idsubmodule])
  }

  previus_submodule(data: any, module: any) {

    if(this.previus.locked==1){
      this.messageSubModule ='next';
      return
    }

    this.verDespues =false;
    this.completado =false;
    let idmodule=this.moduleId;
    let idsubmodule=data.id;
    this.router.navigate(['modulo',idmodule,idsubmodule])
  }

  messageModule(data:any){
    if (data ==0) {
      this.messageSubModule =true;
    }
  }

  url(url:string) {


    if (!url || (url && url.length <= 0))
      return null;

    if (url.indexOf('youtu') > -1) {
      /* lo que llega de BD: https://youtu.be/ayd3yWr4tqU */
      /* la correcta para el iframe: https://www.youtube.com/embed/ayd3yWr4tqU */
      let urlgood = url
      let url2 = urlgood.split('https://youtu.be/');
      let urlYouTube="https://www.youtube.com/embed/"
      let url3 = url2.concat(urlYouTube+url2[1])
      return this.sanitizer.bypassSecurityTrustResourceUrl(url3[2])
    }

    if (url.indexOf('soundcloud') > -1) {
      let urlSoundCloud = `https://w.soundcloud.com/player/?url=${url}&color=%23dd9781&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`
      return this.sanitizer.bypassSecurityTrustResourceUrl(urlSoundCloud)
    }

    return null;

  }

  safeHtml(content:any) {
    return this.sanitizer.bypassSecurityTrustHtml(content)
  }

}

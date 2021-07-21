import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public datafooter:any;

  constructor(private serviceFooter:FooterService) { }

  ngOnInit(): void {
    this.infoFooter()
  }

  infoFooter() {
    this.serviceFooter.infoFooter().subscribe(data => {
      console.log(data);
      this.datafooter = data;
      
    })
    /* console.log(this.datafooter.contact[0].name); */
  }
}

import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { map } from 'rxjs/operators';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public datafooter:any;
  public datos:any;

  constructor(private serviceFooter:ServicesProlongarService) { }

  ngOnInit(): void {
    this.infoFooter()
  }

  infoFooter() {
    this.serviceFooter.infoHomeData.subscribe(data => {
      if (data) {
        this.datafooter = data;
        this.datos = this.datafooter.contact[0];
      }
    })
  }
}

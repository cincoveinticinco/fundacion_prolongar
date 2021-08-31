import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { map } from 'rxjs/operators';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public datafooter:any;
  public datos:any;

  constructor(private serviceFooter:ServicesProlongarService, private router: Router) { }

  ngOnInit(): void {
    this.infoFooter()
  }

  goToHome() {
    window.scrollTo(0, 0);
    this.router.navigate(['home', 'homes'])
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

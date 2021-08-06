import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {

  model: any = {}
  error: any;
  validateMail: boolean = false;
  validatePassword: boolean = false;
  createNewPassword: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthservicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.token) {
        this.createNewPassword = true;
        this.model.token = params.token
      }
    })
  }

  submit() {

    if (this.model.token) {
      this.authService.recuperarContrasena(this.model.password, this.model.token)
        .subscribe((data:any) => {
          if (data.error) {
            this.error = "El token de recuperación a expirado";
            return;
          }

          this.validatePassword = true;
        })
    } else {
      this.authService.validarEmail(this.model.email)
      .subscribe((data:any) => {
        if (data.error) {
          this.error = "El correo eletrónico no existe"
          return
        } else {
          this.error = null;
          this.validateMail = true;
        }
      })
    }

  }

}

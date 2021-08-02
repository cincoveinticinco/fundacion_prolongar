import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { MustMatch } from './MustMatch';

@Directive({
  selector: '[appValidarPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:  ValidarPasswordDirective,
    multi: true
  }]
})
export class ValidarPasswordDirective implements Validator {
  @Input('appValidarPassword') appValidarPassword: string[] = [];

  validate(formGroup: FormGroup):any{
      return MustMatch(this.appValidarPassword[0], this.appValidarPassword[1])(formGroup);
  }

}

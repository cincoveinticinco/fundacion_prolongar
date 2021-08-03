import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateAge]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidateAgeDirective),
    multi: true
  }]

})
export class ValidateAgeDirective implements Validator{

  constructor(@Attribute('maxAge') public _maxAge: string) { }

  private get maxAge(): number {
    if (!this._maxAge) return 18
    return Number(this.maxAge)
  }

  validate(c: AbstractControl): { [key: string]: any } | null {
    let v = Number(c.value);

    if (v < this.maxAge) return {
      validateAge: true
    }

    return null
  }

}

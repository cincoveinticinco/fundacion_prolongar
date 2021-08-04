import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidateEqualDirective),
    multi: true
  }]

})
export class ValidateEqualDirective implements Validator{

  constructor(
    @Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string) { }

  private get isReverse() {
    if (!this.reverse) return false
    return this.reverse === 'true' ? true : false

  }

  validate(c: AbstractControl): {[key: string] : any} | null {
    //self
    let v = c.value

    //control
    let e = c.root.get(this.validateEqual)

    if (e && v !== e.value && !this.isReverse) return {
      validateEqual: true
    }

    if (e && v === e.value && this.isReverse) {
      console.log("2", e)
      if (e.errors) {
        delete e.errors['validateEqual']
        if (!Object.keys(e.errors).length) e.setErrors(null);
      }
    }

    if (e && v !== e.value && this.isReverse) {
      e.setErrors({validateEqual: true})
    }

    return null;
  }

}

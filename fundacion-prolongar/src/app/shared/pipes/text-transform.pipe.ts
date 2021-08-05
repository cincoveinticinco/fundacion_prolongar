import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class TextTransformPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}
  transform(value: any): any {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}

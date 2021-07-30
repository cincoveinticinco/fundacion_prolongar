import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

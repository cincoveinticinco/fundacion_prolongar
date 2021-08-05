import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    TextTransformPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    TextTransformPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }

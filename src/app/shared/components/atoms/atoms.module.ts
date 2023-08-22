import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from './label/label.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LabelModule
  ],
  exports: [
    LabelModule
  ]
})
export class AtomsModule { }

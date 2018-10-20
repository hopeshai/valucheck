import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePathModule } from '../image-path/image-path.module';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    ImagePathModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports:  [
    ButtonComponent
  ]
})
export class ButtonModule { }

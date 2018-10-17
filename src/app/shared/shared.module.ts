import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { BrandImagePipe } from './brand-image.pipe';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BrandImagePipe,
    ButtonComponent,
    IconComponent
  ],
  declarations: [
    IconComponent,
    BrandImagePipe,
    ButtonComponent
  ]
})
export class SharedModule { }

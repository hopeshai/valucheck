import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ImagePathModule } from '../image-path/image-path.module';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule,
    ImagePathModule
  ],
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule { }

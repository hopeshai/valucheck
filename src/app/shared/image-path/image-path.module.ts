import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePathPipe } from './image-path.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagePathPipe
  ],
  exports: [
    ImagePathPipe
  ]
})
export class ImagePathModule { }

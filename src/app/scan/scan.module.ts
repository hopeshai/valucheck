import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { InputCodeComponent } from './input-code/input-code.component';
import { ScanComponent } from './scan.component';
import { ButtonModule } from '../shared/button/button.module';
import { IconModule } from '../shared/icon/icon.module';
import { ImagePathModule } from '../shared/image-path/image-path.module';
import { WebcamComponent } from './webcam/webcam.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
    ImagePathModule,
    ScanRoutingModule
  ],
  declarations: [
    QrCodeComponent,
    BarCodeComponent,
    InputCodeComponent,
    ScanComponent,
    WebcamComponent
  ]
})
export class ScanModule { }

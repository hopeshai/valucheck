import { Component, OnInit, ViewChild } from '@angular/core';
import jsQR from 'jsqr';
import { WebcamComponent } from '../webcam/webcam.component';

@Component({
  selector: 'nv-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  @ViewChild('webcam') webcam: WebcamComponent;

  constructor() { }

  ngOnInit() {
  }

  handleImage(imageData: ImageData) {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code && code.data) {
      this.webcam.stopRecording();
      console.log(code.data);
    }
  }
}

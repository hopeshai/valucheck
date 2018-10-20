import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import jsQr from 'jsqr';
import 'webrtc-adapter/out/adapter_no_global';

@Component({
  selector: 'nv-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, OnDestroy {

  @ViewChild('video') videoRef: ElementRef;
  @ViewChild('canvas') canvasRef: ElementRef;
  flashStatus = false;

  constructor() { }

  ngOnInit() {
    const [ width, height ] = this.getSize();
    this.startRecording(width, height);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
  }

  getSize() {
    const video = this.videoRef.nativeElement;
    const { offsetWidth, offsetHeight } = video.parentNode;
    return [ offsetWidth, offsetHeight ];
  }

  startRecording(width, height) {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = video.width = width;
    canvas.height = video.height = height;
    const constraints = {
      video: {
        width,
        height,
        facingMode: 'environment'
      }
    };
    navigator.mediaDevices.
        getUserMedia(constraints).
        then(this.handleSuccess.bind(this)).
        catch(this.handleError.bind(this));
  }

  handleSuccess(stream) {
    const video = this.videoRef.nativeElement;
    video.srcObject = stream;
    this.track = stream.getVideoTracks()[0];
    this.raf = requestAnimationFrame(this.refreshCanvas);
  }

  handleError() {}

  refreshCanvas = () => {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    this.raf = requestAnimationFrame(this.refreshCanvas);
  };

  switchCamera = () => {
    const currentMode = this.track.getSettings().facingMode;
    const newMode = currentMode === 'environment' ? 'user' : 'environment';
    this.track.applyConstraints({
      facingMode: newMode
    });
  };

  flash = onOrOff => {
    const imageCapture = new ImageCapture(this.track);
    imageCapture.getPhotoCapabilities().
      then(() => {
        this.track.applyConstraints({
            advanced: [{ torch: onOrOff }]
        }).
        then(() => {
          this.flashStatus = onOrOff;
        }).
        catch(() => {});
      });
  };
}

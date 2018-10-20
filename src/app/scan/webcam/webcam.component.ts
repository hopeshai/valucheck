import { Component, OnInit, OnDestroy, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import 'webrtc-adapter/out/adapter_no_global';
import { Router } from '@angular/router';

@Component({
  selector: 'nv-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, OnDestroy {

  @ViewChild('video') videoRef: ElementRef;
  @ViewChild('canvas') canvasRef: ElementRef;
  @ViewChild('canvasOverlay') canvasOverlayRef: ElementRef;
  @Output('image') imageEmitter = new EventEmitter<ImageData>();

  flashStatus = false;
  stream: MediaStream;
  raf: number;
  recording = false;
  error: Error;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setSize();
    this.startRecording();
  }

  ngOnDestroy() {
    this.stopRecording();
  }

  setSize() {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    const canvasOverlay = this.canvasOverlayRef.nativeElement;
    const { offsetWidth, offsetHeight } = video.parentNode;
    canvas.width = canvasOverlay.width = video.width = offsetWidth;
    canvas.height = canvasOverlay.height = video.height = offsetHeight;
  }

  startRecording() {
    const canvas = this.canvasRef.nativeElement;
    const constraints = {
      video: {
        width: canvas.width,
        height: canvas.height,
        facingMode: 'environment'
      }
    };
    navigator.mediaDevices.
        getUserMedia(constraints).
        then(this.handleSuccess.bind(this)).
        catch(this.handleError.bind(this));
  }

  stopRecording() {
    this.recording = false;
    cancelAnimationFrame(this.raf);
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  handleSuccess(stream) {
    const video = this.videoRef.nativeElement;
    this.error = null;
    video.srcObject = stream;
    this.recording = true;
    this.stream = stream;
    this.raf = requestAnimationFrame(this.refreshCanvas);
  }

  handleError(error: Error) {
    this.error = error;
    this.startRecording();
  }

  refreshCanvas = () => {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        this.drawScanArea();
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        this.imageEmitter.emit(imageData);
    }
    if (this.recording) {
      this.raf = requestAnimationFrame(this.refreshCanvas);
    }
  };

  drawScanArea = () => {
    const canvasOverlay = this.canvasOverlayRef.nativeElement;
    const canvasWidth = canvasOverlay.width;
    const canvasHeight = canvasOverlay.height;
    const scanAreaSize = 150;
    const x = canvasWidth / 2 - scanAreaSize / 2;
    const y = canvasHeight / 2 - scanAreaSize / 2;
    const ctx = canvasOverlay.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.globalCompositeOperation = 'source-out';
    ctx.fillStyle = '#000';
    this.roundRect(ctx, x, y, scanAreaSize, scanAreaSize, 25);
    ctx.fill();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.globalCompositeOperation = 'source-over';
    this.drawScanMessage(ctx, canvasWidth / 2, y);
  };

  drawScanMessage(ctx, x, y) {
    const message = 'Place your QR Code here';
    ctx.textAlign = 'center';
    ctx.font = '16px "Gill Sans", Calibri, "Trebuchet MS", sans-serif';
    ctx.fillStyle = '#fff';
    ctx.fillText(message, x, y - 20);
  }

  roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  switchCamera = () => {
    const track = this.stream.getVideoTracks()[0];
    const currentMode = track.getSettings().facingMode;
    const newMode = currentMode === 'environment' ? 'user' : 'environment';
    track.applyConstraints({
      facingMode: newMode
    });
  };

  flash = onOrOff => {
    /*const track = this.stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);
    imageCapture.getPhotoCapabilities().
      then((capabilities) => {
        if (capabilities.torch) {
          track.applyConstraints({
              advanced: [{
                  torch: onOrOff
              }]
          }).
          then(() => {
            this.flashStatus = onOrOff;
          }).
          catch(() => {});
        }
      }); */
  };

  navigateToHome() {
    this.router.navigate(['../']);
  }
}

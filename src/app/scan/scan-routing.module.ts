import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { InputCodeComponent } from './input-code/input-code.component';
import { ScanComponent } from './scan.component';

const routes: Routes = [
  {
    path: '',
    component: ScanComponent,
    children: [
      {
        path: 'qr-code',
        component: QrCodeComponent
      },
      {
        path: 'bar-code',
        component: BarCodeComponent
      },
      {
        path: 'input-code',
        component: InputCodeComponent
      },
      {
        path: '',
        redirectTo: 'qr-code',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanRoutingModule { }

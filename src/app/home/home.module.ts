import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductComponent } from './product/product.component';
import { RecentComponent } from './recent/recent.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, BrandsComponent, ProductComponent, RecentComponent]
})
export class HomeModule { }

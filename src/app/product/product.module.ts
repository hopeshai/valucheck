import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IconModule } from '../shared/icon/icon.module';
import { ButtonModule } from '../shared/button/button.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ButtonModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, NotFoundComponent, DetailsComponent]
})
export class ProductModule { }

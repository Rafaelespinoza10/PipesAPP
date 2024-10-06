import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/common-page.component';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { colorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    colorPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }

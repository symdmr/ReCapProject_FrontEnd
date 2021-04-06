import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';

import{ToastrModule} from "ngx-toastr";
// import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DatePipe } from '@angular/common';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    VatAddedPipe,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    // CartSummaryComponent,
    PaymentComponent,
    OneCarDetailComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

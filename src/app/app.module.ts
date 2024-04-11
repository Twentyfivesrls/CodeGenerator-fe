import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponComponent } from './coupon/coupon.component';
import {HttpClientModule} from "@angular/common/http";
import {GenericButtonModule} from "generic-buttons";

@NgModule({
  declarations: [
    AppComponent,
    CouponComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        GenericButtonModule
    ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CouponComponent} from "./coupon/coupon.component";


const routes: Routes = [
  { path: '', component: CouponComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

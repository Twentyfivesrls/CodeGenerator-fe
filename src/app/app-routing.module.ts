import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CouponComponent} from "./coupon/coupon.component";
import {TwentyfiveNotFoundComponent} from "twentyfive-not-found";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: CouponComponent },
  { path: '**', component: TwentyfiveNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

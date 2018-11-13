import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShirtCartComponent } from './shirt-cart/shirt-cart.component';
import { ShirtListComponent } from './shirt-list/shirt-list.component';
import { ShirtCustomerComponent } from './shirt-customer/shirt-customer.component';
import { ShirtOwnerComponent } from './shirt-owner/shirt-owner.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShirtCartComponent,
    ShirtListComponent,
    ShirtCustomerComponent,
    ShirtOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

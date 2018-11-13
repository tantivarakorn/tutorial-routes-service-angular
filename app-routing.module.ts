import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ShirtCustomerComponent } from './shirt-customer/shirt-customer.component';
import { ShirtOwnerComponent } from './shirt-owner/shirt-owner.component';

const routes: Routes = [
  {
    path: 'customer',
    component: ShirtCustomerComponent
  },
  {
    path: 'owner',
    component: ShirtOwnerComponent
  },
  {
    path: '',
    redirectTo: '/cumtomer',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

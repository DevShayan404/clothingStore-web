import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './Components/collection/collection.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Home/:name',
    component: CollectionComponent,
  },
  {
    path: 'Home/:name/Product',
    component: ProductDetailComponent,
  },
  {
    path: 'Home/:name/Product/Checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

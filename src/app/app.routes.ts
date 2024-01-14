import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    title: 'Products app',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: 'cart-page',
    component: CartComponent,
    title: 'Cart',
  },
  // {
  //   path: 'counter',
  //   component: CounterComponent,
  //   title: 'counter',
  // },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

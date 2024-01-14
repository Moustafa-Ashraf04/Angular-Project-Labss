import { Product } from '../interface/Products';
import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from '../services/products-list.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {


  products!: Product[];
  @Input() product: any;

  cartItemCount = 0;
  constructor(
    private productsListService: ProductsListService,
    private cartService: CartService
  ) {
    this.cartService.cartItemCount$.subscribe(
      (count) => (this.cartItemCount = count)
    );
  }
  ngOnInit() {
    this.productsListService
      .getProductsList()
      .subscribe((res: any) => (this.products = res.products));
    console.log(this.products);
  }
  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}

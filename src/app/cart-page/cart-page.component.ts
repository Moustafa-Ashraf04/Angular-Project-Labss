import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }


  decrementQuantity(index: number) {
    this.cartService.decrementQuantity(index);
  }

  incrementQuantity(index: number) {
    this.cartService.incrementQuantity(index);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  private calculateTotal(): void {
    this.total = this.cartService.getTotal();
  }

}

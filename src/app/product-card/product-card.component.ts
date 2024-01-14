import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() sendToParent = new EventEmitter<string>();

  constructor(private router: Router, private cartService: CartService) {}

  get stockText(): string {
    return this.product.stock === 0 ? 'Out of Stock' : 'In Stock';
  }

  get stockColor(): string {
    return this.product.stock === 0 ? 'red' : 'green';
  }
  navigateToProductDetails() {
    this.router.navigate(['/product-details', this.product.id]);
  }
  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}

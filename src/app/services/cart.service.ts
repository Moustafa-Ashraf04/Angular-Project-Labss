// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cartItems: any[] = [];
//   private cartItemCountSubject = new BehaviorSubject<number>(0);
//   public cartItemCount$ = this.cartItemCountSubject.asObservable();

//   constructor() {}

//   addToCart(item: any): void {
//     this.cartItems.push(item);
//     this.updateCartItemCount();
//   }

//   getCartItems(): any[] {
//     return this.cartItems;
//   }

//   private updateCartItemCount(): void {
//     const itemCount = this.cartItems.length;
//     this.cartItemCountSubject.next(itemCount);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  public cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor() {}

  addToCart(item: any): void {
    // Check if the item is already in the cart
    const existingItem = this.cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      // If item exists, increment quantity
      existingItem.quantity++;
    } else {
      // If item doesn't exist, add to cart with quantity 1
      this.cartItems.push({ ...item, quantity: 1 });
    }

    this.updateCartItemCount();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  decrementQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateCartItemCount();
    }
  }

  incrementQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.updateCartItemCount();
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartItemCount();
  }

  private updateCartItemCount(): void {
    const itemCount = this.cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    this.cartItemCountSubject.next(itemCount);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}

import { ProductsListService } from '../services/products-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/Products';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any;


  constructor(
    private productsdetailsService: ProductsListService,
    private cartService: CartService
  ) {}

  @Input() id?: string;

  ngOnInit() {
    console.log(this.product);
    this.productsdetailsService
      .getProductDetails(this.id)
      .subscribe((res: any) => (this.product = res));
  }
  get stockColor(): string {
    const selectedProduct = this.product;

    if (selectedProduct && 'stock' in selectedProduct) {
      return selectedProduct.stock === 0 ? 'red' : 'green';
    }

    return 'red';
  }
  get stockText(): string {
    const firstProduct = this.product;

    return firstProduct.stock === 0 ? 'Out of Stock' : 'In Stock';
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
// export class ProductDetailsComponent implements OnInit {
//   product: any;

//   constructor(private productrequestService: ProductsListService) {}

//   @Input() id?: any;

//   ngOnInit() {
//     // this.product = this.products.find((product: any) => product.id == this.id);

//     // this.productrequestService
//     //   .getproductbyid(this.id)
//     //   .subscribe((requestproduct) => {
//     //     this.product = requestproduct;
//     //   });

//     this.productrequestService
//       .getProductDetails(this.id)
//       .subscribe((requestproduct) => {
//         this.product = requestproduct;
//       });
//   }
//   get stockText(): string {
//     const firstProduct = this.product;

//     return firstProduct.stock === 0 ? 'Out of Stock' : 'In Stock';
//   }

//   get stockColor(): string {
//     const selectedProduct = this.product;

//     if (selectedProduct && 'stock' in selectedProduct) {
//       return selectedProduct.stock === 0 ? 'red' : 'green';
//     }

//     return 'red';
//   }
// }

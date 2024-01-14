export interface Product {
  id: any;
  title: string;
  description: string;
  price: Number;
  discountPercentage: Number;
  rating: Number;
  stock: Number;
  brand: string;
  category: string;
  thumbnail: any;
  images: Array<any>;
  createdAt: string;
}

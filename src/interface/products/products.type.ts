export type Reviews = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail:string;
}

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  availabilityStatus: string;
  dimensions: {
      width: number;
      height: number;
      depth: number;
    };
  reviews:Reviews[];
  images: string[];
}

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
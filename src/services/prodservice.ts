import {
    Product,
    ProductsResponse
}
from '../interface/products/products.type';

export default class productsAPI {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://dummyjson.com') {
    this.baseUrl = baseUrl;
  }


  /**
   * Get products numbering limitskipping first 'skip' products
   */
  async getProductLimitFromSkip(limit: number = 30, skip: number = 0): Promise<ProductsResponse> {
    try {
      const response = await fetch(
        `${this.baseUrl}/products?limit=${limit}&skip=${skip}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as ProductsResponse;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch products: ${error.message}`);
      }
      throw new Error('Failed to fetch products');
    }
  }

  /**
   * Get a single product by ID
   */
  async getProductByID(id: number): Promise<Product> {
    try {
      const response = await fetch(`${this.baseUrl}/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as Product;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch product ${id}: ${error.message}`);
      }
      throw new Error(`Failed to fetch product ${id}`);
    }
  }

  /**
   * Search products by query
   */
  async searchProducts(query: string): Promise<ProductsResponse> {
    try {
      const response = await fetch(
        `${this.baseUrl}/products/search?q=${encodeURIComponent(query)}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as ProductsResponse;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to search products: ${error.message}`);
      }
      throw new Error('Failed to search products');
    }
  }

  /**
   * Get product categories
   */
  async getCategories(): Promise<ProductsResponse> {
    try {
      const response = await fetch(
        `${this.baseUrl}/products/categories`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as ProductsResponse;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch categories ${error.message}`);
      }
      throw new Error(`Failed to fetch categories`);
    }
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(category: string): Promise<ProductsResponse> {
    try {
      const response = await fetch(
        `${this.baseUrl}/products/category/${encodeURIComponent(category)}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as ProductsResponse;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch products in category ${category}: ${error.message}`);
      }
      throw new Error(`Failed to fetch products in category ${category}`);
    }
  }
}

import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import productsAPI from "../../services/prodservice.ts";
import {
	Product,
	ProductsResponse,
} from "../../interface/products/products.type";

const ProductList = () => {
	const [productsData, setProductsData] =
		useState<ProductsResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchList = async () => {
		try {
			const prodAPI = new productsAPI();
			const products =
				await prodAPI.getProductLimitFromSkip(20, 10);

			console.log(products);

			return products;
		} catch (error) {
			console.error(error);
			setError("Failed to fetch products.");
			return {
				products: [
					{
						id: -1,
						title: "",
						description: "",
						price: -1,
						discountPercentage: -1,
						rating: -1,
						stock: -1,
						brand: "",
						category: "",
						thumbnail: "",
						images: [""],
					},
				],
				total: -1,
				skip: -1,
				limit: -1,
			};
		}
	};

	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true);
			const data = await fetchList();
			setProductsData(data);
			setLoading(false);
		};

		loadProducts();
	}, []);
    
	return (
		<div className="product-list-wrapper">
            {loading && <p>Loading...</p>} {/* Show loading state */}
            {error && <p>Error: {error}</p>} {/* Show error state */}
            {productsData && !loading && !error 
                && (
                    <div className="product-list">
                        {productsData?.products.map(
                            (product: Product) => (
                                <ProductCard key={product.id}>
                                    {product}
                                </ProductCard>
                            )
                        )}
                    </div>
                )
            }
		</div>
	);
};

export default ProductList;

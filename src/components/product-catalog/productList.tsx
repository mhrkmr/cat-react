import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import Pagination from "./pagination.tsx";
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

	const [pageNumber, setPageNumber] = useState<number>(1);

	const fetchList = async (pageNumber: number = 0) => {
		try {
			const prodAPI = new productsAPI();
			const products =
				await prodAPI.getProductLimitFromSkip(
					20,
					20 * (pageNumber - 1)
				);

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
			const data = await fetchList(pageNumber);
			setProductsData(data);
			setLoading(false);
		};

		loadProducts();
	}, [pageNumber]);

	return (
		<div className="product-list-wrapper">
			{loading && (
				<div className="headline-top-div midtext">
					<div className="headline-div">
						<span className="headline-text">
							Loading...
						</span>
					</div>
				</div>
			)}{" "}
			{/* Show loading state */}
			{error && (
				<div className="headline-top-div midtext">
					<div className="headline-div">
						<span className="headline-text">
							Error: {error}
						</span>
					</div>
				</div>
			)}{" "}
			{/* Show error state */}
			{productsData && !loading && !error && (
				<div className="product-list">
					{productsData?.products.map(
						(product: Product) => (
							<ProductCard key={product.id}>
								{product}
							</ProductCard>
						)
					)}
				</div>
			)}
			<Pagination
				onPageChange={setPageNumber}
				isHidden={loading}
			></Pagination>
		</div>
	);
};

export default ProductList;

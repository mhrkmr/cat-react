import Headline from "../components/product-catalog/headline";
import ProductList from "../components/product-catalog/productList";

const ProductCatalog = () => {


	return (
		<div className="product-catalog">
			<div className="product-catalog-wrapper">
				<Headline text="Product Catalog" />
				<ProductList />
			</div>
		</div>
	);
};

export default ProductCatalog;

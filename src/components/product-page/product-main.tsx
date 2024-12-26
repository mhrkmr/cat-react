import { Product } from "../../interface/products/products.type";
import ProductCarousel from "./product-carousel";
import ProductDescription from "./product-description";

interface ProductProps {
    product: Product;
}

const ProductMain = ({product}:ProductProps) => {
    return (
			<div className="product-main">
				{product && (
					<div className="product">
						<ProductCarousel imageArray={product.images} />
						<ProductDescription>
                            {product}
                        </ProductDescription>
					</div>
				)}
			</div>
		);
}

export  default ProductMain;
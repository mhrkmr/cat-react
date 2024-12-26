import { useParams } from "react-router-dom";
import ProductMain from "../components/product-page/product-main";
import Headline from "../components/shared/headline";
import { Product } from "../interface/products/products.type";
import { useEffect, useState } from "react";
import productsAPI from "../services/prodservice";

const ProductDetails = () => {
	const { id = "0" } = useParams();
    const [currentProduct,setProducts] = useState<Product | null>(null);

    

    useEffect(() => {
        const prodAPI = new productsAPI();
        
        const loadProducts = async () => {
        const idNum = parseInt(id);
        const productData = await prodAPI.getProductByID(idNum);
        setProducts(productData);
        }

        loadProducts();
    },[id])


	return (
		<div className="product-page">
			{currentProduct && (
				<div className="product-page-wrapper">
					<Headline text={currentProduct.title} />
					<ProductMain key={id} product={currentProduct} />
				</div>
			)}
		</div>
	);
};

export default ProductDetails;

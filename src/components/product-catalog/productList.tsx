import ProductCard from "./productCard";
import productsAPI from "../../services/prodservice.ts";
import { Product,ProductsResponse } from "../../interface/products/products.type";


const ProductList = () => {
    
    const fetchList = async() => {
        try {
            const prodAPI = new productsAPI();

            const products = await prodAPI.getProductLimitFromSkip(20,0);

            console.log(products);

            return await products;
        } catch (error) {
            console.error(error);
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
    }

    var timeout=0;
    const abc = fetchList();

    while(timeout<1000 && !abc.resolved()){
		console.log(abc);
        timeout = timeout + 200;
    }
    

    return (
			<div className="product-list-wrapper">
				<div className="product-list">
					<p>{abc.total}</p>
                    {console.log(abc)}
					<ProductCard />
				</div>
			</div>
		);


}

export default ProductList;
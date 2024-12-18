import { Product } from "../../interface/products/products.type";

// Define props interface for ProductCard
interface ProductCardProps {
	children?: Product; // Optional children prop
}

const ProductCard = ({ children }: ProductCardProps) => {
	return (
		<div className="card-box">
			{!children && <div> NA </div>}
			{children && (
				<div className="card-details">
					<div className="card-name-div">
						<span className="product-name">
							{children.title}
						</span>
					</div>
				</div>
			)}
			{children && (
				<div className="card-image">
					<div className="discount-div">
						<span className="discount">{`${children.discountPercentage}%`}</span>
					</div>
					<img
						src={children.images[0]}
						alt={children.title}
						loading="lazy"
					></img>
				</div>
			)}
			{children && (
				<div className="on-hover-div">
					<div className="card-name-div">
						<span className="product-name">
							{children.title}
						</span>
					</div>
					<div className="card-description-div">
						<span className="description">
							{children.description}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductCard;

import { useMemo } from "react";
import { Product, Reviews } from "../../interface/products/products.type";
import Rating from "../shared/rating";

interface ProdDescProp {
    children:Product;
}

const ProductDescription = ({children}:ProdDescProp) =>{
    const x = useMemo<number>(() => {
			let total = 0;
			children.reviews.forEach((review: Reviews) => {
				total = total + review.rating;
			});

			return Math.trunc((total / children.reviews.length) * 100) / 100;
		}, [children.reviews]);


    return (
			<div className="product-full">
				<div className="product-description">{children.description}</div>
				<div
					className={
						children.reviews.length === 0
							? "overall-rating bottom-radius"
							: "overall-rating"
					}
				>
					Rating: {x}
				</div>
				{children.reviews.length > 0 &&
					children.reviews.map((review: Reviews, index: number) => (
						<div
							key={index}
							className={
								index === children.reviews.length - 1
									? "review-div bottom-radius"
									: "review-div"
							}
						>
							<div className="reviewer-name">{review.reviewerName}</div>
							<div className="review-rating"><Rating value={review.rating} /></div>
							<div className="review-comment">{review.comment}</div>
						</div>
					))}
			</div>
		);
}

export default ProductDescription;
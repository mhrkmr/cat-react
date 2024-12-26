import { useState } from "react";

interface ProductCarouselProp {
    imageArray?: Array<string>;
}

const ProductCarousel = ({imageArray}:ProductCarouselProp) => {
    const [mainImageIndex, setImageIndex] = useState(0);
    return (
			<div className="product-carousel">
				{imageArray && (
					<div className="main-image-div">
						<img src={imageArray[mainImageIndex]} alt="main-image" />
					</div>
				)}
				{imageArray && imageArray?.length > 0 && (
					<div className="image-flex">
						{imageArray.map((value: string, index: number) => (
							<div
								key={index}
								onClick={() => {
									setImageIndex(index);
								}}
								className={
									index === mainImageIndex
										? "scroll-image is-active"
										: "scroll-image"
								}
							>
								<img src={value} alt="all-images" />
							</div>
						))}
					</div>
				)}
			</div>
		);
}

export default ProductCarousel;
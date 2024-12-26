import { useState, useEffect } from "react";
import useWindowDimensions from "../../states/windowsize";

interface IProps {
	allPagesNumber?: number;
	isHidden: boolean;
	onPageChange: (page: number) => void; // This is the type for onPageChange
}

const Pagination = ({
	onPageChange,
	allPagesNumber = 10,
	isHidden,
}: IProps) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = allPagesNumber; // Adjust this to your total number of pages

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		onPageChange(page); // Notify parent component of the page change
	};

	const { width: width } = useWindowDimensions();

	const wideView = width > 775;
	const narrowView = width < 516;

	let maxButton: number = 7;
	if (wideView) {
		maxButton = 7;
	} else {
		if (!narrowView) {
			maxButton = 5;
		}
		if (narrowView) {
			maxButton = 3;
		}
	}

	useEffect(() => {
	}, [currentPage]);

	return (
		<div className={isHidden ? "pagination hide" : "pagination"}>
			<button
				className="nav-button prev"
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<img
					className="icon-in-button"
					src="/assets/svg/arrow-down.svg"
					id="prev"
				></img>
			</button>
			<div className="page-number-div">
				<button
					key="1"
					id="1"
					onClick={() => handlePageChange(1)}
					className={currentPage === 1 ? "nav-button active" : "nav-button"}
				>
					1
				</button>
				{totalPages > 2 &&
					totalPages < maxButton + 3 &&
					[...Array(totalPages - 2)].map((_, index) => (
						<button
							key={index + 2}
							id={`${index + 2}`}
							onClick={() => handlePageChange(index + 2)}
							className={
								currentPage === index + 2 ? "nav-button active" : "nav-button"
							}
						>
							{index + 2}
						</button>
					))}

				{totalPages > maxButton + 2 &&
					[...Array(maxButton)].map((_, index) => (
						<div
							key={index}
							className={
								index + currentPage - Math.floor(maxButton / 2) > 1 &&
								index + currentPage - Math.floor(maxButton / 2) < totalPages
									? "box"
									: "box hide"
							}
						>
							{index === 0 && currentPage - Math.floor(maxButton / 2) >= 3 && (
								<div className="dots">...</div>
							)}
							<button
								id={`${index + currentPage - Math.floor(maxButton / 2)}`}
								onClick={() =>
									handlePageChange(
										index + currentPage - Math.floor(maxButton / 2)
									)
								}
								className={
									currentPage ===
									index + currentPage - Math.floor(maxButton / 2)
										? "nav-button active"
										: "nav-button"
								}
							>
								{index + currentPage - Math.floor(maxButton / 2)}
							</button>
							{index === maxButton - 1 &&
								currentPage + Math.ceil(maxButton / 2) < totalPages && (
									<div className="dots">...</div>
								)}
						</div>
					))}
				{totalPages > 1 && (
					<button
						key={`${totalPages}`}
						id={`${totalPages}`}
						onClick={() => handlePageChange(totalPages)}
						className={
							currentPage === totalPages ? "nav-button active" : "nav-button"
						}
					>
						{totalPages}
					</button>
				)}
			</div>
			<button
				className="nav-button next"
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === allPagesNumber}
			>
				<img
					className="icon-in-button"
					src="/assets/svg/arrow-up.svg"
					id="next"
				></img>
			</button>
		</div>
	);
};

export default Pagination;

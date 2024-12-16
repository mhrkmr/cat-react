import React from "react";

interface HeadlineProps {
	text: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => {
	return (
		<div className="headline-top-div">
			<div className="headline-div">
				<span className="headline-text">{text}</span>
			</div>
		</div>
	);
};

export default Headline;

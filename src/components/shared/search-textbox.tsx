interface SearchBox{
    children?: string;
}

const SearchBox = ({children}: SearchBox) => {
    return (
			<div className="searchbox-div">
				<input
					className="text-box"
					type="text"
                    placeholder={children}
				></input>
			</div>
		);
}

export default SearchBox;
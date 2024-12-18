// import homeSelected from "../../../public/assets/svg/home-selected.svg";
import home from "../../../public/assets/svg/home.svg";

const NavContent = () => {
	return (
		<nav className="nav-content">
			<ul className="nav-list">
				<div className="nav-item">
					<div className="nav-link">
						<span className="link-icon">
							<img src={home} />
						</span>
						<span className="link-text">Home</span>
					</div>
				</div>
			</ul>
			<ul className="bottom-nav-list">
				<div className="nav-item ">
					<div className="nav-link">
						<span className="link-icon">
							<img
								src="../../assets/svg/chat-icon.svg"
								alt="FAQs"
							/>
						</span>
						<span className="link-text">FAQs</span>
					</div>
				</div>
			</ul>
		</nav>
	);
};

export default NavContent;

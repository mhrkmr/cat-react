const NavContent = () => {
	return (
		<nav className="nav-content">
			<ul className="nav-list">
				<div className="nav-item ">
					<div className="nav-link">
						<span className="link-icon">
							<img
								src="../../assets/svg/home.svg"
								alt="home"
							/>
						</span>
						<span className="link-text">Home</span>
					</div>
				</div>
			</ul>
			<ul className="bottom-nav-list">
				<div className="nav-item ">
					<div className="nav-link">
						<span className="link-icon">
							<img src="../../assets/svg/chat-icon.svg" alt="" />
						</span>
						<span className="link-text">FAQs</span>
					</div>
				</div>
			</ul>
		</nav>
	);
};

export default NavContent;

const NavFooter = () => {
return (
	<div className="nav-footer">
		<a
			className="footer-link"
			href="https://www.soulhq.ai/terms-of-service"
			target="_blank"
		>
			<span className="link-text">Terms of Service</span>
		</a>
		<span className="footer-link">
			<span className="link-text less-opacity">●</span>
		</span>
		<a
			className="footer-link"
			href="https://www.soulhq.ai/privacy-policy"
			target="_blank"
		>
			<span className="link-text">Privacy Policy</span>
		</a>
	</div>
);
}

export default NavFooter;
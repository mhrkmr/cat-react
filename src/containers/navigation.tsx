import NavContent from "../components/navigation-bar/navContent";
import NavFooter from "../components/navigation-bar/navFooter";
import NavHead from "../components/navigation-bar/navHead";

const Navigation = () => {
	return (
		<div className="navigation">
			<NavHead />
			<NavContent />
			<NavFooter />
		</div>
	);
};

export default Navigation;

import NavContent from "../components/navigation-bar/navContent";
import NavFooter from "../components/navigation-bar/navFooter";
import NavHead from "../components/navigation-bar/navHead";

interface navProp{
	currentPage:string;
}

const Navigation = ({ currentPage }: navProp) => {
	return (
		<div className="navigation">
			<NavHead />
			<NavContent currentPage={currentPage}/>
			<NavFooter />
		</div>
	);
};

export default Navigation;

import { ReactNode } from "react";

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout= ({children}: MainLayoutProps) => {
	return <div className="main-layout">{children}</div>;
};

export default MainLayout;

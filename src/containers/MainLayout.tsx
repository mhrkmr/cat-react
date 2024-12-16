import React, { ReactNode } from "react";


interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
}) => {
	return <div className="main-layout">{children}</div>;
};

export default MainLayout;

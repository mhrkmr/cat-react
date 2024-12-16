// import { useState } from 'react'
// import comingSoon from '/assets/coming-soon/coming-soon.svg'
import "./styles/app.scss";
import MainLayout from "./containers/mainLayout.tsx";
import Navigation from "./containers/navigation.tsx";
import ProductCatalog from "./containers/productCatalog.tsx"

function App() {
	// const [counts, setCounts] = useState(0);

	return (
		<MainLayout>
			<Navigation />
			<ProductCatalog />
		</MainLayout>
	);
}

export default App;

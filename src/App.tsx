import { Routes, Route } from "react-router-dom";
import "./styles/components/Shared/search-textbox.scss";
import "./styles/app.scss";
import MainLayout from "./containers/main-layout.tsx";
import Navigation from "./containers/navigation.tsx";
import ProductCatalog from "./containers/product-catalog.tsx";
import ProductDetails from "./containers/product-page.tsx";

function App() {
	// const [counts, setCounts] = useState(0);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<MainLayout>
						<Navigation currentPage="home" />
						<ProductCatalog />
					</MainLayout>
				}
			/>
			<Route
				path=":id"
				element={
					<MainLayout>
						<Navigation currentPage="products" />
						<ProductDetails />
					</MainLayout>
				}
			/>
		</Routes>
	);
}

export default App;

// import { useState } from 'react'
// import comingSoon from '/assets/coming-soon/coming-soon.svg'
import "./styles/app.scss";
import MainLayout from "./containers/mainLayout";
import Navigation from "./containers/navigation";
import Right from "./containers/right";

function App() {
	// const [counts, setCounts] = useState(0);

	return (
		<MainLayout>
			<Navigation />
			<Right />
		</MainLayout>
	);
}

export default App;

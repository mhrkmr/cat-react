// import { useState } from 'react'
// import comingSoon from '/assets/coming-soon/coming-soon.svg'
import './styles/App.scss';
import MainLayout from  './containers/MainLayout';
import Navigation from './components/Navigation';

function App() {
  // const [counts, setCounts] = useState(0);

  return (
		<MainLayout>
			<Navigation />
			<div className='right'>beta gamma delta epsilon</div>
		</MainLayout>
	);
}

export default App

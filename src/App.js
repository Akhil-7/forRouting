import { Route, Routes } from 'react-router-dom';
import './App.css';
import Links from './Components/Content/Links';
import London from './Components/Content/Subcontents/London';
import Paris from './Components/Content/Subcontents/Paris';
import Tokoyo from './Components/Content/Subcontents/Tokoyo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="Main">
				<div className="MainLink">
					<Links />
				</div>
				<div className="MainSub">
					<Routes>
						<Route path="/london" element={<London />} />
						<Route path="/paris" element={<Paris />} />
						<Route path="/tokoyo" element={<Tokoyo />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;

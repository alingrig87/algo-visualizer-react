import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ArraysPage from './pages/ArraysPage';
import StringsPage from './pages/StringsPage';
import LinkedListPage from './pages/LinkedListPage';
import MapsPage from './pages/MapsPage';

const App = () => {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<div>Home page</div>} />
				<Route path="/arrays" element={<ArraysPage />} />
				<Route path="/strings" element={<StringsPage />} />
				<Route path="/linked-list" element={<LinkedListPage />} />
				<Route path="/maps" element={<MapsPage />} />
			</Routes>
		</HashRouter>
	);
};

export default App;

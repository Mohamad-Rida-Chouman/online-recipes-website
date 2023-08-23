import './App.css';
import './base.css';
import './Components/Button/button.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YourCollection from './Pages/YourCollection/YourCollection';
import AllRecipes from './Pages/AllRecipes/AllRecipes';
import RecipeDetails from './Pages/RecipeDetails/RecipeDetails';

function App() {
	return (
		<Router>
			<div className="App padding-s">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<AllRecipes />} />
						<Route path="/YourCollection" element={<YourCollection />} />
						<Route path="/Recipe/:id" element={<RecipeDetails />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;

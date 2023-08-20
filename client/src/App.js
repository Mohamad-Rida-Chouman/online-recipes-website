import './App.css';
import './base.css';
import './Components/Button/button.css';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

function App() {
	return (
		<div className="App padding-s">
			<Navbar />
			<Search />
		</div>
	);
}

export default App;

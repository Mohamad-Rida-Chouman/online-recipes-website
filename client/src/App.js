import './App.css';
import './base.css';
import './Components/Button/button.css';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import CardsList from './Components/CardsList/CardsList';

function App() {
	const dishes = [
		{
			name: 'Spaghetti Carbonara',
			cuisine: 'Italian',
			image:
				'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
			ingredients: 'Spaghetti, eggs, pancetta, Parmesan cheese, black pepper',
		},
		{
			name: 'Chicken Tikka Masala',
			cuisine: 'Indian',
			image:
				'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80',
			ingredients: 'Chicken, yogurt, tomato sauce, spices',
		},
		{
			name: 'Sushi',
			cuisine: 'Japanese',
			image:
				'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
			ingredients: 'Rice, fish, seaweed, soy sauce, wasabi',
		},
	];

	return (
		<div className="App padding-s">
			<Navbar />
			<Search />
			<CardsList dishes={dishes} />
		</div>
	);
}

export default App;

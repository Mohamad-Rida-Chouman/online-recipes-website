import CardsList from "../../Components/CardsList/CardsList";
import Search from "../../Components/Search/Search";
const AllRecipes = () => {
    const dishes = [
		{
			id:1,
			name: 'Spaghetti Carbonara',
			cuisine: 'Italian',
			image:
				'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
			ingredients: 'Spaghetti, eggs, pancetta, Parmesan cheese, black pepper',
		},
		{
			id:2,
			name: 'Chicken Tikka Masala',
			cuisine: 'Indian',
			image:
				'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80',
			ingredients: 'Chicken, yogurt, tomato sauce, spices',
		},
		{
			id:3,
			name: 'Sushi',
			cuisine: 'Japanese',
			image:
				'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
			ingredients: 'Rice, fish, seaweed, soy sauce, wasabi',
		},
		{
			id:4,
			name: 'Burger',
			cuisine: 'American',
			image:
				'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
			ingredients:
				'Bun, ground beef patty, cheese, lettuce, tomato, onion, pickles, ketchup, mustard',
		},
		{
			id:5,
			name: 'Tacos',
			cuisine: 'Mexican',
			image:
				'https://images.unsplash.com/photo-1574782090889-7567420ce7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
			ingredients:
				'Tortillas, meat (beef, chicken, pork), salsa, guacamole, cheese, lettuce',
		},
		{
			id:6,
			name: 'Tacos',
			cuisine: 'Mexican',
			image:
				'https://images.unsplash.com/photo-1574782090889-7567420ce7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
			ingredients:
				'Tortillas, meat (beef, chicken, pork), salsa, guacamole, cheese, lettuce',
		},
	];
    return (
        <div>
            <Search />
	    	<CardsList dishes={dishes} />
        </div>
    );
}
 
export default AllRecipes;
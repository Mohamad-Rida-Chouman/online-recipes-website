import React, { useEffect, useState } from 'react';
import '../../base.css';
import './navbar.css';
import Button from '../Button/Button';
import '../Button/button.css';
import LoginPopup from '../LoginPopup/LoginPopup';
import AddRecipePopup from '../AddRecipePopup/AddRecipePopup';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	useEffect(() => {
		toggleLoginLogout();
	});

	const [authenticated, setAuthenticated] = useState(
		localStorage.getItem('access_token')
	);

	//All recipes button logic
	const handleAllRecipes = () => {
		console.log('All recipes button clicked!');
	};

	//Your collection button logic
	const handleYourCollection = () => {
		console.log('Your Collection button clicked!');
	};

	function toggleLoginLogout() {
		const loginLogoutBtn = document.getElementById('login-logout-btn');
		if (localStorage.getItem('access_token')) {
			setAuthenticated(true);
			loginLogoutBtn.innerHTML = 'Logout';
		} else {
			setAuthenticated(false);
			loginLogoutBtn.innerHTML = 'Login';
		}
	}

	//Login/Logout button logic
	const handleLoginLogout = () => {
		if (authenticated) {
			localStorage.removeItem('access_token');
			toggleLoginLogout();
		} else {
			toggleLoginLogout();
			togglePopupLogin();
		}
	};

	const [showPopupLogin, setShowPopupLogin] = useState(false);

	const togglePopupLogin = () => {
		setShowPopupLogin(!showPopupLogin);
	};

	const handleAddRecipe = () => {
		console.log('Create Recipe Clicked!');
		togglePopupRecipe();
	};

	const [showPopupRecipe, setShowPopupRecipe] = useState(false);

	const togglePopupRecipe = () => {
		setShowPopupRecipe(!showPopupRecipe);
		if (showPopupRecipe) {
			navigate('/');
		}
	};

	return (
		<nav className="navbar-main-container flex justify-between justify-center align-center border padding-s">
			<div className="navbar-left flex gap-l justify-start">
				<div>
					<Button onClick={handleAllRecipes}>
						<Link
							to="/"
							className="link-button flex justify-center align-center"
						>
							All Recipes
						</Link>
					</Button>
				</div>
				<div>
					<Button onClick={handleAddRecipe}>
						<Link
							to="/blank"
							className="link-button flex justify-center align-center"
						>
							Create Recipe
						</Link>
					</Button>
				</div>
			</div>
			{showPopupRecipe && (
				<AddRecipePopup text="Close Me" closePopup={togglePopupRecipe} />
			)}
			<div className="navbar-mid flex justify-center">
				<div className="navbar-title-container flex">
					<img src="logo.png" alt="" className="title-logo" />
				</div>
			</div>
			<div className="navbar-right flex gap-l justify-end">
				<Button onClick={handleYourCollection}>
					<div>
						<Link
							to="/YourCollection"
							className="link-button flex justify-center"
						>
							Your Collection
						</Link>
					</div>
				</Button>
				<Button onClick={handleLoginLogout}>
					<span id="login-logout-btn"></span>
				</Button>
			</div>
			{showPopupLogin && (
				<LoginPopup text="Close Me" closePopup={togglePopupLogin} />
			)}
		</nav>
	);
};

export default Navbar;

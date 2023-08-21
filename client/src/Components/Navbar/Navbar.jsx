import React, {useEffect, useState} from "react";
import '../../base.css'
import './navbar.css'
import Button from "../Button/Button";
import "../Button/button.css";
import LoginPopup from "../LoginPopup/LoginPopup";
import AddRecipePopup from "../AddRecipePopup/AddRecipePopup";

const Navbar = () => {

    useEffect(() => {
        toggleLoginLogout();
      });

    //All recipes button logic
    const handleAllRecipes = () => {
        console.log('All recipes button clicked!');
    };

    //Your collection button logic
    const handleYourCollection = () => {
        console.log('Your Collection button clicked!');
    };

    const toggleLoginLogout = () => {
        const loginLogoutBtn = document.getElementById('login-logout-btn');
        if(authenticated){
            loginLogoutBtn.innerHTML='Logout';
        }
        else{
            loginLogoutBtn.innerHTML='Login';
        }
    }

    //Login/Logout button logic
    const handleLoginLogout = () => {
        console.log('Login/Logout button clicked!');
        // setAuthenticated(!authenticated);
        if(authenticated){
            setAuthenticated(false);
            toggleLoginLogout();
        }
        else{
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
    };

    const [authenticated, setAuthenticated] = useState(true);
    
    return (
        <nav className="navbar-main-container flex justify-between justify-center align-center border padding-s">
            <div className="navbar-left flex gap-l justify-start">
                <Button onClick={handleAllRecipes}>
                    All Recipes
                </Button>
                <Button onClick={handleAddRecipe}>
                    Create Recipe
                </Button>
                
            </div>
            {showPopupRecipe && (
                <AddRecipePopup
                text="Close Me"
                closePopup={togglePopupRecipe}
                />
            )}
            <div className="navbar-mid flex justify-center">
                <div className="navbar-title-container flex">
                    <img src="logo.png" alt="" className="title-logo" />
                </div>
            </div>
            <div className="navbar-right flex gap-l justify-end">
                <Button onClick={handleYourCollection}>
                    Your Collection
                </Button>
                <Button onClick={handleLoginLogout}>
                    <span id="login-logout-btn"></span>
                </Button>
            </div>
            {showPopupLogin && (
                <LoginPopup
                text="Close Me"
                closePopup={togglePopupLogin}
                />
            )}
        </nav>
    );
}
 
export default Navbar;
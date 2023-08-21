import React, {useState} from "react";
import '../../base.css'
import './navbar.css'
import Button from "../Button/Button";
import "../Button/button.css";
import LoginPopup from "../LoginPopup/LoginPopup";
import AddRecipePopup from "../AddRecipePopup/AddRecipePopup";

const Navbar = () => {

    //All recipes button logic
    const handleAllRecipes = () => {
        console.log('All recipes button clicked!');
    };

    //Create recipe button logic
    const handleCreateRecipe = () => {
        console.log('Create recipe button clicked!');
    };

    //Your collection button logic
    const handleYourCollection = () => {
        console.log('Your Collection button clicked!');
    };

    //Login/Logout button logic
    const handleLoginLogout = () => {
        console.log('Login/Logout button clicked!');
        togglePopupLogin();
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
                    Login
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
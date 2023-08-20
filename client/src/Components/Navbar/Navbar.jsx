import React from "react";
import '../../base.css'
import './navbar.css'
import Button from "../Button/Button";
import "../Button/button.css";

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
    };
    
    return (
        <nav className="navbar-main-container flex justify-between justify-center align-center border padding-s">
            <div className="navbar-left flex gap-l justify-start">
                <Button onClick={handleAllRecipes}>
                    All Recipes
                </Button>
                <Button onClick={handleCreateRecipe}>
                    Create Recipe
                </Button>
            </div>
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
        </nav>
    );
}
 
export default Navbar;
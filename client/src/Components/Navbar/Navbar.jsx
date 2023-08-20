import React from "react";
import '../../base.css'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar-main-container flex justify-between justify-center align-center">
            <div className="navbar-left flex gap-l justify-start">
                <button className="all-recipes-button button">
                    All Recipes
                </button>
                <button className="create-recipe-button button">
                    Create Recipe
                </button>
            </div>
            <div className="navbar-mid flex justify-center">
                <div className="navbar-title-container">
                    <img src="logo.png" alt="" className="title-logo" />
                </div>
            </div>
            <div className="navbar-right flex gap-l justify-end">
            <button className="your-collection-button button">
                    Your Collection
                </button>
                <button className="login-button button">
                    Login
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;
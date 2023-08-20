import React, { useState } from "react";
import Button from "../Button/Button";
import '../../base.css'
import './search.css'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedTerm, setSearchedTerm] = useState('');
  
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
  
    const handleSearch = () => {
        console.log('Perform search with query:', searchQuery);
        setSearchedTerm(searchQuery);
        setSearchQuery('');
      };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
      <div className="search-form-container flex flex-col justify-center align-center padding-s gap-s">
        
        <div className="search-form flex gap-s">
            <input
            className="padding-s"
            type="text"
            placeholder="Discover Recipes..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="search-query flex justify-center align-center">
            {searchedTerm ? (
                <p>You searched for: {searchedTerm}</p>
            ) : (
                <p>You haven't searched for anything yet</p>
            )}
        </div>
        
        
      </div>
    );
}

export default Search;
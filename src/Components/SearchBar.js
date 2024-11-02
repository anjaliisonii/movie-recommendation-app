import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        onChange={onSearch} // Pass the search handler function
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search your recent transactions"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;


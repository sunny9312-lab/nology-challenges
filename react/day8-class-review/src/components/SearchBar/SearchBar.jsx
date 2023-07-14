import React, { useState } from 'react';

const SearchBar = ({ formSubmit, placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSubmit = (event) => {
    //prevent default form behaviour
    event.preventDefault();
    // get the value of the input - chose to use state
    // maybe validate the input if needed
    // call the function pased into the component - with the value of the input
    formSubmit(searchInput);
    // reset the input section
    setSearchInput('');
  };

  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        placeholder={placeholder}
        value={searchInput}
        onChange={onSearchInputChange}
      />
      <input type='submit' value='search' />
    </form>
  );
};

export default SearchBar;

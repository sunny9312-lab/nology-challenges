import { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const formSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    handleSubmit(searchValue);
    setSearchValue('');
  };

  const onInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <form onSubmit={formSubmit}>
      <input type='text' value={searchValue} onChange={onInputChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;

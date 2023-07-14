import { useState } from 'react';
import './App.css';
import { NameList } from './components/NameList/NameList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [filterValue, setFilterValue] = useState('');
  const handleSubmit = (value) => {
    console.log('The value was: ' + value);
    setFilterValue(value);
  };
  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      <NameList filterValue={filterValue} />
    </>
  );
}

export default App;

import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import JokesLoader from '../components/JokesLoader/JokesLoader';
import { JokeSearchContext } from '../context/JokeSearchProvider';

const JokeSearchPage = () => {
  const { setJokeSearch } = useContext(JokeSearchContext);
  const jokeSubmit = (value) => {
    console.log('You Searched for jokes: ', value);
    setJokeSearch(value);
  };
  return (
    <main>
      <SearchBar formSubmit={jokeSubmit} placeholder='Search for jokes' />
      {/* <SearchBar formSubmit={peopleSubmit} placeholder='Search for people' /> */}
      <JokesLoader />
    </main>
  );
};

export default JokeSearchPage;

import { useState } from 'react';
// import Card from './components/Card/Card';
// import appStyles from './App.module.scss';
// import FlexWrap from './components/FlexWrap';
// import SearchBar from './components/SearchBar/SearchBar';
// import JokesLoader from './components/JokesLoader/JokesLoader';
// import JokeSearchProvider from './context/JokeSearchProvider';
import JokeSearchPage from './pages/JokeSearchPage';
import JokeSearchProvider from './context/JokeSearchProvider';

function App() {
  return (
    <>
      {/* <FlexWrap>
        <Card title='First Card' content='I am a card' startCount={5}>
          Some text
        </Card>
        <Card title='Second Card' content="I'm also a card" startCount={10}>
          <p className='something'>A paragraph tag</p>
        </Card>
      </FlexWrap> */}
      <JokeSearchProvider>
        <JokeSearchPage />
      </JokeSearchProvider>
    </>
  );
}

export default App;

import './App.css'
import Card from './components/Card/Card'
import Counter from './components/Counter/Counter'
import NameList from './components/NameList/NameList'
import SearchBar from './components/SearchBar/SearchBar'
import StyledCounter from './components/StyledCounter/StyledCounter'
import { useState } from 'react'

function App() {
  const [filterValue, setFilterValue] = useState('');

  // const handleSubmit = (value) => {
  //   console.log("The value was: " + value);
  //   setFilterValue(value)
  // }

  return (
    <>
      <Counter />
      <Card title="First Card" content="here is some text"/>
      <Card title="Second Card" content="here is some other text"/>
      <StyledCounter/>
      {/* <SearchBar handleSubmit={handleSubmit}/> 조금더 지네릭하게 이런 방법을 쓰기도 한다. */}
      <SearchBar setFilterValue={setFilterValue}/>
      <NameList filterValue={filterValue}/>
    </>
  )
}

export default App

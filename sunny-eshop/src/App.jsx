import { useEffect, useState } from 'react'
import { getAllChicken } from './services/chicken-service'
import ChickenList from './components/ChickenList/ChickenList';


function App() {
  const [chickens, setChickens] = useState([]);

  useEffect(()=> {
    getAllChicken()
    .then((chickenData) => setChickens(chickenData))
    .catch(err => console.log(err))
  }, []);
 
  return (
    <>
     <h1>Chicken</h1>
     <ChickenList chickens={chickens}/>
    </>
  )
}

export default App

//ysh
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<p>Home page</p>} />
  <Route path='/movies' element={<LiveMovieList/>} />
  <Route path='/movies/:id' element={<MoviePage/>} />
  <Route path='/movies/new' element={<NewMovieForm/>} />
</Routes>
</BrowserRouter> */}

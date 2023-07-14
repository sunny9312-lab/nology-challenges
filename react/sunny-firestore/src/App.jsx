
import { useEffect, useState } from 'react'
import { getAllMovies } from './services/movies-service';
import MovieList from './components/MovieList/MovieList';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';

function App() {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
    .then((movieData) => setMovies(movieData))
    .catch(err => console.log(err))
  }, []);
  return (
    <>
      <h1>Firestore</h1>
      <MovieList movies={movies} />
      <NewMovieForm />
    </>
  )
}

export default App
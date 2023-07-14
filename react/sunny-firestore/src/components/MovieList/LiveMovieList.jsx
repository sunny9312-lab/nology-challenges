import styles from './MovieList.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const LiveMovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'movies'), (snapshot) => {
      const movieData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMovies(movieData);
    });

    // clean up by unsubscribing
    return () => unsubscribe();
  }, []);
  return (
    <section className={styles.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default LiveMovieList;

import { deleteMovieById } from '../../services/movies-service';
import style from './MovieCard.module.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title,  image,  id } = movie;
  const onDeleteClick = (e) => {
    const confirmed = confirm("You want to delete movie with id: " + id);
    console.log(confirmed);
    if (confirmed) {
      deleteMovieById(id);
    }
  };

  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <img className={style.card_image} src={image} alt={title +  "poster"} />
      <Link className={style.card_link} to={id}>See More</Link>
      <button onClick={onDeleteClick} className={style.delete_button}>Delete Movie</button>
    </div>
  );
};

export default MovieCard;

// import style from './MovieCard.module.scss';

// const MovieCard = ({ movie }) => {
//   const { title, image } = movie;
//   return (
//     <div className={style.card}>
//       <h3>{title}</h3>
//       <img className={style.card_image} src={image} alt={title + ' poster'} />
//     </div>
//   );
// };

// export default MovieCard;
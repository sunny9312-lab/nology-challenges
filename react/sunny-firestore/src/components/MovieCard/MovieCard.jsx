import style from './MovieCard.module.scss';

const MovieCard = ({ movie }) => {
  const { title,  image,  } = movie;
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      
      <img className={style.card_image} src={image} alt={title +  "poster"} />
      
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
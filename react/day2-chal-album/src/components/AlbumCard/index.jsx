import Banner from '../Banner';
import style from './AlbumCard.module.scss';

const AlbumCard = ({ title, coverUrl, rating, band }) => {
    const backgroundStyles = {
        backgroundImage: "url(" + coverUrl + ")", 
        backgroundPosition : "center", 
        backgroundSize : "cover", 
        backgroundRepeat: "no-repeat",
    };
  return (
    <div className={style.card} style={backgroundStyles}>
        {rating === 5 && <Banner text="Top Rating" />}
        <h3 className={style.card__heading}>{title}</h3>
        <h4 className={style.card__heading}>{band}</h4>
        <h5 className={style.card__heading}>{rating}</h5>
    </div>
  )
}

export default AlbumCard;
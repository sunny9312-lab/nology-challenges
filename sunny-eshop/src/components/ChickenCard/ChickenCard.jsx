
import { Link } from 'react-router-dom';
import style from './ChickenCard.module.scss'

const ChickenCard = ({chicken}) => {
    const {menu, price, id, image} = chicken;
  return (
    <div className={style.card}>
        <h2>{menu}</h2>
        <img className={style.card_image} src={image} alt={menu + 'poster'}/>
        <Link to={`${id}`} state={chicken}><button>see more...</button></Link>
    </div>
    )
  
};

export default ChickenCard;


//ysh
// import { deleteChickenById } from '../../services/chicken-service';
// import style from './ChickenCard.module.scss';
// import { Link } from 'react-router-dom';

// const ChickenCard = ({ chicken }) => {
//   const { name,  price,  id } = chicken;
//   const onDeleteClick = (e) => {
//     const confirmed = confirm("You want to delete chicken with id: " + id);
//     console.log(confirmed);
//     if (confirmed) {
//       deleteChickenById(id);
//     }
//   };

//   return (
//     <div className={style.card}>
//       <h2>{name}</h2>
//       <img className={style.card_image} src={image} alt={title +  "poster"} />
//       <Link className={style.card_link} to={id}>See More</Link>
//       <button onClick={onDeleteClick} className={style.delete_button}>Delete Chicken</button>
//     </div>
//   );
// };

// export default ChickenCard;
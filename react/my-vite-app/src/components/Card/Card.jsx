// const Card = () => {
//     return <div>
//         <h3>
//             HELLO WORLD
//         </h3>
//     </div>
// }

import React from 'react';
import Banner from '../Banner';
import styles from './Card.module.scss';

const Card = ({ title, coverUrl, rating, band }) => {
  const backgroundStyles = {
    backgroundImage: 'url(' + coverUrl + ')', 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.card} style={backgroundStyles}>
      {rating === 5 && <Banner text='Top Rating'/>}
      <h3 className={styles.card__heading}>{title}</h3>
      <h4 className={styles.card__heading}>{band}</h4>
      <h5 className={styles.card__heading}>{rating}</h5>
    </div>
  );
};

export default Card;


// <article className={styles.card}>
//       <h3 className={styles.heading}>{heading}</h3>
//       <p>{content}</p>      
//       <img className= {styles.cloth} src="cloth.jpg"/>
//       {/* conditional rendering using props */}
//       {/* {hasButton && <button>Click me</button>} */}
//       {/* ternerary operator for if/else type rendering */}
//       {rating === 5 ? <button>Top Rating</button> : <span>No Top Rating</span>}
      
//     </article>
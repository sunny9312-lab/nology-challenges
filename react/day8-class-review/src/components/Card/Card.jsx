import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, content, children, startCount }) => {
  console.log(styles);
  // const [count, setCount] = useState(startCount);
  let count = 0;
  console.log('count:', count);
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
      <h4>{count}</h4>
      <button onClick={() => (count += 1)}>+</button>
      {children}
    </div>
  );
};

export default Card;

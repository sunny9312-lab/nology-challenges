import React from 'react';
import ChickenCard from '../ChickenCard/ChickenCard';
import styles from './ChickenList.module.scss';

const ChickenList = ({chickens}) => {
  return (
    <section className={styles.list}>
        {chickens.map((chicken) => (
            <ChickenCard key={chicken.id} chicken={chicken} />
        ))}
    </section>
  );
};

export default ChickenList;
import styles from './SubHeading.module.scss'
import { useState } from 'react';

export const SubHeading = ({content}) => {
  
  console.log("content inside subheading", content);
  return <h2 className={styles.heading}>{content}</h2>;
}

 
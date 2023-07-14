import React from 'react';
import styles from './Card.module.scss';

// const Card = () => {  
const Card = ({heading, content, hasButton}) => {  
  console.log(hasButton);
  return (
    // <article  style={{border: "1px solid red", width: "200px", margin: "2em"}}>
    <article className={styles.card}>  
        {/* <h3 className= {styles.heading}>Card heading</h3> */}
        <h3 className= {styles.heading}>{heading}</h3>
        {/* <p>Card is a simple presentation</p> */}
        <p>{content}</p>
        {/* <button>Click me</button> */}
        {/* 컨디션에 따라서 버튼을 표시하고 싶을때. true일때만 */}
        {/* {hasButton && <button>Click me</button>} */}
        {/* ternerary operator for if/else type rendering  */}
        {hasButton ? <button>Click me</button>: <span>No button</span>}
    </article>
  )
}

export default Card
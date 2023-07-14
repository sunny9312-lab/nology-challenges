import styles from './FlexWrap.module.scss' ;

const FlexWrap = ({children}) => {
// const FlexWrap = (props) => {
//   return  <section className={styles.wrap}>{props.children}
  return  <section className={styles.wrap}>{children}</section>
  
};

export default FlexWrap;
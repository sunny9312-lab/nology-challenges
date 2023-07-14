import styles from './StyledButton.module.scss';

const StyledButton = ({ buttonType = 'primary', children, onBtnClick }) => {
    console.log("children in styled button", children);
    console.log("buttonType in styled button", buttonType);
    console.log("onBtnClick in styled button", onBtnClick);
    const btnStyles = [];
    if (buttonType === 'primary') {
        btnStyles.push(styles.primary);
    } else if (buttonType === 'danger') {
        btnStyles.push(styles.danger);
    }
    return  <button onClick={onBtnClick}  className={btnStyles.join(' ')}>{children}</button>  
}

export default StyledButton
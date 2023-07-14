import styles from "./Banner.module.scss";

const Banner = ({ text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>{text}</div>
        </div>
    );
};

export default Banner;

import styles from "./Indicator.module.css";

const Indicator = () => {
    return <div className={styles.container}>
        <div className={styles.step}>1</div>
        <div className={styles.step}>2</div>
        <div className={styles.step}>3</div>
        <div className={styles.step}>4</div>
    </div>
}

export default Indicator;
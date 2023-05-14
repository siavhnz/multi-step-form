import styles from "./Plan.module.css";

const Plan = ({ icon, title, price, discount }) => {
    return <div className={`${styles.container} ${styles.active}`}>
        {icon}
        <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{price}</p>
            {
                discount && <p className={styles.discount}>{discount}</p>
            }
        </div>
    </div>
}

export default Plan;
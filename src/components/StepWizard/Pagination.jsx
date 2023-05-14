import styles from "./Pagination.module.css";

const Pagination = () => {
    return <div className={styles.container}>
        <button className={styles.next}>
            Next Step
        </button>
        <button className={styles.prev}>
            Go Back
        </button>
    </div>
}

export default Pagination;
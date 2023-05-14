import styles from "./Wrapper.module.css";

const Wrapper = ({ title, desc, children }) => {
    return <div className={styles.container}>
        {
            title && <h2 className={styles.title}>
                {title}
            </h2>
        }
        {
            desc && <p className={styles.desc}>
                {desc}
            </p>
        }
        {children}
    </div>
}

export default Wrapper;
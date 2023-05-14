import styles from "./Input.module.css";

const Input = ({ label, errorMessage, placeholder, type }) => {
    return <div className={styles.container}>
        <div className={styles.labels}>
            <label className={styles.label}>{label}</label>
            {
                errorMessage && <label className={styles.error}>{errorMessage}</label>
            }
            
        </div>
        <input type={type} placeholder={placeholder} className={styles.input} />

    </div>
}

export default Input;
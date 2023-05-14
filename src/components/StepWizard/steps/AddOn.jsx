import { ReactComponent as CheckIcon } from "../../../assets/images/icon-checkmark.svg";
import styles from "./AddOn.module.css";

const AddOn = ({ title, desc, price, checked }) => {

    const checkboxStyle = checked ? `${styles.checkbox} ${styles.checked}` : styles.checkbox;

    return <div className={styles.container}>
        <button className={checkboxStyle} onClick={(e) => e.preventDefault()}>
            {checked && <CheckIcon aria-hidden="true" focusable="false" />}
        </button>
        <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
        </div>
        <p className={styles.price}>
            {price}
        </p>
    </div>
}

export default AddOn;
import { useContext } from "react";
import { ReactComponent as CheckIcon } from "../../../assets/images/icon-checkmark.svg";
import styles from "./AddOn.module.css";
import { StepWizardDataContext } from "../../../store/context/stepwizard-context";

const AddOn = ({ id, title, desc, priceText, priceNumber, selected }) => {

    const stepDataCtx = useContext(StepWizardDataContext);

    const checkboxStyle = selected ? `${styles.checkbox} ${styles.checked}` : styles.checkbox;
    const containerStyle = selected ? `${styles.container} ${styles.active}` : styles.container;

    return <div className={containerStyle} onClick={() => stepDataCtx.toggleAddOn({ id, title, price: priceNumber })}>
        <button className={checkboxStyle}>
            {selected && <CheckIcon aria-hidden="true" focusable="false" />}
        </button>
        <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
        </div>
        <p className={styles.price}>
            {priceText}
        </p>
    </div>
}

export default AddOn;
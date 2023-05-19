import { useContext } from "react";
import styles from "./Indicator.module.css";
import { StepWizardContext } from "../../store/context/stepwizard-context";
import { data } from "../../store/utils/data";

const Indicator = () => {

    const stepCtx = useContext(StepWizardContext);
    const step = stepCtx.step.number;

    const Content = data.steps.items.map((item) => {
        let cssClass = step === item.number ? `${styles.step} ${styles.active}` : styles.step;

        if (step === 5 && item.number === 4) {
            cssClass = `${styles.step} ${styles.active}`
        }

        return <div key={item.number} className={styles.item}>
            <div className={cssClass}>
                {item.number}
            </div>
            <div className={styles.spec}>
                <p>
                    {item.text}
                </p>
                <h2>
                    {item.desc}
                </h2>
            </div>
        </div>

    });

    return <div className={styles.container}>
        {Content}
    </div>

}

export default Indicator;
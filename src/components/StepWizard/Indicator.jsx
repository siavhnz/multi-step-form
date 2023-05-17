import { useContext } from "react";
import styles from "./Indicator.module.css";
import { StepWizardContext } from "../../store/context/stepwizard-context";
import { motion, AnimatePresence } from "framer-motion";

const Indicator = () => {

    const stepCtx = useContext(StepWizardContext);
    const steps = [1, 2, 3, 4];
    const step = stepCtx.step.number;

    const Content = steps.map((item) => {
        let cssClass = step === item ? `${styles.step} ${styles.active}` : styles.step;

        if (step === 5 && item === 4) {
            cssClass = `${styles.step} ${styles.active}`
        }

        return <div key={item}
            className={cssClass}>
            {item}
        </div>

    });

    return <div className={styles.container}>
        {Content}
    </div>

}

export default Indicator;
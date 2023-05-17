import { useContext } from "react";
import styles from "./Pagination.module.css";
import { StepWizardContext } from "../../store/context/stepwizard-context";

const Pagination = () => {

    const stepCtx = useContext(StepWizardContext);

    return <div className={styles.container}>

        {
            stepCtx.step.number < 4 && <button className={styles.next} onClick={(e) => stepCtx.goToNextStepWithValidation(e)}>
                Next Step
            </button>
        }
        {
            stepCtx.step.number === 4 && <button className={`${styles.next} ${styles.confirm}`} onClick={(e) => stepCtx.goToNextStepWithValidation(e)}>
                Confirm
            </button>
        }

        {
            stepCtx.step.number !== 1 && <button
                className={styles.prev}
                onClick={(e) => stepCtx.backToPreviousStep(e)}
            >
                Go Back
            </button>
        }

    </div>
}

export default Pagination;
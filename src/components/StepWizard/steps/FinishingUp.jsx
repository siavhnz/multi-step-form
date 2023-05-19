import Wrapper from "./Wrapper";
import styles from "./FinishingUp.module.css";
import { useContext, useEffect } from "react";
import { StepWizardContext, StepWizardDataContext } from "../../../store/context/stepwizard-context";
import { PERIOD } from "../../../store/utils/data";

const FinishingUp = () => {

    const stepDataCtx = useContext(StepWizardDataContext);
    const stepCtx = useContext(StepWizardContext);

    useEffect(() => {

        if (stepCtx.waitForValidation) {

            // we have no validation in this step 
            // so we can go to another step when
            // user press the Nexp Step button

            // pressing Next Step button make 
            // waitForValidation = true
            stepCtx.goToNextStep();
        }

    }, [stepCtx.waitForValidation])

    return <Wrapper
        title="Finishing up"
        desc="Double-check everything looks Ok before confirming">
        <div className={styles.container}>
            <div className={`${styles["space-between"]} ${styles.plan}`}>
                <div className={styles["plan-title"]}>
                    <h3>
                        {stepDataCtx.plan.name} ({stepDataCtx.plan.period})
                    </h3>
                    <button onClick={(e) => stepCtx.backToSpecificStep(e, 2)}>
                        Change
                    </button>
                </div>
                <p className={styles["plan-price"]}>
                    {
                        (stepDataCtx.plan.period === PERIOD.MONTHLY) ? `$${stepDataCtx.plan.price}/mo` : `$${stepDataCtx.plan.price}/yr`
                    }
                </p>
            </div>
            {
                stepDataCtx.addOns.length > 0 && <div className={styles["add-on-container"]}>

                    {
                        stepDataCtx.addOns.map((item) => {
                            return <div className={`${styles["space-between"]} ${styles["add-on"]}`} key={item.id}>
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {
                                        (stepDataCtx.plan.period === PERIOD.MONTHLY) ? `+$${item.price}/mo` : `+$${item.price}/yr`
                                    }
                                </p>
                            </div>
                        })
                    }
                </div>
            }


        </div>
        <div className={`${styles["space-between"]} ${styles.total}`}>
            <h3>
                Total (per {(stepDataCtx.plan.period === PERIOD.MONTHLY) ? "month" : "year"})
            </h3>
            <p>
                {
                    (stepDataCtx.plan.period === PERIOD.MONTHLY) ? `+$${stepDataCtx.totalPrice}/mo` : `+$${stepDataCtx.totalPrice}/yr`
                }
            </p>
        </div>
    </Wrapper>
}

export default FinishingUp;
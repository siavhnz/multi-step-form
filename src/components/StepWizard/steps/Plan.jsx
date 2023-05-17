import { useContext } from "react";
import { StepWizardDataContext } from "../../../store/context/stepwizard-context";
import styles from "./Plan.module.css";
import { AnimatePresence, motion } from "framer-motion"

const Plan = ({ icon, name, priceText, priceNumber, discount, period, selectedPlan, handlePlan }) => {

    const stepDataCtx = useContext(StepWizardDataContext);
    // change the style of plan based on user selection
    const cssClass = name === selectedPlan ? `${styles.container} ${styles.active}` : styles.container;


    const variants = {
        hidden: {
            height: 0,
            opacity: 0,
            x: -10
        },
        visible: {
            height: "auto",
            opacity: 1,
            x: 0,
            transition: {
                opacity: {
                    duration: 0.4,
                },
                height: {
                    duration: 0.8
                }
            }
        },
        destroy: {
            height: 0,
            opacity: 0,
            transition: {
                opacity: {
                    duration: 0.5,
                },
                height: {
                    duration: 0.5
                }
            }
        }
    }

    // handlePlan event set the user selected plan
    return <div
        className={cssClass}
        onClick={() => stepDataCtx.setPlan({ name, price: priceNumber, period })}>
        {icon}
        <div>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.price}>{priceText}</p>
            {
                // discount only present in yearly plan
                <AnimatePresence>
                    {
                        discount && <motion.p
                            initial="hidden"
                            animate="visible"
                            exit="destroy"
                            variants={variants}
                            className={styles.discount}>
                            {discount}
                        </motion.p>
                    }
                </AnimatePresence>
            }
        </div>
    </div>
}

export default Plan;
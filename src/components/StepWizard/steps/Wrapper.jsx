import { useContext, useEffect, useRef } from "react";
import styles from "./Wrapper.module.css";
import { motion } from "framer-motion";
import { StepWizardContext, StepWizardDataContext } from "../../../store/context/stepwizard-context";

const Wrapper = ({ title, desc, children }) => {

    const stepCtx = useContext(StepWizardContext);
    const stepDataCtx = useContext(StepWizardDataContext);
    const slideRef = useRef(null);

    useEffect(() => {

        if (!stepDataCtx.dimentions.isSet) {
            //set the x value for slide right and left based on div width
            const offset = slideRef.current.offsetWidth;
            const slideLeftX = offset + 20
            const slideRightX = -(offset + 20)
            stepDataCtx.setDimentions({ slideLeftX, slideRightX, isSet: true })
        }

    }, [])

    return <motion.div
        ref={slideRef}
        className={styles.container}
        initial={{
            opacity: 0,
            x: stepCtx.step.status === "next" ? stepDataCtx.dimentions.slideLeftX : stepDataCtx.dimentions.slideRightX,

        }}
        animate={{
            opacity: 1,
            x: 0,
        }}
        exit={{
            opacity: 0.4,
            x: stepCtx.step.status === "next" ? stepDataCtx.dimentions.slideRightX : stepDataCtx.dimentions.slideLeftX,
        }}
        transition={{ duration: 0.8 }}
    >
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
    </motion.div>
}

export default Wrapper;
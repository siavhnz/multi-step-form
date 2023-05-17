import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Wrapper.module.css";
import { motion } from "framer-motion";
import { StepWizardContext } from "../../../store/context/stepwizard-context";

const Wrapper = ({ title, desc, children }) => {

    const stepCtx = useContext(StepWizardContext);
    const target = useRef(null);
    const [x, setX] = useState({
        slideLeftX: window.innerHeight,
        slideRightX: -(window.innerHeight),
        width: 0,
    })

    useEffect(() => {
        const rect = target.current.getBoundingClientRect();

        if (rect.width !== x.width) {
            setX({
                slideLeftX: rect.width + 100,
                slideRightX: -(rect.width + 100),
                width: rect.width
            })
        }
    }, [x])

    console.log(x);
    return <motion.div
        ref={target}
        className={styles.container}
        initial={{
            opacity: 0,
            x: stepCtx.step.status === "next" ? x.slideLeftX : x.slideRightX
        }}
        animate={{
            opacity: 1,
            x: 0,
        }}
        exit={{
            opacity: 0.4,
            x: stepCtx.step.status === "next" ? x.slideRightX : x.slideLeftX
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
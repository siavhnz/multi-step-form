import { forwardRef } from "react";
import styles from "./Input.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Input = forwardRef((props, ref) => {

    //const inputRef = useRef(null);
    const { label, errorMessage, placeholder, type, value } = { ...props };
    const inputStyle = errorMessage ? `${styles.input} ${styles["border-error"]}` : styles.input

    return <div className={styles.container}>
        <div className={styles.labels}>
            <label className={styles.label}>{label}</label>
            {
                <AnimatePresence>
                    {errorMessage &&
                        <motion.label
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                            // key use for two error message on one input
                            key={errorMessage}
                            className={styles.error}>
                            {errorMessage}
                        </motion.label>
                    }
                </AnimatePresence>
            }

        </div>
        <input type={type} placeholder={placeholder} defaultValue={value} className={inputStyle} ref={ref} />

    </div>
});

export default Input;
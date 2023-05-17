import Indicator from "./Indicator";
import PersonalInfo from "./steps/PeresonalInfo";
import Plans from "./steps/Plans";
import AddOns from "./steps/AddOns";
import FinishingUp from "./steps/FinishingUp";
import Result from "./steps/Result";
import styles from "./index.module.css";
import { useContext } from "react";
import { StepWizardContext } from "../../store/context/stepwizard-context";
import Pagination from "./Pagination";
import { AnimatePresence } from "framer-motion"

const StepWizard = () => {
    const stepCtx = useContext(StepWizardContext)

    return <main className={styles.container}>
        <Indicator />
        <div className={styles.slider}>
            <AnimatePresence>
                {/* key tell framer motion to track all steps so we can make a slider */}
                {stepCtx.step.number === 1 && <PersonalInfo key={1} />}
                {stepCtx.step.number === 2 && <Plans key={2} />}
                {stepCtx.step.number === 3 && <AddOns key={3} />}
                {stepCtx.step.number === 4 && <FinishingUp key={4} />}
                {stepCtx.step.number === 5 && <Result key={5} />}
            </AnimatePresence>
        </div>
        {stepCtx.step.number < 5 && <Pagination />}
    </main>
}

export default StepWizard;


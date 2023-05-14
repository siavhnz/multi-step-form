import Indicator from "./Indicator";
import Pagination from "./Pagination";
import PersonalInfo from "./steps/PeresonalInfo";
import Plans from "./steps/Plans";
import AddOns from "./steps/AddOns";
import FinishingUp from "./steps/FinishingUp";
import Result from "./steps/Result";
import styles from "./index.module.css";

const StepWizard = () => {
    return <main className={styles.container}>
        <Indicator />
        <PersonalInfo />
        {/* <Plans /> */}
        {/* <AddOns /> */}
        {/* <FinishingUp /> */}
        {/* <Result /> */}
        <Pagination />

    </main>
}

export default StepWizard;


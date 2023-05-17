import Wrapper from "./Wrapper";
import Plan from "./Plan";
import { PERIOD, data } from "../../../store/utils/data";

import styles from "./Plans.module.css";
import IOSSwitch from "../../ui/IOSSwitch";

// https://stackoverflow.com/a/70314031
import { ReactComponent as ArcadeIcon } from "../../../assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../../assets/images/icon-pro.svg";
import { useContext, useEffect } from "react";
import { StepWizardContext, StepWizardDataContext } from "../../../store/context/stepwizard-context";

const Plans = () => {

    const stepCtx = useContext(StepWizardContext);
    const stepDataCtx = useContext(StepWizardDataContext);

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

    const getIcon = (plan) => {
        let icon = "";
        switch (plan) {
            case "arcade":
                icon = <ArcadeIcon aria-hidden="true" focusable="false" />
                break;
            case "advanced":
                icon = <AdvancedIcon aria-hidden="true" focusable="false" />
                break;
            case "pro":
                icon = <ProIcon aria-hidden="true" focusable="false" />
                break;
        }
        return icon;
    }

    const handlePeriod = (value) => {

        // get value from IOSSwitch. Switch is an object
        if (typeof value === "object") {
            value = value.target.checked
        }

        // IOSSwitch spans return true for yearly and false for monthly
        const period = value === true ? PERIOD.YEARLY : PERIOD.MONTHLY;

        // find current plan values
        const currentPlan = data.plans.items.filter(x => x.name === stepDataCtx.plan.name)

        // change current plan values based on montyly or yearly
        if (currentPlan.length > 0) {
            if (period === PERIOD.MONTHLY) {
                stepDataCtx.setPlan({ name: currentPlan[0].name, price: currentPlan[0].price.monthly, period: PERIOD.MONTHLY });
            } else {
                stepDataCtx.setPlan({ name: currentPlan[0].name, price: currentPlan[0].price.yearly, period: PERIOD.YEARLY });
            }
        }

    }

    return <Wrapper
        title="Select your plan"
        desc="You have the option of monthly or yearly billing.">

        {
            // create plans based on data in store/utils/data.js
            data.plans.items.map((item) => {

                // set icon based on specific plan
                const icon = getIcon(item.name);

                // create price object for presenting in UI {text} and saving in context {number}
                const price = (stepDataCtx.plan.period === PERIOD.MONTHLY) ? { text: `$${item.price.monthly}/mo`, number: item.price.monthly } : { text: `$${item.price.yearly}/year`, number: item.price.yearly }
                return <Plan
                    key={item.name}
                    name={item.name}
                    period={stepDataCtx.plan.period}
                    selectedPlan={stepDataCtx.plan.name}
                    icon={icon}
                    priceText={price.text}
                    priceNumber={price.number}
                    discount={(stepDataCtx.plan.period === PERIOD.MONTHLY) ? "" : data.plans.discount} />

            })
        }

        {/* toggle between yearly and monthly plans */}
        <div className={styles.switch}>
            <span onClick={() => handlePeriod(false)} className={stepDataCtx.plan.period === PERIOD.MONTHLY ? styles.active : styles.inactive}>Monthly</span>

            <IOSSwitch checked={stepDataCtx.plan.period === PERIOD.YEARLY ? true : false} onChange={handlePeriod} />

            <span onClick={() => handlePeriod(true)} className={stepDataCtx.plan.period === PERIOD.YEARLY ? styles.active : styles.inactive}>Yearly</span>
        </div>
    </Wrapper>
}

export default Plans;


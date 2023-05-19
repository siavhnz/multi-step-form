import AddOn from "./AddOn";
import Wrapper from "./Wrapper";
import { data, PERIOD } from "../../../store/utils/data";
import { StepWizardContext, StepWizardDataContext } from "../../../store/context/stepwizard-context";
import { useContext, useEffect } from "react";

const AddOns = () => {

    const stepCtx = useContext(StepWizardContext);
    const stepDataCtx = useContext(StepWizardDataContext);

    useEffect(() => {

        if (stepCtx.waitForValidation) {

            // we have no validation in this step 
            // so we can go to another step when
            // user press the Nexp Step button

            // pressing Next Step button make 
            // waitForValidation = true
            stepDataCtx.calculateTotalPrice();
            stepCtx.goToNextStep();
        }

    }, [stepCtx.waitForValidation])

    return <Wrapper
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience.">

        {
            // create add-ons based on data
            data.addOns.items.map((item, index) => {

                // create price object for presenting in UI {text} and saving in context {number}
                const price = (stepDataCtx.plan.period === PERIOD.MONTHLY) ? { text: `+$${item.price.monthly}/mo`, number: item.price.monthly } : { text: `+$${item.price.yearly}/yr`, number: item.price.yearly }
                const selected = stepDataCtx.addOns.filter((x) => x.id === item.id).length > 0;
                return <AddOn
                    key={index}
                    id={item.id}
                    title={item.title}
                    desc={item.description}
                    priceText={price.text}
                    priceNumber={price.number}
                    selected={selected} />
            })
        }
    </Wrapper>
}

export default AddOns;
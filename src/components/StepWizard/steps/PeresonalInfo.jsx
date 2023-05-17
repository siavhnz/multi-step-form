import Wrapper from "./Wrapper";
import Input from "../../ui/Input";
import { useContext, useEffect, useRef, useState } from "react";
import { StepWizardContext, StepWizardDataContext } from "../../../store/context/stepwizard-context";
import { validation } from "../../../store/utils/personal-info-validation";

const PersonalInfo = () => {

    const stepCtx = useContext(StepWizardContext);
    const stepDataCtx = useContext(StepWizardDataContext);
    const [validationErrors, setValidationErrors] = useState(null);

    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const phoneInputRef = useRef(null);

    const personalInfo = stepDataCtx.personalInfo ?? {}

    useEffect(() => {
        if (stepCtx.waitForValidation && stepCtx.step.status === "next") {

            const name = nameInputRef.current.value.trim();
            const email = emailInputRef.current.value.trim();
            const phone = phoneInputRef.current.value.trim();
            let errors = validation(name, email, phone);

            if (typeof errors === "object" && Object.keys(errors).length > 0) {

                if (errors.name) {
                    nameInputRef.current.focus();
                } else if (errors.email) {
                    emailInputRef.current.focus();
                } else {
                    phoneInputRef.current.focus();
                }

                setValidationErrors(errors);
                stepCtx.resetWaitForValidation();
            } else {
                setValidationErrors(null);
                stepDataCtx.setPersonalInfoData({ name, email, phone })
                stepCtx.goToNextStep();
            }
        }
    }, [stepCtx.waitForValidation, validationErrors])

    return <Wrapper
        title="Personal info"
        desc="Please provide your name, email address, and phone number.">
        <Input
            ref={nameInputRef}
            label="Name"
            type="text"
            value={(personalInfo && personalInfo.name) ? personalInfo.name : ""}
            placeholder="e.g. Stephen King"
            errorMessage={(validationErrors && validationErrors.name) ? validationErrors.name : ""} />

        <Input
            ref={emailInputRef}
            label="Email Address"
            type="email"
            value={(personalInfo && personalInfo.email) ? personalInfo.email : ""}
            placeholder="e.g. stephenking@lorem.com"
            errorMessage={(validationErrors && validationErrors.email) ? validationErrors.email : ""} />

        <Input
            ref={phoneInputRef}
            label="Phone Number"
            type="text"
            value={(personalInfo && personalInfo.phone) ? personalInfo.phone : ""}
            placeholder="e.g. +1 234 567 890"
            errorMessage={(validationErrors && validationErrors.phone) ? validationErrors.phone : ""} />
    </Wrapper>
}

export default PersonalInfo;
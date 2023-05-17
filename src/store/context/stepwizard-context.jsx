import { createContext, useState } from "react"
import { data as originalData, PERIOD } from "../utils/data";

// gathering data from user inputs [schema]
export const StepWizardDataContext = createContext({
    personalInfo: {
        name: "",
        email: "",
        phone: "",
    },
    plan: {
        name: "",
        price: "",
        period: "",
    },
    addOns: [],
    totalPrice: 0,

    setPersonalInfoData: () => { },
    setPlan: () => { },
    toggleAddOn: (id) => { },
    calculateTotalPrice: () => { },
})


// gathering data from user inputs [states and functionality] 
const StepWizardContextDataProvider = ({ children }) => {

    const [data, setData] = useState({
        personalInfo: {
            name: "",
            email: "",
            phone: "",
        },
        plan: {
            name: "arcade",
            price: 9,
            period: "monthly",
        },
        addOns: [],
        totalPrice: 0
    })

    const setPersonalInfoData = (personalInfo) => {
        //personalInfo = { name, email, phone }
        setData((prevState) => {
            return {
                ...prevState,
                personalInfo
            }
        })
    }

    const setPlan = (plan) => {
        //plan = {name, price, period}
        setData((prevState) => {

            // if period changed e.g. from monthly to yearly
            // must update all addons if there is a addon
            let prevAddOns = [...prevState.addOns]
            if (prevState.plan.period !== plan.period && prevAddOns.length > 0) {
                //update addons
                prevAddOns.map((addOn) => {
                    const originalAddOn = originalData.addOns.items.filter((x) => x.id === addOn.id);
                    if (originalAddOn.length > 0) {
                        if (plan.period === PERIOD.MONTHLY) {
                            addOn.price = originalAddOn[0].price.monthly
                        } else {
                            addOn.price = originalAddOn[0].price.yearly
                        }
                    }
                })
            }

            return {
                ...prevState,
                plan,
                addOns: [...prevAddOns]
            }
        })
    }

    const toggleAddOn = (addOn) => {
        // addOn = {id, title, price}
        // if there is a addon by this id remove it otherwise add it
        const addOns = data.addOns.filter((x) => x.id === addOn.id);
        if (addOns.length > 0) {
            setData((prevState) => {
                return {
                    ...prevState,
                    addOns: data.addOns.filter((x) => x.id !== addOn.id)
                }
            })
        } else {
            setData((prevState) => {
                return {
                    ...prevState,
                    addOns: [...prevState.addOns, addOn]
                }
            })
        }
    }

    const calculateTotalPrice = () => {
        let total = 0;
        if (data.plan && data.plan.price) {
            total += data.plan.price;
        }
        if (data.addOns && data.addOns.length > 0) {
            total += data.addOns.reduce((a, b) => {
                return a + b.price
            }, 0);
        }

        if (total > 0) {
            setData((prevState) => {
                return {
                    ...prevState,
                    totalPrice: total
                }
            })
        }
    }

    const value = {
        personalInfo: data.personalInfo,
        plan: data.plan,
        addOns: data.addOns,
        totalPrice: data.totalPrice,
        setPersonalInfoData,
        setPlan,
        toggleAddOn,
        calculateTotalPrice,
    }

    return <StepWizardDataContext.Provider value={value}>
        {children}
    </StepWizardDataContext.Provider>
}

// pagination data [schema]
export const StepWizardContext = createContext({
    step: {
        number: 1,
        status: "next",// "next"
    },
    waitForValidation: false,
    resetWaitForValidation: () => { },
    goToNextStepWithValidation: () => { },
    goToNextStep: () => { },
    backToSpecificStep: () => { },
    backToPreviousStep: () => { },
});


// pagination data [states and functionality]
const StepWizardContextProvider = ({ children }) => {

    const [data, setData] = useState({
        number: 1,
        status: "next",// "back"
        waitForValidation: false
    });

    const goToNextStepWithValidation = (e) => {
        e.preventDefault();

        if (!data.waitForValidation) {
            setData((prevState) => {
                return {
                    ...prevState,
                    status: "next",
                    waitForValidation: true
                }
            })
        }
        else {
            // this else never call in this project :)
            goToNextStep();
        }
    }

    const goToNextStep = () => {
        setData((prevState) => {
            const next = prevState.number + 1 > 5 ? 5 : prevState.number + 1
            return {
                waitForValidation: false,
                number: next,
                status: "next"
            };
        })
    }

    const backToSpecificStep = (e, step) => {
        e.preventDefault();
        setData({
            waitForValidation: false,
            number: step,
            status: "back"
        })
    }

    const backToPreviousStep = () => {
        setData((prevState) => {
            return {
                ...prevState,
                number: prevState.number - 1,
                status: "back"
            };
        })
    }

    const resetWaitForValidation = () => {
        setData((prevState) => {
            return {
                ...prevState,
                waitForValidation: false
            }
        })
    }

    const value = {
        step: { number: data.number, status: data.status },
        waitForValidation: data.waitForValidation,
        resetWaitForValidation,
        goToNextStepWithValidation,
        goToNextStep,
        backToSpecificStep,
        backToPreviousStep,
    }

    return <StepWizardContext.Provider value={value} >
        <StepWizardContextDataProvider>
            {children}
        </StepWizardContextDataProvider>
    </StepWizardContext.Provider>
}

export default StepWizardContextProvider;
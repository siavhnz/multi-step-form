//maybe this data comes from a server and loaded on a trusted data source like useState

export const data = {
    steps: {
        items: [
            {
                number: 1,
                text: "step 1",
                desc: "your info",
            },
            {
                number: 2,
                text: "step 2",
                desc: "select plan",
            },
            {
                number: 3,
                text: "step 3",
                desc: "add-ons",
            },
            {
                number: 4,
                text: "step 4",
                desc: "summary",
            },
        ]
    },
    plans: {
        items: [
            {
                name: "arcade", 
                price: {monthly: 9, yearly: 90}
            },
            {
                name: "advanced", 
                price: {monthly: 12, yearly: 120}
            },
            {
                name: "pro", 
                price: {monthly: 15, yearly: 150}
            } 
        ],
        discount: "2 months free"
    },
    addOns: {
        items: [
            {
                id: 1,
                title: "Online service",
                description: "Access to multiplayer games",
                price: {monthly: 1, yearly: 10}
            },
            {
                id: 2,
                title: "Larger storage",
                description: "Extra 1TB of cloud save",
                price: {monthly: 2, yearly: 20}
            },
            {
                id: 3,
                title: "Customizable profile",
                description: "Custom theme on your profile",
                price: {monthly: 2, yearly: 20}
            },
        ]
    }
}

export const PERIOD = {MONTHLY:"monthly", YEARLY: "yearly"}
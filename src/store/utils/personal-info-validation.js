export const validation = (name, email, phone) => {
    const validationErrors = {};
    if(!name || name === "") {
        validationErrors.name = "This field required";
    }

    if(!email || email === "") {
        validationErrors.email = "This field required";
    }

    let emailRE = /\S+@\S+\.\S+/;
    if(email && !emailRE.test(email)) {
        validationErrors.email = "Email is not valid";
    }

    if(!phone || phone === "") {
        validationErrors.phone = "This field required";
    }
    
    let phoneRE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if(phone && !phoneRE.test(phone)) {
        validationErrors.phone = "Phone is not valid(e.g. +1234567890)";
    }

    return validationErrors;

}
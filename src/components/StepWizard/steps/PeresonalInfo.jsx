import Wrapper from "./Wrapper";
import Input from "../../ui/Input";

const PersonalInfo = () => {
    return <Wrapper
        title="Personal info"
        desc="Please provide your name, email address, and phone number.">
        <Input label="Name" type="text" placeholder="e.g. Stephen King" errorMessage="This field is required" />
        <Input label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com" errorMessage="This field is required" />
        <Input label="Phone Number" type="text" placeholder="e.g. +1 234 567 890" errorMessage="This field is required" />
    </Wrapper>
}

export default PersonalInfo;
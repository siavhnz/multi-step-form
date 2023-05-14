import AddOn from "./AddOn";
import Wrapper from "./Wrapper";

const AddOns = () => {
    return <Wrapper
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience.">

        <AddOn
            title="Online service"
            desc="Access to multiplayer games"
            price="+$1/mo"
            checked={true} />

        <AddOn
            title="Larger storage"
            desc="Extra 1TB of cloud savve"
            price="+$2/mo"
            checked={true} />

        <AddOn
            title="Customizable profile"
            desc="Custom theme on your profile"
            price="+$2/mo"
            checked={false} />
    </Wrapper>
}

export default AddOns;
import Wrapper from "./Wrapper";
import Plan from "./Plan";

// https://reactscript.com/styled-toggle-switch/
import Toggle from "react-styled-toggle";
import styles from "./Plans.module.css";

// https://stackoverflow.com/a/70314031
import { ReactComponent as ArcadeIcon } from "../../../assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../../assets/images/icon-pro.svg";

const Plans = () => {
    return <Wrapper
        title="Select your plan"
        desc="You have the option of monthly or yearly billing.">

        <Plan
            title="Arcade"
            icon={<ArcadeIcon aria-hidden="true" focusable="false" />}
            price="$9/mo"
            discount="" />
        <Plan
            title="Advanced"
            icon={<AdvancedIcon aria-hidden="true" focusable="false" />}
            price="$9/mo"
            discount="" />

        <Plan
            title="Pro"
            icon={<ProIcon aria-hidden="true" focusable="false" />}
            price="$9/mo"
            discount="" />

        <div className={styles.switch}>
            <span className={styles.active}>Monthly</span>

            <Toggle
                backgroundColorChecked="hsl(213, 96%, 18%)"
                backgroundColorUnchecked="hsl(213, 96%, 18%)"
                backgroundColorButton="hsl(0, 0%, 100%)"
                width={40}
                height={20}
                sliderWidth={12}
                sliderHeight={12}
                translate={19} />

            <span className={styles.inactive}>Yearly</span>
        </div>
    </Wrapper>
}

export default Plans;
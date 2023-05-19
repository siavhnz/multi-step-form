import Wrapper from "./Wrapper";
import styles from "./Result.module.css";
import { ReactComponent as ThanksIcon } from "../../../assets/images/icon-thank-you.svg";

const Result = () => {
    return <Wrapper>
        <div className={styles.container}>
            <div className={styles.empty}></div>
            <ThanksIcon aria-hidden="true" focusable="false" />
            <h2>Thank you!</h2>
            <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    </Wrapper>
}

export default Result;
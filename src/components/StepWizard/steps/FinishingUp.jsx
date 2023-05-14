import Wrapper from "./Wrapper";
import styles from "./FinishingUp.module.css";

const FinishingUp = () => {
    return <Wrapper
        title="Finishing up"
        desc="Double-check everything looks Ok before confirming">
        <div className={styles.container}>
            <div className={`${styles["space-between"]} ${styles.plan}`}>
                <div className={styles["plan-title"]}>
                    <h3>
                        Arcade(Monthly)
                    </h3>
                    <button>
                        change
                    </button>
                </div>
                <p className={styles["plan-price"]}>
                    $9/mo
                </p>
            </div>
            <div className={styles["add-on-container"]}>
                <div className={`${styles["space-between"]} ${styles["add-on"]}`}>
                    <h3>
                        Online service
                    </h3>
                    <p>
                        +$1/mo
                    </p>
                </div>
                <div className={`${styles["space-between"]} ${styles["add-on"]}`}>
                    <h3>
                        Larger storage
                    </h3>
                    <p>
                        +$2/mo
                    </p>
                </div>
            </div>
        </div>
        <div className={`${styles["space-between"]} ${styles.total}`}>
            <h3>
                Total(per month)
            </h3>
            <p>+$12/mo</p>
        </div>
    </Wrapper>
}

export default FinishingUp;
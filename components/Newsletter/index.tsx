import { useState } from "react";
import cn from "classnames";
import styles from "./Newsletter.module.sass";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

type NewsletterProps = {};

const Newsletter = ({}: NewsletterProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={cn("h2", styles.title)}>Get Access</div>
                <div className={styles.content}>
                Supercharge your business with R10's state-of-the-art generative AI Assistant: an intelligent solution that understands and generates human-like responses, redefining customer interactions and support across all platforms.
                </div>
                <div className={styles.btns}>
                    <a
                        className={cn(
                            "button-white button-large",
                            styles.button
                        )}
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Google Marketplace</span>
                        <Icon name="google-play" />
                    </a>
                </div>
            </div>
            <div className={styles.col}>
                <div className={cn("h2", styles.title)}>Newsletter</div>
                <div className={styles.info}>
                    Get the latest R10 updates
                </div>
                <form
                    className={styles.form}
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <div className={styles.fieldset}>
                        <Field
                            className={styles.field}
                            inputClassName={styles.input}
                            placeholder="Name"
                            icon="profile"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            light
                            required
                        />
                        <Field
                            className={styles.field}
                            inputClassName={styles.input}
                            placeholder="Email"
                            type="email"
                            icon="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            light
                            required
                        />
                    </div>
                    <button
                        className={cn(
                            "button-white button-large",
                            styles.button
                        )}
                        type="submit"
                    >
                        SUBSCRIBE NOW
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;

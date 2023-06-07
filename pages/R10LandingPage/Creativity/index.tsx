import Link from "next/link";
import cn from "classnames";
import styles from "./Creativity.module.sass";
import Image from "@/components/Image";

import { creativity } from "@/constants/creativity";

type CreativityProps = {};

const Creativity = ({}: CreativityProps) => (
    <div className={styles.creativity}>
        <div className={styles.head}>
            <div className={cn("h1", styles.title)}>Get Started Today</div>
            <div className={styles.info}>
                There's no need to wait. You can try out R10 today and start transforming your business!
            </div>
        </div>
        <div className={styles.list}>
            {creativity.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.preview}>
                        <img src={item.image}></img>
                    <Image
                    className={styles.confetti}
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt="Main"
            />
                        {/* <video
                            className={styles.confetti}
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={item.video} type="video/mp4" />
                        </video> */}
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.content}>{item.content}</div>
                        <Link href={item.url}>
                            <a
                                className={cn(
                                    "button-stroke button-medium",
                                    styles.button
                                )}
                            >
                                learn more
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Creativity;

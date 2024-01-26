import styles from './Box.module.css';
import Image from 'next/image';

export default function Box ({ image, heading, description }) {
    return <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <Image
                src={`/${image}`}
                width={2000}
                height={2000}
                alt={heading}
                className={styles.image}
                sizes='100%'
                priority={true}
            />
        </div>
        <div className={styles.textWrapper}>
            <h3>{heading}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
}
import styles from './Carousel.module.css';
import Image from 'next/image';

export default function Carousel ({ items, names }) {
    return <div className={styles.container}>
        <div className={styles.carousel}>
            {items.map((item, i) => 
                <Image 
                    src={`/tech/${item}.svg`}
                    width={100}
                    height={100}
                    alt={names[i]}
                    key={names[i]}
                />
            )}
        </div>
        <div className={styles.carousel}>
            {items.map((item, i) => 
                <Image 
                    src={`/tech/${item}.svg`}
                    width={100}
                    height={100}
                    alt={names[i]}
                    key={names[i]}
                />
            )}
        </div>
    </div>
}
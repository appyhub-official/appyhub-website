import styles from './Carousel.module.css';
import Image from 'next/image';
import TechnologyIcon from './TechnologyIcon';

export default function Carousel ({ items, names }) {
    return <div className={styles.container}>
        <div className={styles.carousel}>
            {items.map((item, i) => 
                <TechnologyIcon name={item} key={names[i]}/>
            )}
        </div>
        <div className={styles.carousel}>
            {items.map((item, i) => 
                <TechnologyIcon name={item} key={names[i]}/>
            )}
        </div>
    </div>
}
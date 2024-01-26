import styles from './Offer.module.css';
import Translations from '../assets/translations.json';

import Box from '../components/Box';
import ScrollLink from '../components/ScrollLink';

const { 
    ourOffer,
    whatWeDo,
    boxes,
    contactUs
 } = Translations['pl'].offerSection;

export default function Offer() {
    return <div className={styles.container} id='offer-section'>
        <div className={styles.left}>
            <div className={styles.textWrapper}>
                <h4>{ourOffer}</h4>
                <h2>{whatWeDo}</h2>
            </div>

            <div className={styles.boxes}>
                {boxes.map(({ image, heading, desc, priority}) => 
                    <Box image={image} heading={heading} description={desc} key={heading} />
                )}
            </div>

            <div className={styles.buttonWrapper}>
                <ScrollLink className={styles.contact} href='#contact-section'>{contactUs}</ScrollLink>
            </div>
        </div>
        <div className={styles.right}>
            {boxes.map(({ image, heading, desc, priority, both}) => 
                (priority !== 1 || both) && <Box image={image} heading={heading} description={desc} key={heading} />
            )}
        </div>
    </div>
}
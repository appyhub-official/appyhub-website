import styles from './Parallax.module.css';
import Translations from '../assets/translations.json';

const { 
    professionalismAnd,
    involvement
 } = Translations['pl'];

export default function Parallax () {
    return <div className={styles.container}>
        <div className={styles.textWrapper}>
            <h4 className={styles.subheading}>{professionalismAnd}</h4>
            <h2 className={styles.heading}>{involvement}</h2>
       </div>
    </div>
}
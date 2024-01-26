import styles from './Technologies.module.css';
import Translations from '../assets/translations.json';
import Carousel from '../components/Carousel';
import InfoBox from '../components/InfoBox';

const { 
        technologies,
        whatWeUse,
        subheading,
        boxes
    } = Translations['pl'].technologiesSection,
    iconsNames = ['html5', 'css3', 'javascript', 'typescript', 'react',
        'redux', 'nextjs', 'nodejs', 'postgresql', 'mongodb', 'git', 'npm'];

export default function Technologies () {
    return <div className={styles.container} id='technologies-section'>
        <h4 className={styles.subheading}>{technologies}</h4>
        <h2>{whatWeUse}</h2>
        <p className={styles.text}>{subheading}</p>
        <Carousel items={iconsNames} names={iconsNames} />
        <div className={styles.boxes}>
            {boxes.map(box => <InfoBox text={box.text} key={box.text}/>)}
        </div>
    </div>
}
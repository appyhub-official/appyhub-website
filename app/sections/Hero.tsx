import styles from './Hero.module.css';
import Translations from '../assets/translations.json';

import Logo from '../components/Logo';
import Typewriter from '../components/Typewriter';
import ScrollLink from '../components/ScrollLink';

const { 
    heading1,
    heading2,
    heading3,
    heading4,
    subheading
 } = Translations['pl'].heroSection;

export default function Hero() {
    return <div className={styles.container} id='#hero-section'>
        <div className={styles.logoWrapper}>
            <Logo color='#000' animation={true} />
        </div>

        <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
                {heading1}
                <span className='bold'>
                    <Typewriter 
                        textArray={heading2}
                        delay={100}
                        duration={2000}
                        infinite={true} 
                    />
                </span>
            </h1>
            <h1 className={styles.heading}>
                {heading3}
                <span className='bold'>{heading4}</span>
            </h1>
            
            <h3 className={styles.heading}>
                {subheading}
            </h3>
        </div>
        <ScrollLink className={styles.arrow} href="#offer-section">
            <svg width="75" height="79" viewBox="0 0 75 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Arrows">
                    <g id="Bottom">
                        <path id="Vector 1" d="M2.00003 41.3553L37.3554 76.7107" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path id="Vector 2" d="M72.7107 41.3553L37.3554 76.7107" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                    </g>
                    <g id="Middle">
                        <path id="Vector 1_2" d="M10 26.2843L36.5165 52.8008" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path id="Vector 2_2" d="M64.8008 24.5165L36.5165 52.8008" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                    </g>
                    <g id="Top">
                        <path id="Vector 1_3" d="M19 10.6777L36.6777 28.3553" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path id="Vector 2_3" d="M54.3553 10.6777L36.6777 28.3553" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                    </g>
                </g>
            </svg>
        </ScrollLink>
    </div>
}
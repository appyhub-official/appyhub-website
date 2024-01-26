import styles from './Footer.module.css';
import Link from 'next/link';
import Translations from '../assets/translations.json';

import Logo from '../components/Logo';
import ScrollLink from '../components/ScrollLink';

const { 
    offer,
    technologies,
    contact,
    privacyPolicy,
    copyright,
    website,
    rights
 } = Translations['pl'];

export default function Footer () {
    return <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.logoWrapper}>
                <ScrollLink href='#hero-section'>
                    <Logo color='#fff' animation={false} />
                </ScrollLink>
            </div>

            <ul className={styles.menu}>
                <li className={styles.item}><ScrollLink href='#offer-section'>{offer}</ScrollLink></li>
                <li className={styles.item}><ScrollLink href='#technologies-section'>{technologies}</ScrollLink></li>
                <li className={styles.item}><ScrollLink href='#contact-section'>{contact}</ScrollLink></li>
            </ul>
            
            <div className={styles.iconWrapper}>
                <Link href="mailto:hello@appyhub.pl">
                    <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 18.645L15.855 15.2087L1.39374 30.0125H38.2388L24.0437 15.1838L20 18.645ZM26.1125 13.6125L39.865 27.9113C39.9437 27.6338 40 27.3463 40 27.0425V2.3275L26.1125 13.6125ZM0 2.27001V27.0425C0 27.3463 0.0562521 27.6338 0.135002 27.9113L13.9338 13.6588L0 2.27001ZM38.75 0H1.25L20 15.0238L38.75 0Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
        <div className={styles.textWrapper}>
            <p>
                {privacyPolicy}
            </p>
            <p>
                {copyright}
                <Link href='https://www.appyhub.pl/' className={styles.link}>{website}</Link>
            </p>
            <p>
                {rights}
            </p>
        </div>
    </div>
}
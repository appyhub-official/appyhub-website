import styles from './page.module.css';
import Link from 'next/link';
import Translations from '../assets/translations.json';

import Logo from '../components/Logo';

const {
        heading,
        paragraphs
    } = Translations['pl'].privacyPolicySection,
    {
        privacyPolicy
    } = Translations['pl'];

export default function PrivacyPolicy() {
    return <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            <Logo color='#000' animation={false} />
        </Link>
        <h2 className={styles.pageTitle}>{privacyPolicy}</h2>
        <p>{heading}</p>
        {paragraphs.map(({ paragraph, sections }, i) => 
            <div className={styles.paragraph} key={paragraph}>
                <h3>§{i + 1}. {paragraph}</h3>
                {sections.map(({heading, desc, list, companyDetails}, i) =>
                <div key={i}>
                    <h4 className={styles.sectionTitle}>{heading}</h4>
                    <p>{desc}</p>
                    {companyDetails && <div className={styles.companyDetails}>
                        {companyDetails.map(el =>
                        <p className={styles.companyDetails} key={el}>{el}</p>)}
                    </div>}
                    {list && <ul className={styles.list}>
                        {list.map(el => <li key={el}>{el}</li>)}
                    </ul>}
                </div>)}
            </div>
        )}
    </div>
}
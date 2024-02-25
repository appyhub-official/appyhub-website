'use client';

import { useState, useEffect } from "react";
import styles from './CookiesPopup.module.css';
import Translations from '../assets/translations.json';
import Link from 'next/link';

const { cookiesPopup } = Translations['pl'],
    { first, button, second } = cookiesPopup;

export default function CookiesPopup() {
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        // Perform localStorage action
        const item = JSON.parse(localStorage.getItem('acceptedCookies'));

        item ? setDisplay(item) : setDisplay(false);
      }, [])

    const handleClick = () => {
        setDisplay((prevDisplay) => {
            const newValue = !prevDisplay
            localStorage.setItem("acceptedCookies", newValue.toString());
            return newValue;
        });
    }

    return <div className={`${styles.container} ${display ? styles.hidden : ''}`}>
        <p>
            {first}
            <Link href='/privacy-policy'>{button}</Link>
            {second}
        </p>
        <svg className={styles.close} onClick={handleClick} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
            <path className={styles.border} d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    </div>
}
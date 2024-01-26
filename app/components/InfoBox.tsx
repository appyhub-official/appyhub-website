import styles from './InfoBox.module.css';

export default function InfoBox ({ text }) {
    return <div className={styles.box}>
        <svg className={styles.icon} width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
            <path id="border" d="M41.6667 21.6667C41.6667 31.0947 41.6667 35.8089 38.7377 38.7377C35.8089 41.6667 31.0947 41.6667 21.6667 41.6667C12.2386 41.6667 7.52455 41.6667 4.59563 38.7377C1.66669 35.8089 1.66669 31.0947 1.66669 21.6667C1.66669 12.2386 1.66669 7.52455 4.59563 4.59563C7.52455 1.66669 12.2386 1.66669 21.6667 1.66669C31.0947 1.66669 35.8089 1.66669 38.7377 4.59563C40.6853 6.54311 41.3379 9.27979 41.5565 13.6667" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"/>
            <path id="letter" d="M21.6667 31.6667V19.6667M23.6667 13.6667C23.6667 12.5621 22.7713 11.6667 21.6667 11.6667C20.5621 11.6667 19.6667 12.5621 19.6667 13.6667C19.6667 14.7713 20.5621 15.6667 21.6667 15.6667C22.7713 15.6667 23.6667 14.7713 23.6667 13.6667Z" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"/>
            </g>
        </svg>
        <p className={styles.text}>
            {text}
        </p>
    </div>
}
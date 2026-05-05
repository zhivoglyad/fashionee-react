import styles from './FindUsLinks.module.scss'

const FindUsLinks = () => {
    return (
        <div className={styles.findUs}>
            <div className={styles.findUsText}>
                Find us here:
            </div>
            <div className={styles.findUsLinks}>
                <div className={styles.findUsLink}>
                    <a href=''>FB</a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.findUsLink}>
                    <a href=''>TW</a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.findUsLink}>
                    <a href=''>INS</a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.findUsLink}>
                    <a href=''>PT</a>
                </div>
            </div>
        </div>
    )
}

export default FindUsLinks
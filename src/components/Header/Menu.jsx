import styles from './Header.module.scss'
import arrow from '../../assets/icons/arrow.svg'
import arrowRed from '../../assets/icons/arrow-red.svg'

const Menu = (props) => {
    const {
        currentPage,
        setCurrentPage,
    } = props

    return (
        <div className={styles.menu}>
            <div className={styles.menuItem}>
                <span>Home</span>
            </div>
            <div className={styles.menuItem}>
                <span>Pages</span>
                <img src={arrow} alt='Arrow' className={styles.arrowDefault} />
                <img src={arrowRed} alt='Arrow' className={styles.arrowHover} />
            </div>
            <div className={`${styles.menuItem} ${currentPage === 'Shop' ? styles.active : ''}`}>
                <span onClick={() => setCurrentPage('Shop')}>Shop</span>
                <img src={arrow} alt='Arrow' className={styles.arrowDefault} />
                <img src={arrowRed} alt='Arrow' className={styles.arrowHover} />
            </div>
            <div className={`${styles.menuItem} ${styles.blog}`}>
                <span>Blog</span>
            </div>
            <div className={`${styles.menuItem} ${styles.contact}`}>
                <span>Contact</span>
            </div>
        </div >
    )
}

export default Menu
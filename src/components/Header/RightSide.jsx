import styles from './Header.module.scss'
import search from '../../assets/icons/search.svg'
import user from '../../assets/icons/user.svg'
import favorites from '../../assets/icons/heart.svg'
import cartIcon from '../../assets/icons/cart.svg'

const RightSide = (props) => {
    const {
        setCurrentPage,
        favoritesCount,
        cartCount,
    } = props

    return (
        <div className={styles.rightSide}>
            <div className={styles.headerIcon}>
                <img src={search} alt='Search' />
            </div>
            <div className={styles.headerIcon}>
                <img src={user} alt='Profile' />
            </div>
            <div className={styles.headerIcon}>
                <img src={favorites} alt='Favorites' />
                <div className={styles.counter}>{favoritesCount}</div>
            </div>
            <div className={styles.headerIcon} onClick={() => setCurrentPage('Cart')}>
                <img src={cartIcon} alt='Cart' />
                <div className={styles.counter}>{cartCount}</div>
            </div>
        </div>
    )
}

export default RightSide
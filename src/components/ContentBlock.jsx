import styles from './ContentBlock.module.scss'
import verticalLine from '../assets/images/vertical-line.svg'
import points322 from '../assets/images/points322.svg'

const ContentBlock = (props) => {
    const {
        currentPage,
        setCurrentPage,
    } = props

    return (
        <div className={styles.pageHeaderWrapper}>
            <div className={styles.pageHeaderMenu}>
                <div className={styles.pageInfo}>
                    <div className={styles.title}>{currentPage}</div>
                    <div className={styles.menuItems}>
                        <div className={styles.verticalLine}>
                            <img src={verticalLine} alt='Vertical line' />
                        </div>
                        <div className={`${styles.menuItem} ${currentPage === 'Cart' ? styles.active : ''}`}>
                            <span onClick={() => setCurrentPage('Cart')}>Cart</span>
                        </div>
                        <div className={`${styles.menuItem} ${currentPage === 'Shop' ? styles.active : ''}`}>
                            <span onClick={() => setCurrentPage('Shop')}>Shop</span>
                        </div>
                    </div>
                </div>
                <div className={styles.lineDecoration}></div>
                <div className={styles.pointsHeaderDecoration}>
                    <img src={points322} alt='Points decoration' />
                </div>
            </div>
            <div className={styles.photoHeader}></div>
        </div>
    )
}

export default ContentBlock
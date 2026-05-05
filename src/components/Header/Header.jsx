import styles from './Header.module.scss'
import LeftSideHeader from './LeftSideHeader'
import RightSide from './RightSide'

const Header = (props) => {
    const {
        currentPage,
        setCurrentPage,
        favoritesCount,
        cartCount,
    } = props

    return (
        <header className={styles.header}>
            <LeftSideHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <RightSide
                setCurrentPage={setCurrentPage}
                favoritesCount={favoritesCount}
                cartCount={cartCount}
            />
        </header>
    )
}

export default Header
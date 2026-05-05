import styles from './Header.module.scss'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import Menu from './Menu'

const LeftSideHeader = (props) => {
    const {
        currentPage,
        setCurrentPage,
    } = props

    return (
        <div className={styles.leftSide}>
            <div className={styles.logoContainer}>
                <BurgerMenu />
                <Logo />
            </div>
            <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default LeftSideHeader

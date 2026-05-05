import styles from './Header.module.scss'
import logo from '../../assets/icons/logo.svg'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt='Logo' />
        </div>
    )
}

export default Logo

import styles from './Header.module.scss'

const BurgerMenu = () => {
    return (
        <div className={styles.burgerMenu}>
            <input type='checkbox' id='burger-checkbox' className={styles.burgerCheckbox} />
            <label className={styles.burger} htmlFor='burger-checkbox'></label>
        </div>
    )
}

export default BurgerMenu
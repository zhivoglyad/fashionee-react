import styles from './Cart.module.scss'
import buttonArrow from '../../assets/icons/button-arrow.svg'
import FindUsLinks from '../FindUsLinks'
import Button from '../Button'
import useLocalStorage from '../Hooks/useLocalStorage'

const PromoCodeBlock = (props) => {
    const {
        onApplyPromo,
    } = props

    const [promo, setPromo] = useLocalStorage('promo', '');

    const handleButtonClick = () => {
        onApplyPromo(promo.toLowerCase().trim());
    };

    return (
        <div className={styles.promoCodeWrapper}>
            <div className={styles.promoInfo}>
                <div className={styles.promoTitle}>You Have A Promo Code?</div>
                <div className={styles.description}>To receive up-to-date promotional codes, subscribe to us on social
                    networks.</div>
            </div>
            <div className={styles.promoCode}>
                <input
                    type='text'
                    placeholder='Enter promo code'
                    name='promo-code'
                    className={styles.input}
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                />
                <Button
                    wrapperClassName={styles.buttonWrapperPromo}
                    buttonClassName={styles.buttonPromo}
                    onClick={handleButtonClick}>
                    <img src={buttonArrow} />
                </Button>
            </div>
            <FindUsLinks />
        </div>
    )
}

export default PromoCodeBlock
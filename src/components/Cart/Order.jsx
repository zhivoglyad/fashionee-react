import styles from './Cart.module.scss'
import Button from '../Button'
import { calculateOrderSummary } from '../../utils/cartUtils'

const Order = (props) => {
    const {
        CartProducts,
        promoDiscount,
        onCheckout,
    } = props

    const {
        priceSum,
        discountAmount,
        delivery,
        total,
    } = calculateOrderSummary(CartProducts, promoDiscount);

    return (
        <div className={styles.order}>
            <div className={styles.title}>Your Order</div>
            <div className={styles.priceRow}>
                <div className={styles.name}>Оrder price</div>
                <div className={styles.price}>${priceSum.toFixed(2)}</div>
            </div>
            <div className={styles.priceRow}>
                <div className={styles.name}>Discount for promo code</div>
                <div>
                    {promoDiscount > 0
                        ? `${promoDiscount * 100}%`
                        : 'No'
                    }
                </div>
            </div>
            <div className={`${styles.priceRow} ${styles.delimiter}`}>
                <div className={styles.name}>Delivery <span className={styles.deliveryDate}>(Aug 02 at 16:00)</span></div>
                <div className={styles.price}>${delivery.toFixed(2)}</div>
            </div>
            <div className={`${styles.priceRow} ${styles.total}`}>
                <div className={styles.totalName}>Total</div>
                <div className={styles.totalPrice} data-testid='total-sum'>${total.toFixed(2)}</div>
            </div>
            <Button
                wrapperClassName={styles.orderButtonWrapper}
                onClick={() => {
                    onCheckout({
                        delivery,
                        discountAmount,
                        priceSum,
                        total,
                    })
                }}>
                Checkout
            </Button>
        </div>
    )
}

export default Order
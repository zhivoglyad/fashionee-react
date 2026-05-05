import { useMemo } from 'react'
import styles from './Cart.module.scss'
import data from '../../assets/products.json'
import PromoCodeBlock from './PromoCodeBlock'
import Order from './Order'
import ProductsListCart from './ProductsListCart'
import useLocalStorage from '../Hooks/useLocalStorage'
import { resolvePromoDiscount, VALID_PROMO_CODE } from '../../utils/cartUtils';

const Cart = (props) => {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
    } = props

    const [promoDiscount, setPromoDiscount] = useLocalStorage('promoDiscount', 0);

    const onApplyPromo = (code) => {
        setPromoDiscount(resolvePromoDiscount(code));
    };

    const productsData = data.products;

    const CartProducts = useMemo(() =>
        cart.map(item => ({
            ...productsData.find(product => product.id === item.id),
            quantity: item.quantity
        })),
        [cart, productsData]);

    const handleCheckout = (summary) => {
        const items = CartProducts.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            quantity: p.quantity,
        }));

        const orderData = {
            priceSum: summary.priceSum,
            deliveryPrice: summary.delivery,
            discountRate: promoDiscount,
            discountAmount: summary.discountAmount,
            totalPrice: summary.total,
            promoCode: promoDiscount > 0 ? VALID_PROMO_CODE : null,
            items,
        };

        console.log('ORDER DATA:', orderData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div className={styles.orderWrapper}>
                    {
                        cart.length > 0 && <ProductsListCart
                            increaseQty={increaseQty}
                            decreaseQty={decreaseQty}
                            removeFromCart={removeFromCart}
                            cart={cart} />
                    }
                    {
                        cart.length <= 0 && <p style={{ textAlign: 'center' }}>There's nothing here yet. </p>
                    }
                    <Order CartProducts={CartProducts} promoDiscount={promoDiscount} onCheckout={handleCheckout} />
                </div>
                <PromoCodeBlock onApplyPromo={onApplyPromo} />
            </div>
        </div>
    )
}

export default Cart
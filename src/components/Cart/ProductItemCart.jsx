import styles from './Cart.module.scss'

const ProductItemCart = (props) => {
    const {
        product,
        increaseQty,
        decreaseQty,
        removeFromCart,
    } = props

    const totalProductPrice = product.price * product.quantity;

    return (
        <div className={styles.product}>
            <div className={styles.photo}>
                <img src={product.image} />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productTitle}>{product.name}</div>
                <div className={styles.priceWrapper}>
                    <div className={styles.priceAndQuantity}>
                        <div className={styles.productPrice}>
                            {product.oldPrice && (
                                <div className={styles.oldPrice}>${product.oldPrice}</div>
                            )}
                            <div className={styles.currentPrice}>${product.price}</div>
                        </div>
                        <div className={styles.quantity}>
                            <div className={styles.countButton} onClick={() => decreaseQty(product.id)}>-</div>
                            <div className={styles.count}>{product.quantity}</div>
                            <div className={styles.countButton} onClick={() => increaseQty(product.id)}>+</div>
                        </div>
                    </div>
                    <div className={styles.totalProductPrice}>${totalProductPrice.toFixed(2)}</div>
                </div>
                <div className={styles.close} onClick={() => removeFromCart(product.id)}>X</div>
            </div>
        </div>
    )
}

export default ProductItemCart
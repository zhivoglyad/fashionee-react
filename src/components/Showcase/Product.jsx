import styles from './Shop.module.scss'
import heartIcon from '../../assets/icons/heart.svg'
import heartIconRed from '../../assets/icons/heart-red.svg'

const Product = (props) => {
    const {
        product,
        onToggleFavorite,
        isLiked,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const itemInCart = cart.find(item => item.id === product.id);

    return (
        <div className={styles.product}>
            <div className={styles.productPhoto}>
                <img src={product.image} />
                <div className={styles.topBar}>
                    <div className={styles.labels}>
                        {product.isSale && <div className={`${styles.label} ${styles.sale}`}>Sale</div>}
                        {product.isNew && <div className={`${styles.label} ${styles.new}`}>New</div>}
                    </div>
                    <div className={styles.favorites} onClick={() => onToggleFavorite(product.id)}>
                        <img src={isLiked ? heartIconRed : heartIcon} alt='Like' />
                    </div>
                </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productName}>
                    {product.name}
                </div>
                <div className={styles.price}>
                    <div className={styles.currentPrice}>${product.price}</div>
                    {product.oldPrice && <div className={styles.oldPrice}>${product.oldPrice}</div>}
                </div>
            </div>
            {!itemInCart ? (
                <button className={styles.buyButton} onClick={() => addToCart(product.id)}>Buy</button>
            ) : (
                <div className={styles.quantity}>
                    <div className={styles.countButton} onClick={() => decreaseQty(product.id)}>-</div>
                    <div className={styles.count}>{itemInCart.quantity}</div>
                    <div className={styles.countButton} onClick={() => increaseQty(product.id)}>+</div>
                </div>
            )
            }
        </div>
    )
}

export default Product
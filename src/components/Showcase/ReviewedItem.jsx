import styles from './Shop.module.scss'

const ReviewedItem = (props) => {
    const {
        product,
    } = props

    return (
        <div className={styles.reviewedProduct}>
            <div className={styles.image}>
                <img src={product.image} />
            </div>
            <div className={styles.reviewedProductInfo}>
                <div className={styles.reviewedProductName}>{product.name}</div>
                <div className={styles.reviewedProductPrice}>
                    <div className={styles.reviewedProductCurrentPrice}>${product.price}</div>
                    {product.oldPrice && <div className={styles.reviewedProductOldPrice}>${product.oldPrice}</div>}
                </div>
            </div>
        </div>
    )
}

export default ReviewedItem
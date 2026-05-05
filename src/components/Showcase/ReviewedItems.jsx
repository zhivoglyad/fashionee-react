import styles from './Shop.module.scss'
import data from '../../assets/products.json'
import ReviewedItem from './ReviewedItem';

const ReviewedItems = () => {
    const reviewedProducts = data.products.filter(item => item.id === 6 || item.id === 5 || item.id === 1);

    return (
        <div className={`${styles.sidebarItem} ${styles.reviewed}`}>
            <div className={styles.sidebarTitle}>Reviewed by you</div>
            <div className={styles.sidebarContent}>
                <div className={styles.reviewedProducts}>
                    {reviewedProducts.map(product => (
                        <ReviewedItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReviewedItems
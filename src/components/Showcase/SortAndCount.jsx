import styles from './Shop.module.scss'
import filterIcon from '../../assets/icons/filter.png'
import Sort from './Sort'

const SortAndCount = (props) => {
    const {
        products,
        sortType,
        onChangeSort,
    } = props

    return (
        <div className={styles.sortAndCount}>
            <div className={styles.productsCount}>
                There are <span className={styles.bold}>{products.length}</span> products in this category
            </div>
            <div className={styles.filter}>
                <img src={filterIcon} alt='Filter' />
            </div>
            <Sort sortType={sortType} onChangeSort={onChangeSort} />
        </div>
    )
}

export default SortAndCount
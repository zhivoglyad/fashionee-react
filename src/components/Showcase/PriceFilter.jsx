import styles from './Shop.module.scss'

const PriceFilter = (props) => {
    const {
        filters,
        priceFilter,
        setPriceFilter,
    } = props

    const maxPrice = filters.priceRange.max;
    const minPrice = filters.priceRange.min;

    const handleMinValue = (value) => {
        setPriceFilter((prev) => ({ ...prev, min: value }))
    };

    const handleMaxValue = (value) => {
        setPriceFilter((prev) => ({ ...prev, max: value }))
    };

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Price</div>
            <div className={styles.sidebarContent}>
                <div className={styles.priceBar}>
                    <input type='text'
                        placeholder={minPrice}
                        className={styles.input}
                        value={priceFilter.min}
                        onChange={(e) => handleMinValue(Number(e.target.value))} />
                    <input type='text'
                        placeholder={maxPrice}
                        className={styles.input}
                        value={priceFilter.max}
                        onChange={(e) => handleMaxValue(Number(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter
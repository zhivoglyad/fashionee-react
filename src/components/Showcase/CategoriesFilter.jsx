import styles from './Shop.module.scss'

const CategoriesFilter = (props) => {
    const {
        activeCategory,
        setActiveCategory,
        filters,
    } = props

    const categories = ['All', ...filters.categories];

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Categories</div>
            <div className={styles.sidebarContent}>
                <ul className={styles.customList}>
                    {categories.map((category, index) => (
                        <li key={index} className={`${styles.item} ${activeCategory === category ? styles.active : ''}`} onClick={() => setActiveCategory(category)}>{category}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoriesFilter
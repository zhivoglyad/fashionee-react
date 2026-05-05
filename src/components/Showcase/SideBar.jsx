import styles from './Shop.module.scss'
import data from '../../assets/products.json'
import BannerSeasonSale from './BannerSeasonSale'
import CategoriesFilter from './CategoriesFilter'
import ReviewedItems from './ReviewedItems'
import SearchForm from './SearchForm'
import PriceFilter from './PriceFilter'
import ColorsFilter from './ColorsFilter'
import ApplyButton from './ApplyButton'

const SideBar = (props) => {
    const {
        searchValue,
        setSearchValue,
        pendingCategory,
        setPendingCategory,
        priceFilter,
        setPriceFilter,
        selectedColors,
        setSelectedColors,
        applyFilters,
    } = props

    const categoriesSet = new Set();
    const colorsSet = new Set();
    let minPrice = Infinity;
    let maxPrice = -Infinity;

    data.products.forEach((product) => {
        product.categories.forEach((category) => categoriesSet.add(category));

        colorsSet.add(product.color);

        if (product.price < minPrice) minPrice = product.price;
        if (product.price > maxPrice) maxPrice = product.price;
    });

    const filters = {
        categories: Array.from(categoriesSet),
        colors: Array.from(colorsSet),
        priceRange: { min: Math.floor(minPrice), max: Math.ceil(maxPrice) },
    };

    return (
        <div className={styles.sidebar}>
            <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
            <CategoriesFilter activeCategory={pendingCategory} setActiveCategory={setPendingCategory} filters={filters} />
            <PriceFilter filters={filters} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
            <ColorsFilter filters={filters} selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
            <ApplyButton applyFilters={applyFilters} />
            <ReviewedItems />
            <BannerSeasonSale />
        </div>
    )
}

export default SideBar
import { useState } from 'react'
import styles from './Shop.module.scss'
import data from '../../assets/products.json'
import SideBar from './SideBar'
import ProductsArea from './ProductsArea'
import useLocalStorage from '../Hooks/useLocalStorage'
import useDebounce from '../Hooks/useDebounce'

const Showcase = (props) => {
    const {
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const products = data.products;

    const [searchValue, setSearchValue] = useLocalStorage('searchValue', '');

    const debouncedSearchValue = useDebounce(searchValue, 350);

    const [activeCategory, setActiveCategory] = useLocalStorage('activeCategory', 'All');

    const [pendingCategory, setPendingCategory] = useState(activeCategory);

    const [priceFilter, setPriceFilter] = useLocalStorage('priceFilter', { min: '', max: '' });

    const [selectedColors, setSelectedColors] = useLocalStorage('selectedColors', []);

    const [filteredProducts, setFilteredProducts] = useLocalStorage('filteredProducts', products);

    const applyFilters = () => {
        setActiveCategory(pendingCategory);

        let filtered = [...products];

        if (pendingCategory !== 'All') {
            filtered = filtered.filter(p => p.categories.includes(pendingCategory));
        }

        if (priceFilter.min !== '') {
            filtered = filtered.filter(p => p.price >= Number(priceFilter.min));
        }

        if (priceFilter.max !== '') {
            filtered = filtered.filter(p => p.price <= Number(priceFilter.max));
        }

        if (selectedColors.length > 0) {
            filtered = filtered.filter(p => selectedColors.includes(p.color.toLowerCase()));
        }

        setFilteredProducts(filtered);
    };

    const displayedProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.shop}>
                <SideBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    pendingCategory={pendingCategory}
                    setPendingCategory={setPendingCategory}
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                    selectedColors={selectedColors}
                    setSelectedColors={setSelectedColors}
                    applyFilters={applyFilters} />
                <ProductsArea
                    products={displayedProducts}
                    onToggleFavorite={onToggleFavorite}
                    favorites={favorites}
                    addToCart={addToCart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    cart={cart} />
            </div>
        </div>
    )
}

export default Showcase
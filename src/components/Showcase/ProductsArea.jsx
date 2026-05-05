import styles from './Shop.module.scss'
import { useMemo } from 'react'
import Pagination from './Pagination'
import SortAndCount from './SortAndCount'
import ProductsList from './ProductsList'
import useLocalStorage from '../Hooks/useLocalStorage'

const ProductsArea = (props) => {
    const {
        products,
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const [activePage, setActivePage] = useLocalStorage('activePage', 1);

    const [sortType, setSortType] = useLocalStorage('sortType', 'RELEVANCE');

    const handleChangeSort = (value) => {
        setSortType(value);
        setActivePage(1);
    };

    const sortedProducts = useMemo(() => {
        if (sortType === 'RELEVANCE') {
            return [...products];
        }

        const sorted = [...products];

        switch (sortType) {
            case 'NAME_ASC':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'NAME_DESC':
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'PRICE_ASC':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'PRICE_DESC':
                sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return sorted;
    }, [products, sortType]);

    const limit = 9;
    const start = (activePage - 1) * limit;
    const end = start + limit;
    const totalPages = Math.ceil(sortedProducts.length / limit);

    const visibleProducts = sortedProducts.slice(start, end);

    return (
        <div className={styles.productsWrapper}>
            <SortAndCount products={products} sortType={sortType} onChangeSort={handleChangeSort} />
            <ProductsList
                visibleProducts={visibleProducts}
                activePage={activePage}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
                addToCart={addToCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                cart={cart} />
            {visibleProducts.length > 0 && <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />}
            {visibleProducts.length === 0 && <p style={{ textAlign: 'center' }}>Sorry, there are no products matching your search.</p>}
        </div>
    )
}

export default ProductsArea
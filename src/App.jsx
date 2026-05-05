import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContentBlock from './components/ContentBlock'
import Showcase from './components/Showcase/Showcase'
import Cart from './components/Cart/Cart'
import useLocalStorage from './components/Hooks/useLocalStorage'
import { addToCartItems, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem } from './utils/cartUtils'

function App() {
    const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 'Shop');

    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const [cart, setCart] = useLocalStorage('cart', []);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(fav => fav !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    const addToCart = (id) => {
        setCart(cart => addToCartItems(cart, id));
    };

    const increaseQuantity = (id) => {
        setCart(cart => increaseCartItemQuantity(cart, id));
    };

    const decreaseQuantity = (id) => {
        setCart(cart => decreaseCartItemQuantity(cart, id));
    };

    const removeFromCart = (id) => {
        setCart(cart => removeCartItem(cart, id));
    };

    return (
        <>
            <Header
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                favoritesCount={favorites.length}
                cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            />
            <ContentBlock
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <main>
                {currentPage === 'Shop' && <Showcase
                    onToggleFavorite={toggleFavorite}
                    favorites={favorites}
                    addToCart={addToCart}
                    increaseQty={increaseQuantity}
                    decreaseQty={decreaseQuantity}
                    cart={cart} />}
                {currentPage === 'Cart' && <Cart
                    increaseQty={increaseQuantity}
                    decreaseQty={decreaseQuantity}
                    removeFromCart={removeFromCart}
                    cart={cart} />}
            </main>
            <Footer />
        </>
    )
}

export default App

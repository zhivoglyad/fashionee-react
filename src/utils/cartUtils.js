export const VALID_PROMO_CODE = 'ilovereact';
export const DISCOUNT_RATE = 0.1;
export const DELIVERY_COST = 15;

export function addToCartItems(cart, id) {
    const isExist = cart.find(item => item.id === id);

    if (isExist) {
        return cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        return [...cart, { id, quantity: 1 }];
    }
};

export function increaseCartItemQuantity(cart, id) {
    return cart.map(item =>
        item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
    )
};

export function decreaseCartItemQuantity(cart, id) {
    return cart
        .map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        .filter(item => item.quantity > 0)
};

export function removeCartItem(cart, id) {
    return cart.filter(item => item.id !== id)
};

export function resolvePromoDiscount(code) {
    if (!code) {
        return 0;
    }
    if (code === VALID_PROMO_CODE) {
        return DISCOUNT_RATE;
    } else {
        return 0;
    }
};

export function calculateOrderSummary(CartProducts, promoDiscount) {
    const priceSum = CartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

    const discountAmount = priceSum * promoDiscount;

    const delivery = priceSum > 0 ? DELIVERY_COST : 0;

    const total = priceSum - discountAmount + delivery;

    return {
        priceSum,
        discountAmount,
        delivery,
        total,
    }
};
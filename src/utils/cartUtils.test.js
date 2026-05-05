import { describe, test, expect, beforeEach } from 'vitest'
import {
    resolvePromoDiscount,
    calculateOrderSummary,
    addToCartItems,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeCartItem
} from './cartUtils'

describe('Promocode', () => {     // пробный тест
    test('if code === пустая строка', () => {
        expect(resolvePromoDiscount('')).toBe(0);
    });
    test('if code === ilovereact', () => {
        expect(resolvePromoDiscount('ilovereact')).toBe(0.1);
    });
    test('if code === неверный промокод', () => {
        expect(resolvePromoDiscount('fpfpfpf')).toBe(0);
    });
});

describe('calculates order summary correctly', () => {
    const mockProducts = [
        { id: 1, price: 100, quantity: 2 },
        { id: 2, price: 50, quantity: 1 },
    ];

    test('order summary with the correct promocode', () => {
        const discount = resolvePromoDiscount('ilovereact');
        const summary = calculateOrderSummary(mockProducts, discount);

        expect(summary.priceSum).toBe(250);
        expect(summary.discountAmount).toBe(25);
        expect(summary.delivery).toBe(15);
        expect(summary.total).toBe(240);
    });

    test('order summary with the incorrect promocode', () => {
        const discount = resolvePromoDiscount('wrong');
        const summary = calculateOrderSummary(mockProducts, discount);

        expect(summary.priceSum).toBe(250);
        expect(summary.discountAmount).toBe(0);
        expect(summary.delivery).toBe(15);
        expect(summary.total).toBe(265);
    });

    test('order summary without any promocode', () => {
        const discount = resolvePromoDiscount('');
        const summary = calculateOrderSummary(mockProducts, discount);

        expect(summary.priceSum).toBe(250);
        expect(summary.discountAmount).toBe(0);
        expect(summary.delivery).toBe(15);
        expect(summary.total).toBe(265);
    });
});

describe('adding items to cart', () => {
    const id1 = 1;
    const id2 = 2;
    test('add item to cart for the first time', () => {
        const cart = [];

        expect(addToCartItems(cart, id1)).toEqual([{ id: 1, quantity: 1 }]);
    });

    test('add item to cart twice', () => {
        const cart = [{ id: 1, quantity: 1 }];

        expect(addToCartItems(cart, id1)).toEqual([{ id: 1, quantity: 2 }]);
    });

    test('add new item to non-empty cart', () => {
        const cart = [{ id: 1, quantity: 2 }];

        expect(addToCartItems(cart, id2)).toEqual([{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }]);
    });

    test('increase quantity of existing item in cart', () => {
        const cart = [{ id: 1, quantity: 1 }];

        expect(increaseCartItemQuantity(cart, id1)).toEqual([{ id: 1, quantity: 2 }]);
    });
});

describe('removing items from cart', () => {
    let cart;

    beforeEach(() => {
        cart = [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 1 }
        ];
    });
    test('remove item from cart at all', () => {
        expect(removeCartItem(cart, 1)).toEqual([{ id: 2, quantity: 1 }]);
    });
    test('remove item from cart when quantity becomes 0', () => {
        expect(decreaseCartItemQuantity(cart, 2)).toEqual([{ id: 1, quantity: 2 }]);
    });

    test('decrease quantity of an item in cart', () => {
        expect(decreaseCartItemQuantity(cart, 1)).toEqual([{ id: 1, quantity: 1 }, { id: 2, quantity: 1 }]);
    });
});


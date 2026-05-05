import { render, screen, fireEvent, act, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import App from './App';

const expectToAppearBefore = (firstElement, secondElement) => {
    const position = firstElement.compareDocumentPosition(secondElement);

    expect(position & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();   // мы ожидаем, что первый элемент будет идти перед вторым в DOM
};

describe('App integration: showcase and cart', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('search input filters products on the showcase correctly', () => {
        vi.useFakeTimers();
        render(<App />);

        const searchInput = screen.getByPlaceholderText('Search');

        fireEvent.change(searchInput, { target: { value: 'shoulder' } });

        act(() => {
            vi.advanceTimersByTime(350);
        });

        expect(screen.getByText('Shoulder bag')).toBeInTheDocument();
        expect(screen.queryByText('Short shorts with straps')).not.toBeInTheDocument();
    });

    test('changing sorting updates product order on the showcase', () => {
        render(<App />);

        const sortSelect = screen.getByRole('combobox');
        fireEvent.change(sortSelect, { target: { value: 'PRICE_ASC' } });

        const shortsProduct = screen.getByText('Short shorts with straps');
        const blouseProduct = screen.getByText('Blouse with insert and ruffles');

        expectToAppearBefore(shortsProduct, blouseProduct);
    });

    test('adding a product updates cart counter and shows item in cart page', () => {
        render(<App />);

        const firstButtonBuy = screen.getAllByRole('button', { name: 'Buy' })[0];
        fireEvent.click(firstButtonBuy);

        const cartIcon = screen.getByAltText('Cart');
        expect(within(cartIcon.parentElement).getByText('1')).toBeInTheDocument();

        fireEvent.click(cartIcon);
        expect(screen.getByText('Textured turtleneck with zip')).toBeInTheDocument();
    });

    test('using a correct promocode changes the total price in the cart', () => {
        render(<App />);

        const firstButtonBuy = screen.getAllByRole('button', { name: 'Buy' })[0];
        fireEvent.click(firstButtonBuy);

        const cartIcon = screen.getByAltText('Cart');
        fireEvent.click(cartIcon);

        expect(screen.getByText('Textured turtleneck with zip')).toBeInTheDocument();

        const total = screen.getByTestId('total-sum');
        expect(total).toHaveTextContent('67.99');

        const promoInput = screen.getByPlaceholderText('Enter promo code');
        fireEvent.change(promoInput, { target: { value: 'ilovereact' } });

        const promoRow = promoInput.closest('div');
        const buttonPromo = within(promoRow).getByRole('button');

        fireEvent.click(buttonPromo);
        expect(total).toHaveTextContent('62.69');
    });
});
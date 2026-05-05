import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

// Базовая кнопка
export const Default = {
    args: {
        children: 'Click me',
    },
};

// Длинный текст
export const WithLongText = {
    args: {
        children: 'Very long button text example',
    },
};

// Кастомный класс кнопки
export const CustomClass = {
    args: {
        children: 'Custom style',
        buttonClassName: 'custom-button-class',
    },
};

// Кастомный wrapper
export const CustomWrapper = {
    args: {
        children: 'Wrapper modified',
        wrapperClassName: 'custom-wrapper-class',
    },
};
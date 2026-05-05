import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setCurrentValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setCurrentValue];
};

export default useLocalStorage
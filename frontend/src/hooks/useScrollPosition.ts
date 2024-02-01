import { useState, useEffect } from 'react';

const useScrollPosition = (): [number, number] => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const currentScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

            setScrollY(scrollTop);
            setScrollPercentage(currentScrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return [scrollY, scrollPercentage];
};

export default useScrollPosition;

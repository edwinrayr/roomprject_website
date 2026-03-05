import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Cada vez que 'pathname' cambie, forzamos el scroll al pixel 0,0
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Usamos 'instant' para evitar que el usuario vea cómo sube rápidamente
        });
    }, [pathname]);

    return null;
};
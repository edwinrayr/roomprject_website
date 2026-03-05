import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Preloader: React.FC = () => {
    const { pathname } = useLocation();

    // Estados para la animación
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Reiniciamos los estados cada que el usuario cambia de página
        setProgress(0);
        setIsLoaded(false);
        setIsVisible(true);

        // Simulador de carga con incrementos aleatorios para dar realismo
        let currentProgress = 0;
        const interval = setInterval(() => {
            // Sube entre 5% y 20% cada 50ms
            currentProgress += Math.floor(Math.random() * 15) + 5;

            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);

                // Pausa dramática en 100% antes de abrir el telón
                setTimeout(() => {
                    setIsLoaded(true);
                }, 400);

                // Esperamos a que la animación de los paneles termine para quitarlo del DOM
                setTimeout(() => {
                    setIsVisible(false);
                }, 2000); // 400ms pausa + 1600ms animación
            }
            setProgress(currentProgress);
        }, 50);

        return () => clearInterval(interval);
    }, [pathname]);

    // Si ya terminó toda la secuencia, no renderizamos nada
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none flex">

            {/* PANELES DE FONDO: Efecto de Apertura Entrelazada (Weaving Reveal) */}
            <div className={`w-1/3 h-full bg-ink origin-top transition-transform duration-[1200ms] ease-luxury ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}></div>

            {/* El panel central baja (translate-y-full) con un ligero retraso */}
            <div className={`w-1/3 h-full bg-ink origin-bottom transition-transform duration-[1200ms] ease-luxury delay-[150ms] ${isLoaded ? 'translate-y-full' : 'translate-y-0'}`}></div>

            {/* El tercer panel sube, con otro ligero retraso */}
            <div className={`w-1/3 h-full bg-ink origin-top transition-transform duration-[1200ms] ease-luxury delay-[300ms] ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}></div>

            {/* CONTENIDO SUPERPUESTO (Números y Textos) */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>

                {/* Etiqueta superior */}
                <div className="overflow-hidden mb-4">
                    <span className="block font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-gold animate-pulse">
                        {progress < 100 ? 'Preparing Space' : 'Welcome'}
                    </span>
                </div>

                {/* Contador Monumental (Tipografía Macro) */}
                <div className="flex items-start gap-2">
                    <span className="font-serif text-[clamp(5rem,20vw,15rem)] text-bg font-light leading-none tracking-tighter tabular-nums">
                        {progress}
                    </span>
                    <span className="font-sans text-xl md:text-3xl text-gold font-bold mt-4 md:mt-10">%</span>
                </div>

                {/* Firma flotante inferior */}
                <div className="absolute bottom-12 md:bottom-16 left-8 md:left-12 overflow-hidden">
                    <p className="font-serif italic text-bg/40 text-xl md:text-3xl font-light">
                        Project Room Bern.
                    </p>
                </div>

            </div>

            {/* Ruido visual muy sutil en el loader para darle textura de galería */}
            <div className={`absolute inset-0 opacity-[0.02] mix-blend-overlay transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-[0.02]'}`} style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        </div>
    );
};
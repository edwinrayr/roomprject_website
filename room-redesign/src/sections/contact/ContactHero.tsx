import React, { useEffect, useState } from 'react';

export const ContactHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Ligero retraso para activar la animación de entrada suavemente
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[50dvh] md:min-h-[65dvh] flex items-end justify-center bg-bg pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden transition-colors duration-500">

            {/* Detalle Arquitectónico: Líneas de cuadrícula sutiles en el fondo */}
            <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
                <div className="w-full max-w-7xl h-full border-x border-ink/[0.03] dark:border-ink/[0.08]"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-ink/[0.03] dark:bg-ink/[0.08]"></div>
            </div>

            <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">

                <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1000ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Get in Touch
                </span>

                <h1 className={`font-serif text-[clamp(3.8rem,9vw,8.5rem)] text-ink font-black tracking-tighter leading-[0.9] mb-12 transition-all duration-[1200ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    Let's discuss <br />
                    <span className="italic font-light opacity-90">your vision.</span>
                </h1>

                {/* Línea decorativa dinámica que invita a hacer scroll hacia la información */}
                <div className={`w-px h-16 md:h-24 bg-gradient-to-b from-ink/30 to-transparent transition-all duration-[1500ms] delay-700 ease-luxury origin-top transform ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

            </div>
        </section>
    );
};
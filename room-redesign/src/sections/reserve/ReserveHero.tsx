import React, { useEffect, useState } from 'react';

export const ReserveHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[60dvh] md:min-h-[70dvh] flex items-center justify-center bg-bg overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            
            {/* Imagen de fondo sutil */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/artistas.webp"  // Asegúrate de que esta ruta sea correcta
                    alt="Reserva tu fecha"
                    className="w-full h-full object-cover opacity-10 grayscale scale-105 transition-transform duration-[10s] ease-luxury hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
            </div>

            {/* Contenedor del texto (agregamos mt-8 para bajarlo un poco más visualmente) */}
            <div className="relative z-20 container-pr text-center flex flex-col items-center mt-8">
                
                <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Asegura tu Espacio
                </span>

                <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl text-ink font-black tracking-tight mb-8 transition-all duration-[1200ms] delay-300 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Reserva tu <br className="hidden md:block" />
                    <span className="italic font-light text-gold">Fecha.</span>
                </h1>
                
                <p className={`font-sans text-muted text-base md:text-lg max-w-2xl leading-relaxed transition-all duration-[1200ms] delay-500 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Celebra tu evento en un espacio único en Berna. Arte, cultura y creatividad en un solo lugar.
                </p>

            </div>
        </section>
    );
};
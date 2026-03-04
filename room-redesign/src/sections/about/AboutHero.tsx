import React, { useEffect, useState } from 'react';

export const AboutHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[60dvh] md:min-h-[70dvh] flex items-center justify-center bg-bg overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            {/* Agregamos mt-8 al contenedor interno para empujar el contenido visualmente */}
            <div className="container-pr text-center relative z-10 flex flex-col items-center mt-8">
                
                <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    El Concepto
                </span>

                <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl text-ink font-black tracking-tighter mb-8 leading-[0.9] transition-all duration-[1200ms] delay-300 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Donde Cada <br /> Evento se <br />
                    <span className="italic font-light opacity-90">Convierte en Arte.</span>
                </h1>

                {/* Línea decorativa */}
                <div className={`w-px h-16 bg-gold transition-all duration-[1500ms] delay-700 ease-luxury ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

            </div>
        </section>
    );
};
import React, { useEffect, useState } from 'react';

export const RulesHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[40dvh] md:h-[50dvh] flex items-center justify-center bg-ink overflow-hidden pt-20">
            
            {/* Fondo oscuro con imagen sutil que se difumina hacia el color 'bg' (claro) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/salon.png" 
                    alt="Project Room Bern Ambiente"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/90 to-bg z-10"></div>
            </div>

            <div className="relative z-20 container-pr text-center flex flex-col items-center">
                
                <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block transition-all duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Documento Oficial
                </span>

                <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-ink font-black tracking-tight mb-6 transition-all duration-[1200ms] delay-300 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Reglamento y <br className="hidden md:block" />
                    <span className="italic font-light text-gold">Normas del Espacio.</span>
                </h1>

            </div>
        </section>
    );
};
import React, { useEffect, useState } from 'react';

export const ContactHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[50dvh] md:h-[60dvh] flex items-center justify-center bg-ink overflow-hidden pt-20">
            {/* Fondo oscuro con textura sutil */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-ink"></div>
                {/* Gradiente radial para enfocar el centro */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
            </div>

            <div className="relative z-20 container-pr text-center flex flex-col items-center">
                <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Conexión
                </span>

                <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl text-bg font-black tracking-tight mb-8 transition-all duration-[1200ms] delay-300 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Hablemos sobre <br className="hidden md:block" />
                    <span className="italic font-light text-gold">tu evento.</span>
                </h1>
            </div>
        </section>
    );
};
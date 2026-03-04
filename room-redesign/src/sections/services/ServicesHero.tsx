import React, { useEffect, useState } from 'react';

export const ServicesHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[70dvh] md:h-[80dvh] flex items-center justify-center bg-ink overflow-hidden">
            
            {/* Fondo oscuro inmersivo (Puedes cambiar 'reunion.png' por 'espacio.png' si la tienes) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/reunion.png" 
                    alt="Project Room Bern Eventos"
                    className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[10s] ease-luxury hover:scale-100"
                />
                {/* El gradiente termina en 'bg' (claro) para fundirse perfecto con el Grid que va debajo */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-bg z-10"></div>
            </div>

            {/* Contenido (Textos copiados de tu HTML original) */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-16">
                
                <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block transition-all duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Exclusividad y Estilo
                </span>

                <h1 className={`font-serif text-4xl md:text-6xl lg:text-7xl text-white font-extrabold tracking-tight mb-8 transition-all duration-[1200ms] delay-300 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Servicios exclusivos <br className="hidden md:block" /> para tus eventos.
                </h1>

                <p className={`font-sans text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-10 transition-all duration-[1200ms] delay-500 ease-luxury ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    En <strong className="text-white">Project Room Bern</strong> ofrecemos espacios elegantes y versátiles para bodas, conferencias, exposiciones y celebraciones privadas. Cada detalle está diseñado para crear experiencias memorables con estilo y distinción.
                </p>

            </div>
        </section>
    );
};

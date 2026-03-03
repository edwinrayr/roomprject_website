import React, { useEffect, useState } from 'react';

export const ArtistsHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[90dvh] md:h-screen flex items-center justify-center bg-bg-2 overflow-hidden">
            
            {/* Elemento Decorativo: Líneas de Guía (Estética de Arquitecto) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute left-1/4 h-full w-[1px] bg-ink"></div>
                <div className="absolute left-2/4 h-full w-[1px] bg-ink"></div>
                <div className="absolute left-3/4 h-full w-[1px] bg-ink"></div>
            </div>

            <div className="container-pr relative z-10 flex flex-col items-center">
                
                {/* Título Principal Disrrumpido */}
                <div className="relative mb-12">
                    <h1 className="font-serif text-[clamp(4rem,15vw,12rem)] leading-[0.8] text-ink font-black flex flex-col items-center">
                        <span className={`transition-all duration-[1500ms] ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                            THE
                        </span>
                        <span className={`text-gold italic font-light transition-all duration-[1500ms] delay-300 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                            Artists
                        </span>
                        <span className={`transition-all duration-[1500ms] delay-500 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>
                            LAB
                        </span>
                    </h1>
                </div>

                {/* Composición de Imágenes Flotantes (Parallax sutil) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Imagen 1: Arriba Izquierda */}
                    <div className={`absolute top-[15%] left-[5%] w-32 md:w-56 aspect-square overflow-hidden transition-all duration-[2000ms] ease-luxury ${isVisible ? 'opacity-20 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                        <img src="/images/pinturas.png" className="w-full h-full object-cover grayscale" alt="texture" />
                    </div>
                    
                    {/* Imagen 2: Abajo Derecha */}
                    <div className={`absolute bottom-[15%] right-[5%] w-40 md:w-72 aspect-[3/4] overflow-hidden transition-all duration-[2000ms] delay-500 ease-luxury ${isVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <img src="/images/PinturaGrecia (7).jpg" className="w-full h-full object-cover" alt="texture" />
                    </div>
                </div>

                {/* Texto de Cierre y CTA */}
                <div className={`text-center max-w-lg transition-all duration-[1000ms] delay-800 ease-luxury ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-sans text-muted text-sm md:text-base tracking-[0.05em] leading-relaxed mb-8">
                        Un espacio donde la experimentación no tiene límites. <br />
                        Explora el portafolio de nuestros creadores residentes.
                    </p>
                    <div className="flex justify-center">
                        <div className="w-12 h-[1px] bg-gold animate-pulse"></div>
                    </div>
                </div>

            </div>

            {/* Marcador de Página Vertical (Derecha) */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase -rotate-90 origin-center whitespace-nowrap">
                    PRB — ARCHIVE 2026
                </span>
                <div className="w-[1px] h-32 bg-ink/10"></div>
            </div>

        </section>
    );
};

export default ArtistsHero;
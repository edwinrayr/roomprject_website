import React, { useEffect, useState } from 'react';

export const ArtistsHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[90dvh] flex items-center justify-center bg-bg overflow-hidden">
            
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Columna de Texto: Enfoque en la Autora */}
                <div className="lg:col-span-6 z-10">
                    <div className="overflow-hidden mb-6">
                        <span className={`block text-gold text-xs font-bold tracking-[0.4em] uppercase transition-transform duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                            The Eye Behind the Lens
                        </span>
                    </div>

                    <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] text-ink leading-[1.1] mb-8">
                        Grecia <br />
                        <span className={`italic font-light transition-all duration-[1200ms] delay-300 ease-luxury ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Portorreal</span>
                    </h1>

                    <div className={`max-w-md transition-all duration-[1000ms] delay-500 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="font-sans text-muted text-base md:text-lg leading-relaxed mb-8">
                            Fundadora y artista principal de Project Room Bern. Su obra captura la esencia de los momentos atemporales, transformando el espacio en un diálogo visual entre la luz y la forma.
                        </p>
                        
                        <div className="inline-block py-4 border-t border-gold/30">
                            <p className="text-[10px] uppercase tracking-widest text-ink font-bold italic">
                                All rights reserved — Featured Artist
                            </p>
                        </div>
                    </div>
                </div>

                {/* Columna de Imagen: Obra Original */}
                <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                    <div className={`relative w-full max-w-md aspect-[4/5] overflow-hidden transition-all duration-[1500ms] delay-200 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                        <img 
                            src="/images/PinturaGrecia (7).jpg" 
                            alt="Grecia Portorreal Artwork" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-luxury"
                        />
                        {/* Overlay sutil */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent"></div>
                    </div>
                    
                    {/* Firma o Detalle Decorativo */}
                    <div className={`absolute -bottom-4 right-0 lg:-right-8 bg-ink text-bg px-8 py-4 transition-all duration-1000 delay-800 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <p className="font-serif italic text-lg opacity-90">G. Portorreal</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ArtistsHero;
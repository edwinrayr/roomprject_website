import React, { useEffect, useState } from 'react';

export const AboutDetails: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // La lista exacta de tu archivo index.html original
    const listItems = [
        "Eventos empresariales y de marca",
        "Reuniones privadas o familiares",
        "Proyecciones y cine-foros",
        "Talleres y encuentros culturales"
    ];

    return (
        <section className="w-full py-24 md:py-32 bg-bg text-ink relative z-10 overflow-hidden">
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Columna Izquierda: Imagen del Espacio */}
                <div className="lg:col-span-6 relative">
                    <div className={`relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm transition-all duration-[1500ms] ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <img 
                            src="/images/PinturaGrecia (7).jpg" 
                            alt="Ambiente Project Room Bern" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-luxury"
                        />
                    </div>
                    {/* Elemento decorativo flotante */}
                    <div className={`absolute -bottom-8 -right-8 bg-ink text-bg p-8 hidden md:block transition-all duration-[1500ms] delay-500 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="font-serif text-3xl italic">Luz de Galería</p>
                    </div>
                </div>

                {/* Columna Derecha: Texto Original */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        The Concept
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                        Un Espacio <br className="hidden lg:block" /> <span className="italic font-light opacity-90">Único.</span>
                    </h2>
                    
                    {/* Texto calcado de tu HTML */}
                    <p className="font-sans text-muted text-base md:text-lg leading-relaxed mb-10">
                        <strong>Project Room Bern</strong> es una sala íntima y versátil para arte, cultura, proyecciones, talleres, celebraciones privadas y conferencias. Un espacio con <strong>luz de galería</strong>, estética cuidada y flexibilidad para crear <strong>experiencias únicas</strong>.
                    </p>

                    {/* Lista calcada de tu HTML */}
                    <div className="space-y-4 mb-12 border-t border-ink/10 pt-8">
                        {listItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <span className="w-8 h-[1px] bg-gold transition-all duration-500 ease-luxury group-hover:w-12"></span>
                                <p className="font-sans text-sm md:text-base tracking-wide text-ink transition-colors duration-300 group-hover:text-gold">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <a href="/services" className="btn-pr">
                            Ver Servicios
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};
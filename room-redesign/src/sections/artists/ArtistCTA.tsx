import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

export const ArtistCTA: React.FC = () => {
    // Estado y Referencia para la animación de entrada al hacer scroll
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 md:py-24 lg:py-32 bg-bg transition-colors duration-500 flex justify-center px-4 md:px-8"
        >
            {/* Contenedor tipo Tarjeta de Lujo, asimétrico para contrastar con el Hero */}
            <div className={`relative w-full max-w-[80rem] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>

                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh] md:min-h-[60vh] bg-bg-2">

                    {/* Mitad Izquierda: Contenido y Botones */}
                    <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24 z-20">
                        <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block transition-all duration-1000 delay-300 ease-luxury transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            Private Viewing
                        </span>

                        <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-ink leading-[1] font-extrabold mb-6 tracking-tight transition-all duration-1000 delay-500 ease-luxury transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            Step into the <br />
                            <span className="italic font-light">Studio.</span>
                        </h2>

                        <p className={`font-sans text-ink/70 text-sm md:text-base leading-relaxed mb-10 max-w-[40ch] transition-all duration-1000 delay-700 ease-luxury transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            Experience the creative process firsthand. Schedule a private viewing at Grecia Portorreal's studio in Biel, Switzerland, or request the exclusive portfolio of available works.
                        </p>

                        {/* Botones de Acción (Duales) */}
                        <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-900 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                            {/* Botón Principal: Agendar Visita */}
                            <a
                                href="#contact"
                                className="group flex items-center gap-3 bg-ink text-bg px-8 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
                            >
                                Book a Visit
                                <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* Botón Secundario: Descargar Portafolio */}
                            <a
                                href="#portfolio"
                                className="group flex items-center gap-3 border border-ink/20 text-ink px-8 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
                            >
                                Request Portfolio
                                <Download size={16} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
                            </a>

                        </div>
                    </div>

                    {/* Mitad Derecha: Fotografía de Atmósfera */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                        <img
                            src="/images/taller.webp"
                            alt="Grecia Portorreal Art Studio"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-95 hover:scale-105 hover:brightness-100 transition-all duration-[2s] ease-luxury"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
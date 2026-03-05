import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const About: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    
    // Estado y Referencia para el Intersection Observer (Animaciones al hacer scroll)
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Lista de enfoques traducida
    const focusItems = [
        t('home_about.list_1', 'Curated Contemporary Exhibitions'),
        t('home_about.list_2', 'Private Art Advisory & Acquisitions'),
        t('home_about.list_3', 'Cultural Events & Artist Workshops')
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full bg-bg text-ink py-24 md:py-32 lg:py-40 transition-colors duration-500 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Panel Izquierdo: Collage Editorial */}
                <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] flex items-center">

                    {/* Imagen Principal (Fondo) */}
                    <div
                        className={`relative z-10 w-[80%] md:w-[75%] aspect-[4/5] overflow-hidden transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <img
                            src="/images/acercahome.webp"
                            alt="Project Room Main Exhibition"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-[2s] ease-out"
                        />
                    </div>

                    {/* Imagen Secundaria (Flotante Superpuesta) */}
                    <div
                        className={`absolute bottom-0 md:-bottom-10 right-0 z-20 w-[55%] md:w-[50%] aspect-square overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-bg transition-all duration-[1.5s] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                            }`}
                    >
                        <img
                            src="/images/expo.webp"
                            alt="Project Room Art Details"
                            className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                        />
                    </div>
                </div>

                {/* Panel Derecho: Contenido y Lista Animada */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">

                    <div className={`transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className="text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                            {t('home_about.eyebrow', 'About the gallery')}
                        </span>

                        <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-extrabold mb-8 tracking-tight">
                            {t('home_about.title', 'Redefining the space between art & observer.')}
                        </h2>
                    </div>

                    <p className={`font-sans text-sm md:text-base leading-relaxed opacity-80 max-w-[52ch] mb-10 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('home_about.description', 'Project Room is more than an exhibition space; it is an architectural canvas dedicated to contemporary masterpieces. We curate immersive environments that challenge perception and elevate the dialogue between the artwork and its environment.')}
                    </p>

                    {/* Lista de enfoques */}
                    <ul className="flex flex-col gap-4 mb-12 max-w-[48ch]">
                        {focusItems.map((item, index) => (
                            <li
                                key={index}
                                className={`pb-4 border-b border-ink/10 text-sm md:text-base font-medium flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${400 + (index * 150)}ms` }}
                            >
                                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold"></span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Botón final animado */}
                    <div className={`transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <a
                            href="/artists"
                            className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-ink group"
                        >
                            {t('home_about.cta', 'Discover our artists')}
                            <span className="relative overflow-hidden w-8 h-[1px] bg-ink/30 group-hover:bg-gold transition-colors block ml-2">
                                <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            </span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};
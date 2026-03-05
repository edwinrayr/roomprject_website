import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const AboutDetails: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    
    // Estado y Referencia para la animación al hacer scroll
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Lista traducida dinámicamente
    const listItems = [
        t('about_details.list.corporate', 'Corporate & brand events'),
        t('about_details.list.private', 'Private & family gatherings'),
        t('about_details.list.screenings', 'Screenings & film forums'),
        t('about_details.list.workshops', 'Workshops & cultural meetings')
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 md:py-32 bg-bg text-ink relative z-10 overflow-hidden transition-colors duration-500"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                {/* Columna Izquierda: Imagen del Espacio */}
                <div className={`lg:col-span-6 relative transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                    <div className="relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                        <img
                            src="/images/taller.webp"
                            alt="Project Room Bern Ambiance"
                            className="w-full h-full object-cover filter brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-[2s] ease-luxury"
                        />
                    </div>
                    {/* Elemento decorativo flotante traducido */}
                    <div className={`absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-ink text-bg px-8 py-5 shadow-2xl hidden sm:block transition-all duration-[1500ms] delay-500 ease-luxury transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <p className="font-serif text-2xl md:text-3xl italic">
                            {t('about_details.image_caption', 'Gallery Lighting')}
                        </p>
                    </div>
                </div>

                {/* Columna Derecha: Texto y Lista */}
                <div className="lg:col-span-6 flex flex-col justify-center mt-8 lg:mt-0 text-center lg:text-left">
                    <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('about_details.concept', 'The Concept')}
                    </span>

                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight mb-8 transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('about_details.title_1', 'A Truly')} <br className="hidden lg:block" />
                        <span className="italic font-light opacity-90">{t('about_details.title_2', 'Unique Space.')}</span>
                    </h2>

                    {/* Texto adaptado para respetar las etiquetas strong */}
                    <p className={`font-sans text-ink/75 text-base md:text-lg leading-relaxed max-w-[45ch] mx-auto lg:mx-0 mb-10 transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <strong>Project Room Bern</strong> {t('about_details.desc_1', 'is an intimate and versatile room dedicated to art, culture, screenings, workshops, private celebrations, and conferences. A space featuring')} <strong>{t('about_details.gallery_lighting', 'gallery lighting')}</strong>{t('about_details.desc_2', ', meticulous aesthetics, and the flexibility to create')} <strong>{t('about_details.unique_experiences', 'unique experiences')}</strong>.
                    </p>

                    {/* Lista interactiva */}
                    <div className={`flex flex-col gap-5 mb-12 border-t border-ink/10 pt-8 transition-all duration-1000 delay-800 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {listItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-center lg:justify-start gap-4 group cursor-default">
                                <span className="w-8 h-[1px] bg-gold transition-all duration-500 ease-luxury group-hover:w-16"></span>
                                <p className="font-sans text-sm md:text-base tracking-wide text-ink/80 transition-colors duration-300 group-hover:text-gold font-medium">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Botón de navegación interna */}
                    <div className={`transition-all duration-1000 delay-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <Link
                            to="/services"
                            className="inline-block px-8 py-3.5 border border-ink rounded-full font-bold text-xs tracking-widest uppercase hover:bg-ink hover:text-bg transition-all duration-300"
                        >
                            {t('about_details.view_services', 'View Services')}
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
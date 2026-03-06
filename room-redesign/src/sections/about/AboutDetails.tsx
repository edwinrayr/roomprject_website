import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AboutDetails: React.FC = () => {
    const { t } = useTranslation();
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const listItems = [
        t('about_details.list.corporate', 'Corporate & brand events'),
        t('about_details.list.private', 'Private & family gatherings'),
        t('about_details.list.screenings', 'Screenings & film forums'),
        t('about_details.list.workshops', 'Workshops & cultural meetings')
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-12 md:py-20 bg-bg text-ink relative z-10 overflow-hidden transition-all duration-700"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                {/* COLUMNA DE CONTENIDO */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    
                    {/* 1. Eyebrow */}
                    <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        {t('about_details.concept', 'The Concept')}
                    </span>

                    {/* 2. Título */}
                    <h2 className={`font-serif text-[clamp(2.3rem,6vw,4rem)] leading-[1.1] font-extrabold tracking-tighter mb-8 transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('about_details.title_1', 'A Truly')} <br className="hidden lg:block" />
                        <span className="italic font-light text-gold/80">{t('about_details.title_2', 'Unique Space.')}</span>
                    </h2>

                    {/* 3. IMAGEN (MÓVIL) */}
                    <div className={`lg:hidden w-full flex justify-center mb-10 transition-all duration-[1500ms] delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                        <div className="relative w-full max-w-[18rem] aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                            <img
                                src="/images/jardin.webp"
                                alt="Project Room Bern Ambiance"
                                className="w-full h-full object-cover filter brightness-95"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-ink text-bg px-4 py-2 text-[10px] italic font-serif shadow-xl">
                                {t('about_details.image_caption', 'Gallery Lighting')}
                            </div>
                        </div>
                    </div>

                    {/* 4. Descripción */}
                    <div className={`transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="font-sans text-ink/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-[45ch] mb-10">
                            <strong>Project Room Bern</strong> {t('about_details.desc_1', 'is an intimate and versatile room...')} <strong>{t('about_details.gallery_lighting', 'gallery lighting')}</strong>{t('about_details.desc_2', ', meticulous aesthetics...')} <strong>{t('about_details.unique_experiences', 'unique experiences')}</strong>.
                        </p>
                    </div>

                    {/* 5. Lista interactiva: Línea superior eliminada en móvil (border-t-0) */}
                    <div className={`flex flex-col gap-4 mb-10 w-full border-ink/5 lg:border-t lg:pt-8 border-t-0 pt-0 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {listItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-center lg:justify-start gap-3 group cursor-default">
                                {/* RAYA DORADA: Oculta en móvil (hidden) y visible en escritorio (lg:block) */}
                                <span className="hidden lg:block w-6 h-[1px] bg-gold/50 transition-all duration-500 group-hover:w-10 group-hover:bg-gold"></span>
                                
                                <p className="font-sans text-xs md:text-sm tracking-widest text-ink/50 transition-colors duration-300 group-hover:text-gold uppercase font-bold">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 6. Botón */}
                    <div className={`transition-all duration-1000 delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        <Link
                            to="/services"
                            className="inline-block px-10 py-3.5 border border-ink/10 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-ink hover:text-bg transition-all duration-500 shadow-sm"
                        >
                            {t('about_details.view_services', 'View Services')}
                        </Link>
                    </div>
                </div>

                {/* COLUMNA DE IMAGEN (ESCRITORIO) */}
                <div className={`hidden lg:block lg:col-span-6 relative transition-all duration-[1500ms] ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src="/images/jardin.webp"
                            alt="Project Room Bern Ambiance"
                            className="w-full h-full object-cover filter brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-[2s]"
                        />
                    </div>
                    <div className={`absolute -bottom-6 -right-6 bg-ink text-bg px-8 py-5 shadow-2xl transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="font-serif text-2xl italic">
                            {t('about_details.image_caption', 'Gallery Lighting')}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
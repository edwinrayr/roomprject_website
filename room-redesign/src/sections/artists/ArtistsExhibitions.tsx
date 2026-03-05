import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Exhibitions: React.FC = () => {
    const { t } = useTranslation();
    // Estado y Referencia para animar al hacer scroll
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

    return (
        <section
            className="w-full py-24 md:py-32 bg-ink text-bg relative z-10 overflow-hidden"
            id="about-artist"
            ref={sectionRef}
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. SECCIÓN BIOGRÁFICA (Split Layout Animado) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 lg:mb-32 border-b border-bg/20 pb-16 lg:pb-24">

                    {/* Columna Izquierda: Títulos */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className={`transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                                {t('artist.subtitle', 'Artist & Founder')}
                            </span>
                            <h2 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tight mb-6 leading-[0.95]">
                                {t('artist.name_1', 'Grecia')} <br className="hidden lg:block" /> {t('artist.name_2', 'Portorreal')}
                            </h2>
                            <p className="font-serif italic text-xl md:text-2xl text-gold opacity-90">
                                "{t('artist.motto', 'Where Every Event Becomes Art')}"
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha: Biografía Editorial */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 font-sans text-bg/80 text-base md:text-lg leading-relaxed font-light">
                        <div className={`transition-all duration-1000 delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            {/* Párrafo inicial destacado (Lead paragraph) */}
                            <p className="text-xl md:text-2xl font-serif text-bg mb-6 leading-snug">
                                <strong>Grecia Portorreal</strong> {t('artist.bio_lead', 'is originally from the Dominican Republic. Born in Santo Domingo, she studied advertising arts at the Universidad Autónoma de Santo Domingo and fine arts and illustration at the prestigious Altos de Chavón School of Design.')}
                            </p>
                            <p className="mb-4">
                                {t('artist.bio_p1', 'Affiliated with the Parsons School of Design in New York, she graduated Cum Laude. Simultaneously, she dedicated 5 years to studying fine arts at the National School of Visual Arts in Santo Domingo.')}
                            </p>
                            <p className="mb-4">
                                {t('artist.bio_p2', 'Driven by a deep appreciation for history and technique, she later relocated to Spain and Italy, where she specialized in the conservation and restoration of cultural heritage.')}
                            </p>
                            <p className="mb-4">
                                {t('artist.bio_p3', 'Her work has been exhibited internationally across the Dominican Republic, New York, Spain, Italy, and Switzerland.')}
                            </p>
                            <div className="inline-block py-3 px-6 border border-bg/30 rounded-full">
                                <p className="text-white font-medium text-sm tracking-wide uppercase">
                                    {t('artist.current_location', 'Currently based in Biel, Switzerland.')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. GALERÍA DE OBRAS (Asimétrica y Escalonada) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* Obra 1 */}
                    <div className={`group relative aspect-[3/4] overflow-hidden rounded-sm transition-all duration-[1200ms] delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                        <img
                            src="/images/PinturaGrecia (7).webp"
                            alt="Grecia Portorreal Artwork 1"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>
                    </div>

                    {/* Obra 2 (Asimétrica - Desfasada hacia abajo) */}
                    <div className={`group relative aspect-[3/4] overflow-hidden rounded-sm md:mt-20 transition-all duration-[1200ms] delay-700 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                        <img
                            src="/images/arte.webp"
                            alt="Grecia Portorreal Artwork 2"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>
                    </div>

                    {/* Obra 3 (Punto intermedio) */}
                    <div className={`group relative aspect-[3/4] overflow-hidden rounded-sm lg:mt-10 transition-all duration-[1200ms] delay-900 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                        <img
                            src="/images/chicas.webp"
                            alt="Grecia Portorreal Studio Space"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-110 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>
                    </div>
                </div>

                {/* 3. AVISO LEGAL DE DERECHOS DE AUTOR */}
                <div className={`mt-24 text-center border-t border-bg/20 pt-16 transition-all duration-1000 delay-1000 ease-luxury ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-sans text-[10px] md:text-xs text-bg/40 uppercase tracking-[0.2em] leading-loose max-w-2xl mx-auto">
                        {t('artist.copyright_1', 'All published images are protected by copyright and belong to Grecia Portorreal.')} <br className="hidden md:block" />
                        {t('artist.copyright_2', 'Reproduction, distribution, or use without written authorization is strictly prohibited.')}
                    </p>
                </div>

            </div>
        </section>
    );
};
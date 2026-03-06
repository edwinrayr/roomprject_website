import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Exhibitions: React.FC = () => {
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

    return (
        <section
            id="about-artist"
            ref={sectionRef}
            /* OPTIMIZACIÓN: py-12 en móvil, py-20 en desktop para reducir aire */
            className="w-full py-12 md:py-20 bg-ink text-bg relative z-10 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. SECCIÓN BIOGRÁFICA: Espacios reducidos y centrado móvil */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 lg:mb-20 border-b border-bg/10 pb-12 lg:pb-16">

                    {/* Columna Izquierda: Títulos Centrados en móvil */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <div className={`transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 block">
                                {t('artist.subtitle', 'Artist & Founder')}
                            </span>
                            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tighter mb-4 leading-[0.95]">
                                {t('artist.name_1', 'Grecia')} <br className="hidden lg:block" /> {t('artist.name_2', 'Portorreal')}
                            </h2>
                            <p className="font-serif italic text-lg md:text-xl text-gold/80">
                                "{t('artist.motto', 'Where Every Event Becomes Art')}"
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha: Texto Centrado en móvil */}
                    <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 font-sans text-bg/70 text-sm md:text-base leading-relaxed font-light">
                        <div className={`transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className="text-lg md:text-xl font-serif text-bg mb-4 leading-snug">
                                <strong className="text-gold/90 font-bold">Grecia Portorreal</strong> {t('artist.bio_lead', 'is originally from the Dominican Republic...')}
                            </p>
                            <p>{t('artist.bio_p1', 'Affiliated with the Parsons School of Design...')}</p>
                            <p>{t('artist.bio_p2', 'Driven by a deep appreciation for history...')}</p>
                            
                            <div className="inline-block mt-6 py-2 px-5 border border-bg/20 rounded-full">
                                <p className="text-bg font-medium text-[10px] tracking-widest uppercase">
                                    {t('artist.current_location', 'Currently based in Biel, Switzerland.')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. GALERÍA DE OBRAS: Espacios compactos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-center justify-items-center">

                    {/* Obra 1 */}
                    <div className={`group relative w-full max-w-[320px] md:max-w-none aspect-[3/4] overflow-hidden rounded-sm transition-all duration-[1500ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <img src="/images/PinturaGrecia (7).webp" alt="Artwork 1" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Obra 2: Desfase reducido en desktop, centrado en móvil */}
                    <div className={`group relative w-full max-w-[320px] md:max-w-none aspect-[3/4] overflow-hidden rounded-sm md:mt-12 transition-all duration-[1500ms] delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <img src="/images/arte.webp" alt="Artwork 2" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Obra 3 */}
                    <div className={`group relative w-full max-w-[320px] md:max-w-none aspect-[3/4] overflow-hidden rounded-sm lg:mt-6 transition-all duration-[1500ms] delay-800 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <img src="/images/chicas.webp" alt="Studio Space" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </div>

                {/* 3. AVISO LEGAL: Compactado */}
                <div className={`mt-16 md:mt-24 text-center border-t border-bg/10 pt-10 transition-all duration-[1000ms] delay-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-sans text-[9px] md:text-[10px] text-bg/30 uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto px-4">
                        {t('artist.copyright_1', 'All images protected by copyright.')} <br />
                        {t('artist.copyright_2', 'Use without authorization is prohibited.')}
                    </p>
                </div>

            </div>
        </section>
    );
};
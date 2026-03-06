import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ServicesHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[90dvh] flex items-center justify-center bg-bg pt-32 md:pt-40 lg:pt-32 pb-12 overflow-hidden transition-all duration-700">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* COLUMNA DE CONTENIDO */}
                    <div className="lg:col-span-6 xl:col-span-7 z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                        
                        {/* 1. Eyebrow */}
                        <div className="overflow-hidden mb-4">
                            <span className={`block text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transition-transform duration-[1200ms] ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                                {t('services_hero.eyebrow', 'Exclusivity & Style')}
                            </span>
                        </div>

                        {/* 2. Título */}
                        <h1 className={`font-serif text-[clamp(2.8rem,9vw,6.5rem)] text-ink leading-[0.9] font-extrabold tracking-tighter mb-6 transition-all duration-[1200ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            {t('services_hero.title_1', 'Curated Spaces')} <br className="hidden lg:block" />
                            <span className="italic font-light text-gold/80">{t('services_hero.title_2', 'for Events.')}</span>
                        </h1>

                        {/* 3. Descripción */}
                        <div className={`transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <p className="font-sans text-ink/70 text-sm md:text-base lg:text-lg max-w-[45ch] leading-relaxed mb-10">
                                <strong>Project Room Bern</strong> {t('services_hero.description', 'provides elegant and versatile environments for weddings, corporate conferences, and private celebrations. Meticulously designed for distinction.')}
                            </p>
                        </div>

                        {/* 4. IMAGEN (SÓLO MÓVIL): A color, arriba del texto de scroll */}
                        <div className={`lg:hidden w-full flex justify-center mb-10 transition-all duration-[1500ms] delay-400 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                            <div className="relative w-full max-w-[20rem] aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                                <img
                                    src="/images/serviceshome.webp"
                                    alt={t('services_hero.alt_main', 'Project Room Bern Events')}
                                    /* OPTIMIZACIÓN: Se eliminó 'grayscale' para mostrar color */
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* 5. TEXTO DE SCROLL (SÓLO MÓVIL): Sin la raya */}
                        <div className={`lg:hidden transition-all duration-1000 delay-600 ease-out transform ${isVisible ? 'opacity-40' : 'opacity-0'}`}>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-ink font-bold">
                                {t('services_hero.scroll_text', 'Descubre nuestros espacios')}
                            </span>
                        </div>

                        {/* 6. TEXTO DE SCROLL (SÓLO DESKTOP): Con la raya */}
                        <div className={`hidden lg:flex items-center gap-4 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                            <div className="h-[1px] w-12 bg-gold"></div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-bold">
                                {t('services_hero.scroll_text', 'Descubre nuestros espacios')}
                            </span>
                        </div>
                    </div>

                    {/* COLUMNA DE IMAGEN (SÓLO ESCRITORIO): A color */}
                    <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 z-10 relative justify-end">
                        <div className={`relative w-full max-w-md lg:max-w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl transition-all duration-[1800ms] delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-105'}`}>
                            <img
                                src="/images/serviceshome.webp"
                                alt={t('services_hero.alt_main', 'Project Room Bern Events')}
                                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
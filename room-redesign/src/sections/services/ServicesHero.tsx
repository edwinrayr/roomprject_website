import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const ServicesHero: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[100dvh] flex items-center bg-bg transition-colors duration-500 pt-24 md:pt-32 pb-16 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* COLUMNA IZQUIERDA: Textos Editoriales */}
                    <div className="lg:col-span-6 xl:col-span-7 z-20 flex flex-col justify-center text-center lg:text-left">
                        <span className={`text-gold text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {t('services_hero.eyebrow', 'Exclusivity & Style')}
                        </span>

                        <h1 className={`font-serif text-[clamp(3.5rem,7vw,7.5rem)] text-ink leading-[0.9] font-extrabold tracking-tight mb-8 transition-all duration-[1200ms] delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            {t('services_hero.title_1', 'Curated Spaces')} <br className="hidden lg:block" />
                            <span className="italic font-light">{t('services_hero.title_2', 'for Events.')}</span>
                        </h1>

                        <p className={`font-sans text-ink/70 text-base md:text-lg max-w-[45ch] mx-auto lg:mx-0 leading-relaxed mb-10 transition-all duration-[1200ms] delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <strong>Project Room Bern</strong> {t('services_hero.description', 'provides elegant and versatile environments for weddings, corporate conferences, exhibitions, and private celebrations. Every detail is meticulously designed to craft memorable experiences with distinction.')}
                        </p>

                        <div className={`flex items-center justify-center lg:justify-start gap-4 transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            <div className="h-[1px] w-12 bg-gold"></div>
                            <span className="text-[10px] uppercase tracking-widest text-ink/60 font-bold">
                                {t('services_hero.scroll_text', 'Discover our spaces')}
                            </span>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Composición de Imágenes */}
                    <div className="lg:col-span-6 xl:col-span-5 z-10 relative flex justify-center mt-8 lg:mt-0">

                        {/* Imagen Principal */}
                        <div className={`relative w-full max-w-md lg:max-w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl transition-all duration-[1500ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-105'}`}>
                            <img
                                src="/images/serviceshome.webp"
                                alt={t('services_hero.alt_main', 'Project Room Bern Events')}
                                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-[2s] ease-luxury"
                            />
                            <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                        </div>

                        {/* Imagen Secundaria Superpuesta */}
                        <div className={`absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 w-2/3 md:w-3/5 aspect-square border-[8px] md:border-[12px] border-bg overflow-hidden shadow-xl hidden sm:block transition-all duration-[1500ms] delay-700 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                            <img
                                src="/images/espacio.png"
                                alt={t('services_hero.alt_secondary', 'Event details')}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-luxury"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
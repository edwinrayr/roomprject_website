import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const AboutHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[75dvh] flex items-center justify-center bg-bg overflow-hidden pt-32 md:pt-40 pb-20 transition-all duration-700">

            {/* Resplandor sutil de fondo */}
            <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-gold/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">

                {/* 1. Eyebrow */}
                <div className="overflow-hidden mb-6">
                    <span className={`block text-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase transition-transform duration-[1200ms] ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        {t('about_hero.vision', 'The Vision')}
                    </span>
                </div>

                {/* 2. Título Monumental */}
                <h1 className={`font-serif text-[clamp(2.8rem,9vw,7rem)] text-ink font-black tracking-tighter mb-8 leading-[0.9] transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {t('about_hero.title_1', 'Where Every')} <br /> 
                    {t('about_hero.title_2', 'Event Becomes')} <br />
                    <span className="italic font-light text-gold/80">{t('about_hero.title_3', 'Art.')}</span>
                </h1>

                {/* 3. Descripción: Ajustado el mb para un cierre limpio */}
                <div className={`transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <p className="font-sans text-ink/60 text-sm md:text-lg max-w-[48ch] mx-auto leading-relaxed mb-0">
                        {t('about_hero.description', 'Discover the story, the space, and the philosophy behind Project Room Bern. An architectural canvas dedicated to redefining cultural and private gatherings.')}
                    </p>
                </div>

            </div>
        </section>
    );
};
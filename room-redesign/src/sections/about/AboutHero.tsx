import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const AboutHero: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Retraso de 100ms para evitar el salto visual
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[70dvh] md:min-h-[85dvh] flex items-center justify-center bg-bg overflow-hidden pt-32 md:pt-40 pb-16 transition-colors duration-500">

            {/* Elemento Decorativo: Resplandor sutil de fondo para dar volumen */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Contenedor centralizado con clases nativas de Tailwind */}
            <div className="container mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">

                <span className={`text-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-8 block transition-all duration-[1000ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {t('about_hero.vision', 'The Vision')}
                </span>

                <h1 className={`font-serif text-[clamp(4rem,10vw,9.5rem)] text-ink font-black tracking-tighter mb-8 leading-[0.85] transition-all duration-[1200ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    {t('about_hero.title_1', 'Where Every')} <br /> 
                    {t('about_hero.title_2', 'Event Becomes')} <br />
                    <span className="italic font-light opacity-90 text-gold">{t('about_hero.title_3', 'Art.')}</span>
                </h1>

                <p className={`font-sans text-ink/60 text-base md:text-lg max-w-[50ch] mx-auto leading-relaxed mb-16 transition-all duration-[1200ms] delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {t('about_hero.description', 'Discover the story, the space, and the philosophy behind Project Room Bern. An architectural canvas dedicated to redefining cultural and private gatherings.')}
                </p>

                {/* Línea decorativa dinámica que invita a hacer scroll */}
                <div className={`w-px h-24 md:h-32 bg-gradient-to-b from-ink/30 to-transparent transition-all duration-[1500ms] delay-700 ease-luxury origin-top transform ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

            </div>
        </section>
    );
};
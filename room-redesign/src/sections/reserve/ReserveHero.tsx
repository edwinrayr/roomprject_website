import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const ReserveHero: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[60dvh] md:min-h-[75dvh] flex items-center justify-center bg-bg overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24 transition-colors duration-500">

            {/* Imagen de fondo inmersiva */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/images/platica.webp"
                    alt="Project Room Bern Ambiance"
                    className="w-full h-full object-cover opacity-10 dark:opacity-5 grayscale scale-105 transition-transform duration-[10s] ease-luxury hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/30"></div>
            </div>

            <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-8">

                <span className={`text-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1000ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {t('reserve_hero.eyebrow', 'Secure Your Space')}
                </span>

                <h1 className={`font-serif text-[clamp(4rem,9vw,8.5rem)] text-ink font-black tracking-tighter leading-[0.9] mb-8 transition-all duration-[1200ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    {t('reserve_hero.title_1', 'Book Your')} <br className="hidden md:block" />
                    <span className="italic font-light text-gold">{t('reserve_hero.title_2', 'Date.')}</span>
                </h1>

                <p className={`font-sans text-ink/70 text-base md:text-lg max-w-[50ch] mx-auto leading-relaxed transition-all duration-[1200ms] delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {t('reserve_hero.description', "Host your event in Bern's most unique venue. Where art, culture, and creativity converge in a single, transformative space.")}
                </p>

                <div className={`mt-16 w-px h-24 bg-gradient-to-b from-ink/30 to-transparent transition-all duration-[1500ms] delay-700 ease-luxury origin-top transform ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

            </div>
        </section>
    );
};
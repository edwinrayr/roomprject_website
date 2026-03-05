import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const RulesHero: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Retraso ligero para el efecto de entrada sedoso
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[50dvh] md:min-h-[60dvh] flex items-end justify-center bg-bg pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden transition-colors duration-500">

            {/* Fondo con textura hiper-sutil */}
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none">
                <img
                    src="/images/proyector.webp"
                    alt="Project Room Bern Texture"
                    className="w-full h-full object-cover grayscale blur-sm"
                />
                <div className="absolute inset-0 bg-bg/80 backdrop-blur-3xl"></div>
            </div>

            {/* Contenedor Principal */}
            <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end border-b border-ink/10 pb-12">

                {/* Columna Izquierda: Títulos Monumentales */}
                <div className="lg:col-span-8 flex flex-col text-center lg:text-left">
                    <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1000ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {t('rules_hero.eyebrow', 'Official Guidelines')}
                    </span>

                    <h1 className={`font-serif text-[clamp(3.5rem,7vw,6.5rem)] text-ink font-extrabold tracking-tight leading-[0.95] transition-all duration-[1200ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        {t('rules_hero.title_1', 'Rules &')} <br className="hidden md:block" />
                        <span className="italic font-light opacity-90">{t('rules_hero.title_2', 'Regulations.')}</span>
                    </h1>
                </div>

                {/* Columna Derecha: Párrafo de justificación */}
                <div className="lg:col-span-4 flex flex-col justify-end text-center lg:text-left">
                    <p className={`font-sans text-ink/70 text-sm md:text-base leading-relaxed max-w-[40ch] mx-auto lg:mx-0 transition-all duration-[1200ms] delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {t('rules_hero.description', 'To ensure a harmonious and respectful environment that preserves both the artwork and the experience, we kindly ask all guests and organizers to adhere to the following policies.')}
                    </p>
                </div>

            </div>
        </section>
    );
};
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ReserveHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[45dvh] md:min-h-[55dvh] flex items-center justify-center bg-bg pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden transition-all duration-700">

            {/* Resplandor sutil: Profundidad premium sin ruido visual */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gold/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">

                {/* 1. Eyebrow: Revelado corto con máscara (silk effect) */}
                <div className="overflow-hidden mb-6">
                    <span className={`block text-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase transition-transform duration-[1200ms] ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        {t('reserve_hero.eyebrow', 'Secure Your Space')}
                    </span>
                </div>

                {/* 2. Título Monumental: Desplazamiento de solo 8px (translate-y-2) */}
                <h1 className={`font-serif text-[clamp(2.8rem,9vw,7.5rem)] text-ink font-black tracking-tighter leading-[0.95] mb-8 transition-all duration-[1500ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    {t('reserve_hero.title_1', 'Book Your')} <br className="hidden md:block" />
                    <span className="italic font-light text-gold/80">{t('reserve_hero.title_2', 'Date.')}</span>
                </h1>

                {/* 3. Descripción Íntegra: Movimiento suave y pausado */}
                <div className={`transition-all duration-[1500ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    <p className="font-sans text-ink/60 text-sm md:text-base lg:text-lg max-w-[50ch] mx-auto leading-relaxed">
                        {t('reserve_hero.description', "Host your event in Bern's most unique venue. Where art, culture, and creativity converge in a single, transformative space.")}
                    </p>
                </div>

            </div>
        </section>
    );
};
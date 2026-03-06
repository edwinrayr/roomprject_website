import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const RulesHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[45dvh] md:min-h-[55dvh] flex items-end justify-center bg-bg pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden transition-all duration-700">

            {/* Resplandor sutil de fondo */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gold/5 rounded-full blur-[100px] pointer-events-none transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Contenedor Principal: Ahora usa Flex Column para centrado total */}
            <div className={`container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center lg:border-b border-b-0 border-ink/10 pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                {/* 1. Eyebrow */}
                <div className="overflow-hidden mb-6">
                    <span className={`block text-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase transition-transform duration-[1200ms] ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        {t('rules_hero.eyebrow', 'Official Guidelines')}
                    </span>
                </div>

                {/* 2. Título Monumental (Centrado) */}
                <h1 className={`font-serif text-[clamp(2.8rem,8vw,6.5rem)] text-ink font-extrabold tracking-tighter leading-[0.95] mb-8 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    {t('rules_hero.title_1', 'Rules &')} <br className="hidden md:block" />
                    <span className="italic font-light text-gold/80">{t('rules_hero.title_2', 'Regulations.')}</span>
                </h1>

                {/* 3. Descripción (Centrada con max-width controlado) */}
                <div className={`transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <p className="font-sans text-ink/60 text-sm md:text-base leading-relaxed max-w-[45ch] mx-auto">
                        {t('rules_hero.description', 'To ensure a harmonious environment that preserves the artwork and the experience, we ask all guests to adhere to the following policies.')}
                    </p>
                </div>

            </div>
        </section>
    );
};
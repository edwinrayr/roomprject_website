import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[65dvh] md:min-h-[75dvh] flex items-center justify-center bg-bg pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden transition-all duration-700">

            {/* Resplandor sutil de fondo */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gold/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">

                {/* 1. Eyebrow */}
                <div className="overflow-hidden mb-6">
                    <span className={`block text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transition-transform duration-[1200ms] ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        {t('contact_hero.eyebrow', 'Get in Touch')}
                    </span>
                </div>

                {/* 2. Título Monumental */}
                <h1 className={`font-serif text-[clamp(2.8rem,9vw,7.5rem)] text-ink font-black tracking-tighter leading-[0.95] mb-16 transition-all duration-[1500ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    {t('contact_hero.title_1', "Let's discuss")} <br />
                    <span className="italic font-light text-gold/80">{t('contact_hero.title_2', "your vision.")}</span>
                </h1>

                {/* 3. IMAGEN (PANORÁMICA): Optimizada a lo ancho */}
                <div className={`w-full max-w-xl md:max-w-3xl transition-all duration-[1800ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-[1.01]'}`}>
                    {/* Cambiado de aspect-[4/5] a aspect-[16/9] para mayor anchura */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src="/images/acercahome.webp"
                            alt={t('contact_hero.image_alt', 'Grecia Portorreal - Project Room Bern')}
                            className="w-full h-full object-cover filter grayscale transition-all duration-[3s] hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const Hero: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">

            {/* Imagen de Fondo a Pantalla Completa */}
            <div className="absolute inset-0 z-0 bg-ink">
                <img
                    src="/images/imagensalon1.webp"
                    alt="Project Room Gallery Space"
                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10s] ease-luxury hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/50 to-ink/30 z-10"></div>
            </div>

            {/* Contenedor del Texto Principal */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">

                <div className={`transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <span className="text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
                        {t('home_hero.eyebrow', 'The art of modern spaces')}
                    </span>

                    <h1 className="font-serif text-[clamp(4rem,10vw,8.5rem)] text-white leading-[0.9] font-extrabold mb-8 tracking-tighter drop-shadow-xl">
                        {t('home_hero.title_1', 'Curating')} <br />
                        <span className="italic font-light opacity-90">{t('home_hero.title_2', 'Vision.')}</span>
                    </h1>
                </div>

                <div className={`transition-all duration-[1500ms] delay-300 ease-luxury transform max-w-[60ch] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <p className="font-sans text-white/80 text-sm md:text-lg leading-relaxed mb-10 drop-shadow-md">
                        {t('home_hero.description', 'Explore an exclusive collection where contemporary art meets avant-garde design. An immersive visual experience curated for those who appreciate pure aesthetics.')}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a href="#exhibitions" className="group flex items-center gap-3 bg-white text-ink px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-500 ease-luxury shadow-lg">
                            {t('home_hero.cta_primary', 'Explore Collection')}
                        </a>
                        <a href="#about" className="text-sm font-semibold tracking-wide text-white hover:text-gold transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-gold drop-shadow-md">
                            {t('home_hero.cta_secondary', 'Our Story')}
                        </a>
                    </div>
                </div>
            </div>

            {/* Indicador de Scroll */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-[1500ms] delay-700 ease-luxury ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
                <span className="text-[10px] uppercase tracking-widest text-white mb-2 writing-vertical-rl">
                    {t('home_hero.scroll', 'Scroll')}
                </span>
                <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                    <div className="w-full h-1/2 bg-white absolute top-0 left-0 animate-bounce"></div>
                </div>
            </div>

        </section>
    );
};
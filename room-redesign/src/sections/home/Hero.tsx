import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-ink">

            {/* Imagen de Fondo: Zoom de entrada suave */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/IMG_2412.webp"
                    alt="Project Room Gallery Space"
                    className={`w-full h-full object-cover object-center transition-all duration-[3000ms] ease-out 
                    ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20 z-10"></div>
            </div>

            {/* Contenido Principal: Centrado absoluto en Mobile */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center h-full">

                {/* Título y Ceja */}
                <div className={`transition-all duration-[1200ms] ease-luxury transform 
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block drop-shadow-md">
                        {t('home_hero.eyebrow', 'The art of modern spaces')}
                    </span>

                    <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-white leading-[0.85] font-extrabold mb-6 tracking-tighter drop-shadow-xl">
                        {t('home_hero.title_1', 'Curating')} <br />
                        <span className="italic font-light text-white/90">{t('home_hero.title_2', 'Vision.')}</span>
                    </h1>
                </div>

                {/* Descripción y Botones: Segundo paso de la animación */}
                <div className={`transition-all duration-[1500ms] delay-300 ease-luxury transform max-w-[55ch] 
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    <p className="font-sans text-white/70 text-sm md:text-base lg:text-lg leading-relaxed mb-10 px-4 md:px-0">
                        {t('home_hero.description', 'Explore an exclusive collection where contemporary art meets avant-garde design. An immersive visual experience curated for those who appreciate pure aesthetics.')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                        <a href="/exhibitions" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-ink px-10 py-4 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-2xl">
                            {t('home_hero.cta_primary', 'Explore Collection')}
                        </a>
                        <a href="/about" className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-gold transition-all duration-500 underline underline-offset-8 decoration-white/20 hover:decoration-gold">
                            {t('home_hero.cta_secondary', 'Our Story')}
                        </a>
                    </div>
                </div>
            </div>

            {/* Indicador de Scroll: Animación minimalista */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-1000 delay-1000 
                ${isVisible ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
                    <div className="w-full h-full bg-white absolute top-0 left-0 animate-scroll-line"></div>
                </div>
            </div>

        </section>
    );
};
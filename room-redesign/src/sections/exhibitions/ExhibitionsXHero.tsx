import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ExhibitionsXHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        // Reducimos min-h de 70vh a 40vh y pb de 16 a 0
        <section className="relative w-full min-h-[40dvh] md:min-h-[50dvh] flex items-center justify-center bg-bg overflow-hidden pt-32 md:pt-40 pb-0 transition-colors duration-500">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className={`font-serif text-[30vw] text-ink/[0.02] font-black transition-all duration-[2000ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                    EX-X
                </span>
            </div>

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
                <span className={`text-gold text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {t('exhibitions_x.hero_eyebrow', 'Special Collection')}
                </span>

                <h1 className={`font-serif text-[clamp(4rem,10vw,9rem)] text-ink font-black tracking-tighter mb-4 leading-[0.8] transition-all duration-[1200ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    Exhibitions <span className="italic font-light text-gold"></span>
                </h1>

                {/* Reducimos mb-16 a mb-6 */}
                <p className={`font-sans text-ink/60 text-base md:text-lg max-w-[50ch] mx-auto leading-relaxed mb-6 transition-all duration-1200 delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {t('exhibitions_x.hero_description', 'A deep dive into the strokes and textures that define our creative pulse.')}
                </p>

                {/* Acortamos la línea decorativa de h-24 a h-10 */}
                <div className={`w-px h-10 bg-gradient-to-b from-gold/50 to-transparent transition-all duration-[1500ms] delay-700 ease-luxury origin-top transform ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
            </div>
        </section>
    );
};
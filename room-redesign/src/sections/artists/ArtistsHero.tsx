import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ArtistsHero: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[90dvh] flex items-center justify-center bg-bg pt-32 md:pt-40 lg:pt-32 pb-12 overflow-hidden transition-all duration-700">

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                {/* COLUMNA DE CONTENIDO: Centrado total en móvil */}
                <div className="lg:col-span-6 lg:col-start-1 z-20 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* 1. Eyebrow: Animación de subida suave */}
                    <div className="overflow-hidden mb-3">
                        <span className={`block text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transition-transform duration-[1200ms] ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                            {t('artist_hero.eyebrow', 'The Eye Behind the Lens')}
                        </span>
                    </div>

                    {/* 2. Título: Letras que aparecen desde abajo */}
                    <h1 className={`font-serif text-[clamp(2.8rem,9vw,5rem)] text-ink leading-[0.9] tracking-tighter mb-6 transition-all duration-[1200ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        {t('artist_hero.first_name', 'Grecia')} <br className="hidden lg:block" />
                        <span className="italic font-light text-gold/80">{t('artist_hero.last_name', 'Portorreal')}</span>
                    </h1>

                    {/* 3. Descripción */}
                    <div className={`transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        <p className="font-sans text-ink/70 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-[45ch]">
                            {t('artist_hero.description', 'Founder and principal artist of Project Room Bern. Her work captures the essence of timeless moments, transforming space into a visual dialogue between light and form.')}
                        </p>
                    </div>

                    {/* 4. FOTO (SÓLO MÓVIL): Arriba de los derechos reservados */}
                    <div className={`lg:hidden w-full flex justify-center mb-10 transition-all duration-[1500ms] delay-400 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                        <div className="relative w-full max-w-[18rem] aspect-[4/5] shadow-2xl">
                            <div className="w-full h-full overflow-hidden rounded-sm">
                                <img
                                    src="/images/PinturaGrecia (7).webp"
                                    alt="Grecia Portorreal Artwork"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-ink text-bg px-4 py-2 text-[10px] italic font-serif shadow-xl z-30">
                                G. Portorreal
                            </div>
                        </div>
                    </div>

                    {/* 5. Derechos Reservados: Cierre compacto */}
                    <div className={`w-full lg:w-auto py-4 border-t border-ink/10 transition-all duration-1000 delay-600 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-bold">
                            {t('artist_hero.rights', 'All rights reserved — Featured Artist')}
                        </p>
                    </div>
                </div>

                {/* COLUMNA DE IMAGEN (SÓLO ESCRITORIO) */}
                <div className="hidden lg:flex lg:col-span-5 lg:col-start-8 z-10 relative justify-end items-center">
                    <div className={`relative w-full max-w-[420px] transition-all duration-[1800ms] delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-[0.98]'}`}>
                        
                        <div className="relative aspect-[3.5/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-ink/5">
                            <img
                                src="/images/PinturaGrecia (7).webp"
                                alt="Grecia Portorreal Artwork"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-out hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                        </div>
                        
                        {/* Etiqueta flotante sin cortes */}
                        <div className={`absolute -bottom-6 -right-6 bg-ink text-bg px-8 py-5 shadow-2xl transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <p className="font-serif italic text-xl opacity-90 tracking-tight">G. Portorreal</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
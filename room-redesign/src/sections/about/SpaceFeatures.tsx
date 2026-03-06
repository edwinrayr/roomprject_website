import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const SpaceFeatures: React.FC = () => {
    const { t } = useTranslation();
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        { id: 1, title: t('space_features.cards.exhibition', "EXHIBITION AREA"), image: "/images/exposicion.png", alt: "Art exhibition area" },
        { id: 2, title: t('space_features.cards.audiovisual', "AUDIOVISUAL ZONE"), image: "/images/comida.webp", alt: "Audiovisual zone" },
        { id: 3, title: t('space_features.cards.scenic', "SCENIC ATMOSPHERE"), image: "/images/salon.webp", alt: "Scenic atmosphere" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    // Helper para renderizar las tarjetas de imágenes (evita repetición de código)
    const renderFeatureCards = (isMobile: boolean) => (
        <div className={`${isMobile ? 'lg:hidden mb-12' : 'hidden lg:grid'} grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full`}>
            {features.map((feature, index) => {
                const isHovered = hoveredId === feature.id;
                const isDimmed = hoveredId !== null && !isHovered;
                const translateY = !isMobile && index === 1 ? 'lg:translate-y-8' : !isMobile && index === 2 ? 'lg:-translate-y-4' : '';
                
                return (
                    <div 
                        key={feature.id} 
                        onMouseEnter={() => setHoveredId(feature.id)} 
                        onMouseLeave={() => setHoveredId(null)} 
                        className={`relative h-[280px] sm:h-[350px] lg:h-[500px] w-full transition-all duration-[1000ms] ease-out transform ${translateY} ${isHovered ? 'z-30 scale-[1.02]' : 'z-10'} ${isDimmed ? 'opacity-40 blur-[1px]' : 'opacity-100'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                        style={{ transitionDelay: isVisible ? `${index * 150 + 400}ms` : '0ms' }}
                    >
                        <div className="relative w-full h-full overflow-hidden rounded-sm bg-white/5 shadow-2xl">
                            <img 
                                src={feature.image} 
                                alt={feature.alt} 
                                className={`w-full h-full object-cover transition-transform duration-[3s] ease-out ${isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`} 
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                            <h3 className={`font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isHovered ? 'text-gold' : 'text-bg/80'}`}>
                                {feature.title}
                                <span className={`block h-[1px] bg-gold mt-2 transition-all duration-700 ${isHovered ? 'w-8' : 'w-0'}`}></span>
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <section ref={sectionRef} className="w-full py-12 md:py-20 bg-ink text-bg relative z-10 overflow-hidden" id="caracteristicas">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <line x1="33" y1="0" x2="33" y2="100" stroke="currentColor" strokeWidth="0.1" />
                    <line x1="66" y1="0" x2="66" y2="100" stroke="currentColor" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
                    
                    {/* COLUMNA DE CONTENIDO PRINCIPAL */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                        
                        {/* 1. TÍTULO Y EYEBROW (Aparece primero en móvil) */}
                        <div className="mb-10">
                            <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                                {t('space_features.collection', 'Technical Excellence')}
                            </span>
                            <h2 className={`font-serif text-[clamp(2.3rem,6vw,4.2rem)] leading-[1.05] font-extrabold tracking-tighter mb-4 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                {t('space_features.title_1', 'Equipped')} <br className="hidden lg:block" />
                                <span className="italic font-light text-gold/80">{t('space_features.title_2', 'Facilities.')}</span>
                            </h2>
                        </div>

                        {/* 2. IMÁGENES (SÓLO MÓVIL): Inyectadas entre título y descripción */}
                        {renderFeatureCards(true)}

                        {/* 3. DESCRIPCIÓN (Aparece después de las imágenes en móvil) */}
                        <div className={`font-sans text-bg/60 text-sm md:text-base leading-relaxed font-light max-w-[45ch] transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p>
                                {t('space_features.desc_1')} <strong className="text-white font-medium">{t('space_features.highlight_1')}</strong> {t('space_features.desc_2')} <strong className="text-white font-medium">{t('space_features.highlight_2')}</strong> {t('space_features.desc_3')}
                            </p>
                            <p className="mt-4">{t('space_features.desc_4')}</p>
                            <span className="text-gold/90 text-lg font-serif italic block mt-8">
                                {t('space_features.quote', 'Precision, technique, and comfort in one place.')}
                            </span>
                        </div>
                    </div>

                    {/* COLUMNA DE IMÁGENES (SÓLO ESCRITORIO): Posicionada a la izquierda */}
                    <div className="lg:col-span-7 lg:order-first">
                        {renderFeatureCards(false)}
                    </div>

                </div>
            </div>
        </section>
    );
};
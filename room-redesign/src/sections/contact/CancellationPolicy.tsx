import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CancellationPolicy: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section
            ref={sectionRef}
            /* OPTIMIZACIÓN: Raya eliminada en móvil (border-t-0), reducidos paddings */
            className="w-full py-12 md:py-20 bg-bg text-ink relative z-10 lg:border-t border-t-0 border-ink/10 transition-all duration-700 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                {/* COLUMNA DE CONTENIDO (Derecha en Desktop, Principal en Móvil) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">

                    {/* 1. Eyebrow y Título */}
                    <div className={`transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                            {t('cancellation.terms_label', 'Terms & Conditions')}
                        </span>
                        <h2 className="font-serif text-[clamp(2.3rem,5vw,4rem)] font-extrabold tracking-tighter mb-8 leading-[1.05]">
                            {t('cancellation.title_1', 'Cancellation')} <br className="hidden lg:block" />
                            <span className="italic font-light text-gold/80">{t('cancellation.title_2', 'Policy.')}</span>
                        </h2>
                    </div>

                    {/* 2. IMAGEN (SÓLO MÓVIL): Título -> Imagen -> Texto */}
                    <div className={`lg:hidden w-full mb-10 transition-all duration-[1500ms] delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'}`}>
                        <div className="relative w-full max-w-[18rem] aspect-[4/5] mx-auto overflow-hidden rounded-sm shadow-2xl">
                            <img
                                src="/images/PinturaGrecia (3).webp"
                                alt="Project Room Bern - Terms"
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </div>
                    </div>

                    {/* 3. Descripción Original */}
                    <p className={`font-sans text-ink/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-[50ch] mb-12 transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        {t('cancellation.description_1', 'At')} <strong className="font-medium text-ink">Project Room Bern</strong>, {t('cancellation.description_2', 'we value responsible planning and respect the time of our clients and team. Below are our cancellation policies applicable to all space reservations.')}
                    </p>

                    {/* 4. Reglas Detalladas (Sin líneas en móvil) */}
                    <div className="space-y-8 w-full">
                        
                        {/* Regla 1 */}
                        <div className={`lg:border-t border-t-0 border-ink/5 pt-0 lg:pt-8 transition-all duration-[1200ms] delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <h4 className="font-serif text-xl md:text-2xl font-bold mb-3 tracking-tight">
                                {t('cancellation.single_title', 'Single-Day Bookings')}
                            </h4>
                            <p className="font-sans text-sm md:text-base leading-relaxed font-light text-ink/70 max-w-[55ch] mx-auto lg:mx-0">
                                {t('cancellation.single_desc_1')} <strong>{t('cancellation.days_30')}</strong>, {t('cancellation.single_desc_2')} <strong className="text-ink font-medium">{t('cancellation.full_refund')}</strong> {t('cancellation.single_desc_3')} <strong className="text-ink font-medium">{t('cancellation.no_refund')}</strong> {t('cancellation.single_desc_4')}.
                            </p>
                        </div>

                        {/* Regla 2 */}
                        <div className={`lg:border-t border-t-0 border-ink/5 pt-0 lg:pt-8 transition-all duration-[1200ms] delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <h4 className="font-serif text-xl md:text-2xl font-bold mb-3 tracking-tight">
                                {t('cancellation.extended_title', 'Extended Bookings (15+ Days)')}
                            </h4>
                            <p className="font-sans text-sm md:text-base leading-relaxed font-light text-ink/70 max-w-[55ch] mx-auto lg:mx-0">
                                {t('cancellation.extended_desc_1')} <strong>{t('cancellation.months_2')}</strong>, {t('cancellation.extended_desc_2')} <strong className="text-ink font-medium">{t('cancellation.full_refund')}</strong> {t('cancellation.extended_desc_3')} <strong className="text-ink font-medium">{t('cancellation.refund_50')}</strong> {t('cancellation.extended_desc_4')}.
                            </p>
                        </div>

                        {/* Conclusión Original */}
                        <p className={`font-sans text-[10px] md:text-xs text-ink/40 uppercase tracking-[0.2em] font-bold pt-4 transition-all duration-[1200ms] delay-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            {t('cancellation.conclusion', 'These policies aim to ensure equitable and sustainable management for both our guests and the space administration.')}
                        </p>
                    </div>
                </div>

                {/* COLUMNA DE IMAGEN (ESCRITORIO): Izquierda */}
                <div className={`hidden lg:block lg:col-span-5 order-1 transition-all duration-[1800ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group">
                        <img
                            src="/images/PinturaGrecia (3).webp"
                            alt="Project Room Bern - Terms"
                            className="w-full h-full object-cover filter grayscale transition-all duration-[2.5s] group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const CancellationPolicy: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    
    // Estado y Referencia para la animación al hacer scroll
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
            { threshold: 0.15 } // Se activa cuando el 15% es visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 bg-bg text-ink relative z-10 border-t border-ink/10 transition-colors duration-500 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* COLUMNA IZQUIERDA: Imagen Conceptual */}
                <div className={`lg:col-span-5 relative group transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                    <div className="relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                        <img
                            src="/images/PinturaGrecia (3).jpg"
                            alt="Project Room Bern - Terms and Conditions"
                            className="w-full h-full object-cover filter grayscale transition-all duration-[2000ms] ease-luxury group-hover:scale-105 group-hover:grayscale-0"
                        />
                        {/* Velo para profundidad */}
                        <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: Políticas y Reglas */}
                <div className="lg:col-span-7 flex flex-col justify-center">

                    <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('cancellation.terms_label', 'Terms & Conditions')}
                    </span>

                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight mb-8 leading-[1.05] transition-all duration-1000 delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('cancellation.title_1', 'Cancellation')} <br className="hidden lg:block" />
                        <span className="italic font-light">{t('cancellation.title_2', 'Policy.')}</span>
                    </h2>

                    <p className={`font-sans text-ink/70 text-base md:text-lg leading-relaxed font-light mb-12 max-w-[50ch] transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('cancellation.description_1', 'At')} <strong className="font-medium text-ink">Project Room Bern</strong>, {t('cancellation.description_2', 'we value responsible planning and respect the time of our clients and team. Below are our cancellation policies applicable to all space reservations.')}
                    </p>

                    <div className="space-y-8">

                        {/* Regla 1 */}
                        <div className={`border-t border-ink/10 pt-8 transition-all duration-1000 delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h4 className="font-serif text-xl md:text-2xl font-bold mb-3">
                                {t('cancellation.single_title', 'Single-Day Bookings')}
                            </h4>
                            <p className="font-sans text-base leading-relaxed font-light text-ink/80 max-w-[55ch]">
                                {t('cancellation.single_desc_1', 'If canceled more than')} <strong>{t('cancellation.days_30', '30 days in advance')}</strong>, {t('cancellation.single_desc_2', 'a')} <strong className="font-medium text-ink">{t('cancellation.full_refund', 'full refund')}</strong> {t('cancellation.single_desc_3', 'is offered. If the cancellation occurs within the 30 days prior to the event,')} <strong className="font-medium text-ink">{t('cancellation.no_refund', 'no refund')}</strong> {t('cancellation.single_desc_4', 'will be issued.')}
                            </p>
                        </div>

                        {/* Regla 2 */}
                        <div className={`border-t border-ink/10 pt-8 border-b pb-8 transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h4 className="font-serif text-xl md:text-2xl font-bold mb-3">
                                {t('cancellation.extended_title', 'Extended Bookings (15+ Days)')}
                            </h4>
                            <p className="font-sans text-base leading-relaxed font-light text-ink/80 max-w-[55ch]">
                                {t('cancellation.extended_desc_1', 'If canceled more than')} <strong>{t('cancellation.months_2', '2 months in advance')}</strong>, {t('cancellation.extended_desc_2', 'a')} <strong className="font-medium text-ink">{t('cancellation.full_refund', 'full refund')}</strong> {t('cancellation.extended_desc_3', 'is offered. If the cancellation occurs within the 2 months prior, a')} <strong className="font-medium text-ink">{t('cancellation.refund_50', '50% refund')}</strong> {t('cancellation.extended_desc_4', 'is granted.')}
                            </p>
                        </div>

                        {/* Conclusión */}
                        <p className={`font-sans text-sm text-ink/50 leading-relaxed font-light italic max-w-[55ch] transition-all duration-1000 delay-700 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {t('cancellation.conclusion', 'These policies aim to ensure equitable and sustainable management for both our guests and the space administration.')}
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};
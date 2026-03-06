import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Clock, CalendarDays, ShieldCheck } from 'lucide-react';

export const ServicePackages: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            /* COMPACTACIÓN: py-12 en móvil, py-20 en desktop */
            className="w-full py-12 md:py-20 bg-bg text-ink relative overflow-hidden transition-colors duration-500"
        >
            <div className={`container mx-auto px-6 md:px-12 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* SECCIÓN 3: USOS DEL ESPACIO (Centrado en móvil) */}
                <div className="mb-16 md:mb-20 lg:mb-24">
                    <div className="max-w-3xl mb-12 text-center md:text-left mx-auto md:mx-0">
                        <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 block italic opacity-80">
                            {t('services_details.uses.eyebrow', 'Ideal for')}
                        </span>
                        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-none font-extrabold tracking-tighter mb-6">
                            {t('services_details.uses.title', 'A Canvas for Every Occasion.')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { img: '/images/culura.webp', key: 'workshops' },
                            { img: '/images/PinturaGrecia (7).webp', key: 'screenings' },
                            { img: '/images/baile.png', key: 'celebrations' }
                        ].map((item, i) => (
                            <div 
                                key={i} 
                                className={`group relative overflow-hidden aspect-[4/5] rounded-sm shadow-xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${200 + (i * 150)}ms` }}
                            >
                                <img 
                                    src={item.img} 
                                    alt="" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-out scale-100 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent flex items-end p-8 justify-center md:justify-start">
                                    <h3 className="text-white font-serif italic text-2xl tracking-tight group-hover:text-gold transition-colors duration-500">
                                        {t(`services_details.uses.items.${item.key}`)}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN 4: TARIFAS Y POLÍTICAS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
                    
                    {/* TARJETAS DE PRECIOS: Centrado total en móvil */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Tarifa Estándar */}
                        <div className="bg-ink p-10 text-bg rounded-sm border border-gold/20 flex flex-col items-center md:items-start text-center md:text-left h-full shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                            <Clock className="text-gold mb-6" size={32} />
                            <h3 className="font-serif text-2xl md:text-3xl mb-2">{t('services_details.pricing.standard.title')}</h3>
                            <div className="text-3xl md:text-4xl font-light mb-6">
                                <span className="text-gold font-bold">CHF 25</span>
                                <span className="text-base opacity-40"> / hr</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center md:items-start gap-3 text-sm opacity-70 italic">
                                    <Check size={14} className="text-gold shrink-0 mt-0.5" />
                                    {t('services_details.pricing.standard.min_hours')}
                                </li>
                                <li className="flex items-center md:items-start gap-3 text-sm opacity-70 italic">
                                    <Check size={14} className="text-gold shrink-0 mt-0.5" />
                                    {t('services_details.pricing.cleaning_note')}
                                </li>
                            </ul>
                        </div>

                        {/* Tarifa Larga Estancia */}
                        <div className="bg-bg p-10 border border-ink/5 rounded-sm flex flex-col items-center md:items-start text-center md:text-left h-full hover:border-gold/50 transition-all duration-500 shadow-lg">
                            <CalendarDays className="text-gold mb-6" size={32} />
                            <h3 className="font-serif text-2xl md:text-3xl mb-2">{t('services_details.pricing.long_term.title')}</h3>
                            <div className="text-3xl md:text-4xl font-light mb-6">
                                <span className="text-gold font-bold">CHF 100</span>
                                <span className="text-base text-ink/40"> / day</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow text-ink/70">
                                <li className="flex items-center md:items-start gap-3 text-sm italic">
                                    <Check size={14} className="text-gold shrink-0 mt-0.5" />
                                    {t('services_details.pricing.long_term.min_days')}
                                </li>
                                <li className="flex items-center md:items-start gap-3 text-sm italic">
                                    <Check size={14} className="text-gold shrink-0 mt-0.5" />
                                    {t('services_details.pricing.advanced_discount')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* POLÍTICAS: Borde superior en móvil, lateral en desktop */}
                    <div className="lg:col-span-5 bg-ink/[0.02] p-10 md:p-12 border-t lg:border-t-0 lg:border-l border-gold/20 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-gold" size={24} />
                            <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">{t('services_details.policies.title')}</h3>
                        </div>
                        
                        <div className="space-y-10 w-full">
                            <div>
                                <h4 className="font-bold text-[10px] tracking-[0.3em] uppercase text-gold mb-4">{t('services_details.policies.short.title')}</h4>
                                <ul className="space-y-3 text-sm text-ink/60 font-medium">
                                    <li>{t('services_details.policies.short.full')}</li>
                                    <li>{t('services_details.policies.short.none')}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[10px] tracking-[0.3em] uppercase text-gold mb-4">{t('services_details.policies.long.title')}</h4>
                                <ul className="space-y-3 text-sm text-ink/60 font-medium">
                                    <li>{t('services_details.policies.long.full')}</li>
                                    <li>{t('services_details.policies.long.partial')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
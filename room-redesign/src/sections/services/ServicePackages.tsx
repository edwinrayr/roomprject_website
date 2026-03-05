import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Clock, CalendarDays, Info, ShieldCheck } from 'lucide-react';

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
        <section ref={sectionRef} className="w-full py-24 bg-bg text-ink relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                
                {/* SECCIÓN 3: USOS DEL ESPACIO */}
                <div className="mb-32">
                    <div className="max-w-3xl mb-16">
                        <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block italic">
                            {t('services_details.uses.eyebrow', 'Ideal for')}
                        </span>
                        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none font-extrabold tracking-tight mb-8">
                            {t('services_details.uses.title', 'A Canvas for Every Occasion.')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { img: '/images/culura.webp', key: 'workshops' },
                            { img: '/images/PinturaGrecia (7).webp', key: 'screenings' },
                            { img: '/images/baile.png', key: 'celebrations' }
                        ].map((item, i) => (
                            <div key={i} className="group relative overflow-hidden aspect-[4/5] rounded-sm">
                                <img src={item.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-ink/40 flex items-end p-8">
                                    <h3 className="text-white font-serif italic text-2xl">{t(`services_details.uses.items.${item.key}`)}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN 4: TARIFAS Y POLÍTICAS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* TARJETAS DE PRECIOS */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tarifa Estándar */}
                        <div className="bg-ink p-10 text-bg rounded-sm border border-gold/20 flex flex-col h-full shadow-2xl">
                            <Clock className="text-gold mb-6" size={32} />
                            <h3 className="font-serif text-3xl mb-2">{t('services_details.pricing.standard.title')}</h3>
                            <div className="text-4xl font-light mb-6">
                                <span className="text-gold font-bold">CHF 25</span>
                                <span className="text-lg opacity-60"> / hr</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start gap-3 text-sm opacity-80 italic">
                                    <Check size={16} className="text-gold mt-1" />
                                    {t('services_details.pricing.standard.min_hours')}
                                </li>
                                <li className="flex items-start gap-3 text-sm opacity-80 italic">
                                    <Check size={16} className="text-gold mt-1" />
                                    {t('services_details.pricing.cleaning_note')}
                                </li>
                            </ul>
                        </div>

                        {/* Tarifa Larga Estancia */}
                        <div className="bg-bg p-10 border border-ink/10 rounded-sm flex flex-col h-full hover:border-gold transition-colors duration-500">
                            <CalendarDays className="text-gold mb-6" size={32} />
                            <h3 className="font-serif text-3xl mb-2">{t('services_details.pricing.long_term.title')}</h3>
                            <div className="text-4xl font-light mb-6">
                                <span className="text-gold font-bold">CHF 100</span>
                                <span className="text-lg text-ink/40"> / day</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start gap-3 text-sm text-ink/70 italic">
                                    <Check size={16} className="text-gold mt-1" />
                                    {t('services_details.pricing.long_term.min_days')}
                                </li>
                                <li className="flex items-start gap-3 text-sm text-ink/70 italic">
                                    <Check size={16} className="text-gold mt-1" />
                                    {t('services_details.pricing.advanced_discount')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* POLÍTICAS DE CANCELACIÓN */}
                    <div className="lg:col-span-5 bg-ink/[0.02] p-12 border-l border-gold/30">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-gold" size={24} />
                            <h3 className="font-serif text-2xl font-bold uppercase tracking-widest">{t('services_details.policies.title')}</h3>
                        </div>
                        
                        <div className="space-y-10">
                            <div>
                                <h4 className="font-bold text-xs tracking-widest uppercase text-gold mb-4">{t('services_details.policies.short.title')}</h4>
                                <ul className="space-y-3 text-sm text-ink/70">
                                    <li>{t('services_details.policies.short.full')}</li>
                                    <li>{t('services_details.policies.short.none')}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs tracking-widest uppercase text-gold mb-4">{t('services_details.policies.long.title')}</h4>
                                <ul className="space-y-3 text-sm text-ink/70">
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
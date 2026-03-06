import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const EventCTA: React.FC = () => {
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
            className="w-full py-12 md:py-20 bg-ink text-bg relative z-10 overflow-visible mb-12 md:mb-0 transition-all duration-700"
        >
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* COLUMNA DE CONTENIDO (Cubre todo en móvil, 7 cols en desktop) */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        
                        {/* 1. Eyebrow */}
                        <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            {t('event_cta.eyebrow')}
                        </span>

                        {/* 2. Título */}
                        <h2 className={`font-serif text-[clamp(2.2rem,6vw,4.5rem)] leading-[1] font-extrabold tracking-tighter mb-6 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {t('event_cta.title_1')} <br className="hidden lg:block" />
                            <span className="italic font-light text-gold/90">{t('event_cta.title_2')}</span>
                        </h2>

                        {/* 3. Descripción */}
                        <p className={`font-sans text-bg/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-[45ch] mb-8 transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            {t('event_cta.description')}
                        </p>

                        {/* 4. IMAGEN (SÓLO MÓVIL): Aparece después de la descripción y antes de los botones */}
                        <div className={`lg:hidden w-full flex justify-center mb-10 transition-all duration-[1500ms] delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                            <div className="relative w-full max-w-[18rem] aspect-[4/5] rounded-sm shadow-2xl overflow-hidden">
                                <img
                                    src="/images/cine.webp"
                                    alt="Event Planning"
                                    className="w-full h-full object-cover brightness-75"
                                />
                                {/* Badge de reservas dentro de la imagen en móvil para ahorrar espacio */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                    <div className="bg-bg/90 backdrop-blur-sm text-ink px-4 py-2 shadow-xl flex items-center gap-2 rounded-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
                                        <span className="font-serif italic font-bold text-[10px] whitespace-nowrap">
                                            {t('event_cta.badge')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Botones */}
                        <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            <a
                                href="/reserve"
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-bg text-ink px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-xl"
                            >
                                <Calendar size={16} strokeWidth={2} />
                                {t('event_cta.schedule_btn')}
                            </a>

                            <a
                                href="mailto:greportorreal@gmail.com"
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 border border-bg/10 text-bg px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-500"
                            >
                                <Mail size={16} strokeWidth={2} />
                                {t('event_cta.email_btn')}
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA DE IMAGEN (SÓLO ESCRITORIO): Oculta en móvil */}
                    <div className="hidden lg:flex lg:col-span-5 relative justify-end">
                        <div className={`absolute top-6 -left-6 w-3/4 aspect-[4/5] bg-gold/5 rounded-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

                        <div className={`relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-sm shadow-2xl transition-all duration-[1500ms] delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <img
                                src="/images/cine.webp"
                                alt="Event Planning"
                                className="w-full h-full object-cover brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-[2s]"
                            />
                        </div>

                        {/* Etiqueta flotante lateral en Escritorio */}
                        <div className={`absolute bottom-10 -left-10 bg-bg text-ink px-5 py-3 shadow-2xl flex items-center gap-3 transition-all duration-1000 delay-800 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0"></div>
                            <span className="font-serif italic font-bold text-sm tracking-tight">
                                {t('event_cta.badge')}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Ruido de fondo */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </section>
    );
};
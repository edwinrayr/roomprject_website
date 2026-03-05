import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const EventCTA: React.FC = () => {
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
            { threshold: 0.2 }
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
            className="w-full py-24 md:py-32 bg-ink text-bg relative z-10 overflow-hidden transition-colors duration-500"
        >
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* COLUMNA IZQUIERDA: Tipografía Monumental y Textos */}
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {t('event_cta.eyebrow', 'Tailored Experiences')}
                        </span>

                        <h2 className={`font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1] font-extrabold tracking-tight mb-8 transition-all duration-[1200ms] delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            {t('event_cta.title_1', "Let's bring your")} <br className="hidden lg:block" />
                            <span className="italic font-light opacity-90">{t('event_cta.title_2', "vision to life.")}</span>
                        </h2>

                        <p className={`font-sans text-bg/70 text-base md:text-lg leading-relaxed max-w-[45ch] mx-auto lg:mx-0 mb-12 transition-all duration-[1200ms] delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            {t('event_cta.description', 'Whether you are planning an intimate gathering or a large-scale corporate event, our dedicated team will work closely with you to customize every architectural and logistical detail.')}
                        </p>

                        {/* Botones de Acción */}
                        <div className={`flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                            <a
                                href="#reserve"
                                className="group flex items-center gap-3 bg-bg text-ink px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                <Calendar size={18} strokeWidth={1.5} />
                                {t('event_cta.schedule_btn', 'Schedule a Tour')}
                            </a>

                            <a
                                href="mailto:greportorreal@gmail.com"
                                className="group flex items-center gap-3 border border-bg/30 text-bg px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                <Mail size={18} strokeWidth={1.5} />
                                {t('event_cta.email_btn', 'Email our Team')}
                            </a>

                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Imagen Inmersiva y Decoración */}
                    <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className={`absolute top-4 -left-4 md:top-8 md:-left-8 w-3/4 aspect-[4/5] bg-gold/10 rounded-sm transition-all duration-[1500ms] delay-300 ease-luxury transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}></div>

                        <div className={`relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-sm shadow-2xl transition-all duration-[1500ms] delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-105'}`}>
                            <img
                                src="/images/cine.webp"
                                alt="Event Planning at Project Room"
                                className="w-full h-full object-cover filter brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-[2s] ease-luxury"
                            />
                            <div className="absolute inset-0 bg-ink/10 mix-blend-overlay pointer-events-none"></div>
                        </div>

                        {/* Etiqueta flotante */}
                        <div className={`absolute bottom-8 -left-6 md:bottom-12 md:-left-12 bg-bg text-ink px-6 py-4 shadow-xl flex items-center gap-4 transition-all duration-1000 delay-900 ease-luxury transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                            <span className="font-serif italic font-bold text-sm md:text-base">
                                {t('event_cta.badge', 'Now accepting 2026 bookings')}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Ruido/Textura de fondo sutil */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </section>
    );
};
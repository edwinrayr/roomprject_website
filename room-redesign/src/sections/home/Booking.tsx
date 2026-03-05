import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const Booking: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    
    // Estado y Referencia para el Intersection Observer (Animaciones al hacer scroll)
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
            { threshold: 0.3 }
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
            id="booking"
            ref={sectionRef}
            className="w-full py-16 md:py-24 lg:py-32 bg-bg transition-colors duration-500 flex justify-center px-4 md:px-8"
        >
            {/* Contenedor tipo "Tarjeta Flotante" */}
            <div className="relative w-full max-w-[90rem] h-[60vh] md:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group flex items-center justify-center">

                {/* Imagen de fondo inmersiva */}
                <div className="absolute inset-0 z-0 bg-ink">
                    <img
                        src="/images/fondohome.webp"
                        alt="Project Room Atmosphere"
                        className="w-full h-full object-cover filter brightness-[0.4] scale-100 group-hover:scale-110 transition-transform duration-[15s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Contenido centrado */}
                <div className="relative z-20 text-center px-6 flex flex-col items-center w-full max-w-4xl">

                    <span className={`text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('home_booking.eyebrow', 'Experience the space')}
                    </span>

                    <h2 className={`font-serif text-[clamp(2.5rem,6vw,5.5rem)] text-white leading-[1.05] font-extrabold mb-10 tracking-tight transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('home_booking.title_1', 'Ready to bring your')} <br className="hidden md:block" />
                        <span className="italic font-light opacity-90">{t('home_booking.title_2', 'vision to life?')}</span>
                    </h2>

                    {/* Botón interactivo */}
                    <div className={`transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-4 bg-white text-ink pl-8 pr-2 py-2 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(217,198,163,0.3)]"
                        >
                            {t('home_booking.cta', 'Inquire About Spaces')}
                            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg/10 text-ink group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                <ArrowRight size={20} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};
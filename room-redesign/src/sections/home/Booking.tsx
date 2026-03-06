import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Booking: React.FC = () => {
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
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="booking"
            ref={sectionRef}
            /* OPTIMIZACIÓN: Aumentamos padding superior en móvil para evitar el empalme */
            className="w-full py-12 md:py-16 lg:py-20 bg-bg transition-colors duration-500 flex justify-center px-4 md:px-8"
        >
            {/* CONTENEDOR: 
                - Reducimos altura en móvil (h-[350px]) para que no ocupe toda la pantalla.
                - Mantenemos el centrado total.
            */}
            <div className={`relative w-full max-w-[90rem] h-[350px] md:h-[60vh] lg:h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group flex items-center justify-center transition-all duration-[1500ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}>

                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-0 bg-ink">
                    <img
                        src="/images/fondohome.webp"
                        alt="Project Room Atmosphere"
                        className="w-full h-full object-cover filter brightness-[0.4] scale-100 group-hover:scale-105 transition-transform duration-[10s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10 pointer-events-none"></div>
                </div>

                {/* Contenido centrado */}
                <div className="relative z-20 text-center px-6 flex flex-col items-center w-full max-w-4xl">

                    <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 md:mb-6 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {t('home_booking.eyebrow', 'Experience the space')}
                    </span>

                    {/* Ajuste de tamaño de fuente para evitar bloques vacíos */}
                    <h2 className={`font-serif text-[clamp(1.8rem,8vw,5rem)] text-white leading-tight font-extrabold mb-6 md:mb-10 tracking-tighter transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        {t('home_booking.title_1', 'Ready to bring your')} <br className="hidden md:block" />
                        <span className="italic font-light text-gold/90">{t('home_booking.title_2', 'vision to life?')}</span>
                    </h2>

                    {/* Botón compacto en móvil */}
                    <div className={`transition-all duration-[1400ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 md:gap-4 bg-white text-ink pl-6 pr-1.5 py-1.5 md:pl-8 md:pr-2 md:py-2 rounded-full font-bold text-[9px] md:text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-xl group"
                        >
                            {t('home_booking.cta', 'Inquire About Spaces')}
                            <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-ink/5 text-ink group-hover:bg-white/20 group-hover:text-white transition-colors">
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
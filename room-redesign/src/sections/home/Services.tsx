import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Services: React.FC = () => {
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

    const servicesData = useMemo(() => [
        {
            num: '01',
            name: t('home_services.items.service_1.name', 'Art Exhibitions'),
            desc: t('home_services.items.service_1.desc', 'Curated showcases of contemporary artists, providing a platform for innovative expressions.'),
            img: '/images/arte2.webp',
            offset: 'lg:translate-y-0',
        },
        {
            num: '02',
            name: t('home_services.items.service_2.name', 'Private Events'),
            desc: t('home_services.items.service_2.desc', 'Exclusive architectural spaces tailored for intimate gatherings and cultural celebrations.'),
            img: '/images/evento.webp',
            offset: 'lg:translate-y-16', // Reducido para compactar
        },
        {
            num: '03',
            name: t('home_services.items.service_3.name', 'Advisory & Curation'),
            desc: t('home_services.items.service_3.desc', 'Expert guidance for collectors in acquiring and managing fine art portfolios.'),
            img: '/images/coorporativo.webp',
            offset: 'lg:translate-y-8', // Reducido para compactar
        }
    ], [t]);

    return (
        <section
            id="services"
            ref={sectionRef}
            /* OPTIMIZACIÓN: py-12 en móvil, py-20 en desktop */
            className="w-full bg-[#f9f9f9] text-ink py-12 md:py-20 lg:py-24 border-b border-ink/5 overflow-hidden transition-all duration-700"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Encabezado: Centrado en Móvil / Izquierda en Desktop */}
                <div className="text-center md:text-left mb-12 md:mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 items-center md:items-start">
                    <div className={`transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase block mb-3">
                            {t('home_services.eyebrow', 'Our Expertise')}
                        </span>
                        <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] font-extrabold tracking-tight">
                            {t('home_services.title_1', 'Elevating the')} <br className="hidden md:block" />
                            <span className="italic font-light text-gold/80">{t('home_services.title_2', 'Experience.')}</span>
                        </h2>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <a href="/contact" className="btn-pr border border-ink/10 px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-ink hover:text-bg transition-all">
                            {t('home_services.cta_inquire', 'Inquire Now')}
                        </a>
                    </div>
                </div>

                {/* Cuadrícula: Centrada en Móvil */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
                    {servicesData.map((service, index) => (
                        <article
                            key={index}
                            className={`group flex flex-col items-center md:items-start text-center md:text-left transition-all duration-[1200ms] ease-luxury transform ${service.offset} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                            style={{ transitionDelay: `${400 + (index * 200)}ms` }}
                        >

                            {/* Contenedor de Imagen Optimizado */}
                            <div className="relative w-full max-w-[400px] md:max-w-none aspect-[4/5] overflow-hidden bg-ink/5 mb-6 md:mb-8 rounded-sm shadow-lg">
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-full h-full object-cover filter grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                            {/* Contenido de la Tarjeta */}
                            <div className="flex flex-col w-full px-4 md:px-0">
                                <div className="flex items-center justify-center md:justify-between mb-4 border-b border-ink/5 pb-3">
                                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-gold transition-colors duration-500">
                                        {service.name}
                                    </h3>
                                    <span className="hidden md:block text-[9px] font-mono font-bold tracking-widest opacity-30">
                                        {service.num}
                                    </span>
                                </div>

                                <p className="text-sm md:text-base text-ink/60 leading-relaxed mb-6 font-medium">
                                    {service.desc}
                                </p>

                                <div className="mt-auto">
                                    <a href="/contact" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink group-hover:text-gold transition-all duration-300">
                                        {t('home_services.cta_view', 'View Service')}
                                        <ArrowRight size={14} strokeWidth={2} className="transform group-hover:translate-x-1.5 transition-transform duration-500" />
                                    </a>
                                </div>
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};
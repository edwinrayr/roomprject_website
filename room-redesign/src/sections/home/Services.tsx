import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const Services: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    
    // Estado y Referencia para animar al hacer scroll
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Arreglo de datos traducido dinámicamente
    const servicesData = useMemo(() => [
        {
            num: '01',
            name: t('home_services.items.service_1.name', 'Art Exhibitions'),
            desc: t('home_services.items.service_1.desc', 'Curated showcases of contemporary artists, providing a dynamic platform for innovative visual expressions.'),
            img: '/images/arte2.webp',
            offset: 'lg:translate-y-0',
        },
        {
            num: '02',
            name: t('home_services.items.service_2.name', 'Private Events'),
            desc: t('home_services.items.service_2.desc', 'Exclusive architectural spaces tailored for intimate gatherings, corporate events, and cultural celebrations.'),
            img: '/images/evento.webp',
            offset: 'lg:translate-y-24',
        },
        {
            num: '03',
            name: t('home_services.items.service_3.name', 'Advisory & Curation'),
            desc: t('home_services.items.service_3.desc', 'Expert guidance for collectors and institutions in acquiring, managing, and displaying fine art portfolios.'),
            img: '/images/coorporativo.webp',
            offset: 'lg:translate-y-12',
        }
    ], [t]);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="w-full bg-bg-2 text-ink py-24 md:py-32 lg:py-48 transition-colors duration-500 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Encabezado animado */}
                <div className="text-center md:text-left mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                            {t('home_services.eyebrow', 'Our Expertise')}
                        </span>
                        <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-extrabold tracking-tight">
                            {t('home_services.title_1', 'Elevating the')} <br className="hidden md:block" />
                            <span className="italic font-light">{t('home_services.title_2', 'Experience.')}</span>
                        </h2>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <a href="/contact" className="btn-pr">
                            {t('home_services.cta_inquire', 'Inquire Now')}
                        </a>
                    </div>
                </div>

                {/* Cuadrícula Desfasada (Offset Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {servicesData.map((service, index) => (
                        <article
                            key={index}
                            className={`group flex flex-col transition-all duration-1000 ease-out transform ${service.offset} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
                            style={{ transitionDelay: `${400 + (index * 200)}ms` }}
                        >

                            {/* Contenedor de Imagen */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 mb-6 md:mb-8">
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Contenido de la Tarjeta */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-4 border-b border-ink/10 pb-4">
                                    <h3 className="font-serif text-2xl font-bold group-hover:text-gold transition-colors duration-300">
                                        {service.name}
                                    </h3>
                                    <span className="text-sm font-bold tracking-[0.1em] opacity-50 mt-1">
                                        {service.num}
                                    </span>
                                </div>

                                <p className="text-sm md:text-base text-ink/70 leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                                <div className="mt-auto">
                                    <a href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-300">
                                        {t('home_services.cta_view', 'View Service')}
                                        <ArrowRight size={16} strokeWidth={2} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
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
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const ServicesGrid: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const servicesData: Service[] = useMemo(() => [
        {
            id: '01',
            title: t('services_grid.items.s1.title', 'Art Exhibitions'),
            description: t('services_grid.items.s1.desc', 'The perfect environment to showcase talent and creativity. Featuring curated lighting and a contemporary atmosphere.'),
            imageUrl: '/images/pinturas.webp',
        },
        {
            id: '02',
            title: t('services_grid.items.s2.title', 'Cultural Workshops'),
            description: t('services_grid.items.s2.desc', 'An inspiring setting for learning and cultural exchange. Adaptable spaces offering comfort and excellent acoustics.'),
            imageUrl: '/images/culura.webp',
        },
        {
            id: '03',
            title: t('services_grid.items.s3.title', 'Cinema & Screenings'),
            description: t('services_grid.items.s3.desc', 'Experience high-quality screenings in a community-focused environment. Perfect for independent premieres.'),
            imageUrl: '/images/proyeccion.webp',
        },
        {
            id: '04',
            title: t('services_grid.items.s4.title', 'Private Gatherings'),
            description: t('services_grid.items.s4.desc', 'Intimate and welcoming spaces designed for sharing special moments. We provide the flexibility to make it unforgettable.'),
            imageUrl: '/images/convivencia.webp',
        },
        {
            id: '05',
            title: t('services_grid.items.s5.title', 'Conferences & Recitals'),
            description: t('services_grid.items.s5.desc', 'Equipped with modern technology and elegant design, our rooms are ideal for professional training and recitals.'),
            imageUrl: '/images/reunion.webp',
        },
        {
            id: '06',
            title: t('services_grid.items.s6.title', 'Corporate Events'),
            description: t('services_grid.items.s6.desc', 'The perfect balance of elegance and functionality for corporate anniversaries or boutique celebrations.'),
            imageUrl: '/images/baile.png',
        }
    ], [t]);

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
            id="servicios"
            ref={sectionRef}
            className="w-full py-12 md:py-20 bg-bg text-ink relative z-10 transition-colors duration-500 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Encabezado Compacto */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        {t('services_grid.subtitle', 'Choose Your Experience')}
                    </span>
                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-extrabold tracking-tighter transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        {t('services_grid.title', 'Our Services.')}
                    </h2>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-10 lg:gap-x-16">
                    {servicesData.map((service, index) => (
                        <article
                            key={service.id}
                            className={`group flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: isVisible ? `${(index % 3) * 150 + 400}ms` : '0ms' }}
                        >
                            {/* Imagen Editorial */}
                            <div className="relative w-full max-w-[350px] md:max-w-none aspect-[4/5] overflow-hidden mb-6 bg-ink/5 rounded-sm shadow-lg">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </div>

                            <div className="flex flex-col w-full px-2">
                                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 border-b border-ink/5 pb-3">
                                    <span className="text-gold font-mono font-bold tracking-widest text-xs">
                                        {service.id}
                                    </span>
                                    <h3 className="font-serif text-xl md:text-2xl font-bold transition-colors duration-500 group-hover:text-gold leading-tight">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="font-sans text-sm md:text-base leading-relaxed text-ink/60">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botón de Acción Final */}
                <div className={`mt-16 md:mt-20 flex justify-center transition-all duration-1000 delay-800 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <a href="/contact" className="group inline-flex items-center gap-4 bg-ink text-bg px-10 py-4 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-xl">
                        {t('services_grid.cta', 'Request a Quote')}
                        <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const ServicesGrid: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Datos traducidos dinámicamente
    const servicesData: Service[] = useMemo(() => [
        {
            id: '01',
            title: t('services_grid.items.s1.title', 'Art Exhibitions'),
            description: t('services_grid.items.s1.desc', 'The perfect environment to showcase talent and creativity. Featuring curated lighting and a contemporary atmosphere, your artwork will connect with the audience in a unique way. Ideal for solo or collective exhibitions.'),
            imageUrl: '/images/pinturas.png',
        },
        {
            id: '02',
            title: t('services_grid.items.s2.title', 'Cultural Workshops'),
            description: t('services_grid.items.s2.desc', 'An inspiring setting for learning, collaboration, and cultural exchange. Adaptable spaces offering comfort and excellent acoustics. Perfect for creative workshops, literary circles, and artistic development.'),
            imageUrl: '/images/culura.jpg',
        },
        {
            id: '03',
            title: t('services_grid.items.s3.title', 'Cinema & Screenings'),
            description: t('services_grid.items.s3.desc', 'Experience high-quality visual and acoustic screenings in a community-focused environment. Perfect for independent premieres, thematic cycles, or film forums and audiovisual presentations.'),
            imageUrl: '/images/proyeccion.jpg',
        },
        {
            id: '04',
            title: t('services_grid.items.s4.title', 'Private Gatherings'),
            description: t('services_grid.items.s4.desc', 'Intimate and welcoming spaces designed for sharing special moments in total privacy. Whether a family gathering or a personal celebration, we provide the flexibility and service to make it unforgettable.'),
            imageUrl: '/images/convivencia.png',
        },
        {
            id: '05',
            title: t('services_grid.items.s5.title', 'Conferences & Recitals'),
            description: t('services_grid.items.s5.desc', 'Designed to elevate communication and the attendee experience. Equipped with modern technology and elegant design, our rooms are ideal for conferences, recitals, and professional training.'),
            imageUrl: '/images/reunion.png',
        },
        {
            id: '06',
            title: t('services_grid.items.s6.title', 'Corporate Events'),
            description: t('services_grid.items.s6.desc', 'The perfect balance of elegance and functionality for corporate anniversaries or boutique celebrations. Tailored attention, versatile furniture, and a sophisticated atmosphere that fosters connection.'),
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            className="w-full py-24 md:py-32 bg-bg text-ink relative z-10 transition-colors duration-500"
            id="servicios"
            ref={sectionRef}
        >
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col items-center text-center mb-20 md:mb-32">
                    <span className={`text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('services_grid.subtitle', 'Choose Your Experience')}
                    </span>
                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1] font-extrabold tracking-tight transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('services_grid.title', 'Our Services.')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 md:gap-x-16">
                    {servicesData.map((service, index) => (
                        <article
                            key={service.id}
                            className={`group flex flex-col h-full transition-all duration-[1200ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
                            style={{ transitionDelay: isVisible ? `${(index % 3) * 200 + 300}ms` : '0ms' }}
                        >
                            <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 bg-ink/5 rounded-sm">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury pointer-events-none"></div>
                            </div>

                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4 border-b border-ink/10 pb-4">
                                    <span className="text-gold font-bold tracking-[0.2em] text-sm">
                                        {service.id}
                                    </span>
                                    <h3 className="font-serif text-2xl font-bold transition-colors duration-500 group-hover:text-gold leading-tight">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="font-sans text-sm md:text-base leading-relaxed text-ink/70 flex-grow mb-6">
                                    {service.description}
                                </p>

                                <div className="mt-auto overflow-hidden">
                                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-300">
                                        {t('services_grid.learn_more', 'Learn More')}
                                        <ArrowRight size={16} strokeWidth={2} className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-luxury" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={`mt-24 flex justify-center transition-all duration-1000 delay-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <a href="#contact" className="group flex items-center gap-3 bg-ink text-bg px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300">
                        {t('services_grid.cta', 'Request a Quote')}
                        <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

const servicesData: Service[] = [
    {
        id: '01',
        title: 'Art Exhibitions',
        description: 'The perfect environment to showcase talent and creativity. Featuring curated lighting and a contemporary atmosphere, your artwork will connect with the audience in a unique way. Ideal for solo or collective exhibitions.',
        imageUrl: '/images/pinturas.png',
    },
    {
        id: '02',
        title: 'Cultural Workshops',
        description: 'An inspiring setting for learning, collaboration, and cultural exchange. Adaptable spaces offering comfort and excellent acoustics. Perfect for creative workshops, literary circles, and artistic development.',
        imageUrl: '/images/culura.jpg',
    },
    {
        id: '03',
        title: 'Cinema & Screenings',
        description: 'Experience high-quality visual and acoustic screenings in a community-focused environment. Perfect for independent premieres, thematic cycles, or film forums and audiovisual presentations.',
        imageUrl: '/images/proyeccion.jpg',
    },
    {
        id: '04',
        title: 'Private Gatherings',
        description: 'Intimate and welcoming spaces designed for sharing special moments in total privacy. Whether a family gathering or a personal celebration, we provide the flexibility and service to make it unforgettable.',
        imageUrl: '/images/convivencia.png',
    },
    {
        id: '05',
        title: 'Conferences & Recitals',
        description: 'Designed to elevate communication and the attendee experience. Equipped with modern technology and elegant design, our rooms are ideal for conferences, recitals, and professional training.',
        imageUrl: '/images/reunion.png',
    },
    {
        id: '06',
        title: 'Corporate Events',
        description: 'The perfect balance of elegance and functionality for corporate anniversaries or boutique celebrations. Tailored attention, versatile furniture, and a sophisticated atmosphere that fosters connection.',
        imageUrl: '/images/baile.png',
    }
];

export const ServicesGrid: React.FC = () => {
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

                {/* Encabezado Animado */}
                <div className="flex flex-col items-center text-center mb-20 md:mb-32">
                    <span className={`text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Choose Your Experience
                    </span>
                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1] font-extrabold tracking-tight transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Our Services.
                    </h2>
                </div>

                {/* Cuadrícula de 6 tarjetas con entrada escalonada */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 md:gap-x-16">
                    {servicesData.map((service, index) => (
                        <article
                            key={service.id}
                            className={`group flex flex-col h-full transition-all duration-[1200ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
                            style={{ transitionDelay: isVisible ? `${(index % 3) * 200 + 300}ms` : '0ms' }}
                        >
                            {/* Imagen con Aspect Ratio vertical y Zoom */}
                            <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 bg-ink/5 rounded-sm">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
                                />
                                {/* Velo sutil para profundidad */}
                                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury pointer-events-none"></div>
                            </div>

                            {/* Contenido de texto con acento dorado */}
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

                                {/* Microinteracción interactiva */}
                                <div className="mt-auto overflow-hidden">
                                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-300">
                                        Learn More
                                        <ArrowRight size={16} strokeWidth={2} className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-luxury" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botón de Cotización Animado */}
                <div className={`mt-24 flex justify-center transition-all duration-1000 delay-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <a href="#contact" className="group flex items-center gap-3 bg-ink text-bg px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300">
                        Request a Quote
                        <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};
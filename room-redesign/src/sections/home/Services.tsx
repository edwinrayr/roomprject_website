import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
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
            { threshold: 0.15 } // Se activa cuando el 15% de la sección es visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Arreglo de datos actualizado con imágenes de tu inventario y un valor 'offset'
    const servicesData = [
        {
            num: '01',
            name: 'Art Exhibitions',
            desc: 'Curated showcases of contemporary artists, providing a dynamic platform for innovative visual expressions.',
            img: '/images/arte2.webp',
            offset: 'lg:translate-y-0', // Nivel base
        },
        {
            num: '02',
            name: 'Private Events',
            desc: 'Exclusive architectural spaces tailored for intimate gatherings, corporate events, and cultural celebrations.',
            img: '/images/evento.webp',
            offset: 'lg:translate-y-24', // Desfasado hacia abajo
        },
        {
            num: '03',
            name: 'Advisory & Curation',
            desc: 'Expert guidance for collectors and institutions in acquiring, managing, and displaying fine art portfolios.',
            img: '/images/coorporativo.webp',
            offset: 'lg:translate-y-12', // Punto intermedio
        }
    ];

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
                            Our Expertise
                        </span>
                        <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-extrabold tracking-tight">
                            Elevating the <br className="hidden md:block" />
                            <span className="italic font-light">Experience.</span>
                        </h2>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <a href="#contact" className="btn-pr">
                            Inquire Now
                        </a>
                    </div>
                </div>

                {/* Cuadrícula Desfasada (Offset Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {servicesData.map((service, index) => (
                        <article
                            key={index}
                            // Aplicamos el desfase (offset) y animaciones escalonadas
                            className={`group flex flex-col transition-all duration-1000 ease-out transform ${service.offset} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                                }`}
                            style={{ transitionDelay: `${400 + (index * 200)}ms` }}
                        >

                            {/* Contenedor de Imagen */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 mb-6 md:mb-8">
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                                />
                                {/* Overlay sutil en hover para darle profundidad */}
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

                                {/* Microinteracción: Enlace con flecha que se mueve */}
                                <div className="mt-auto">
                                    <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-300">
                                        View Service
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
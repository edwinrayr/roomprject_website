import React, { useState, useEffect, useRef } from 'react';

// Textos y títulos traducidos al inglés
const features = [
    {
        id: 1,
        title: "EXHIBITION AREA",
        image: "/images/exposicion.png",
        alt: "Art exhibition area"
    },
    {
        id: 2,
        title: "AUDIOVISUAL ZONE",
        image: "/images/proyeccion.jpg",
        alt: "Audiovisual zone"
    },
    {
        id: 3,
        title: "SCENIC ATMOSPHERE",
        image: "/images/salon.png",
        alt: "Scenic atmosphere"
    }
];

export const SpaceFeatures: React.FC = () => {
    // Estado para la microinteracción del tríptico
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Estado y Referencia para la animación de scroll
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
            id="caracteristicas"
        >
            {/* Elemento decorativo de fondo sutil */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                    <line x1="30" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                    <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                {/* COLUMNA IZQUIERDA: EL TRÍPTICO INTERACTIVO */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative h-auto md:h-[500px] lg:h-[600px] items-center order-2 lg:order-1">
                    {features.map((feature, index) => {
                        const isHovered = hoveredId === feature.id;
                        const isDimmed = hoveredId !== null && !isHovered;

                        // Desplazamiento asimétrico solo en escritorio (md: y lg:)
                        const translateY = index === 1 ? 'md:translate-y-12' : index === 2 ? 'md:-translate-y-8' : '';

                        return (
                            <div
                                key={feature.id}
                                className={`relative h-[300px] sm:h-[400px] md:h-full w-full transition-all duration-[800ms] ease-luxury cursor-crosshair ${translateY} ${isHovered ? 'z-30 scale-105' : 'z-10 scale-100'} ${isDimmed ? 'opacity-40 blur-[2px] scale-95' : 'opacity-100 blur-0'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
                                style={{ transitionDelay: isVisible ? `${index * 200 + 300}ms` : '0ms' }}
                                onMouseEnter={() => setHoveredId(feature.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-sm bg-bg/5 shadow-2xl">
                                    <img
                                        src={feature.image}
                                        alt={feature.alt}
                                        className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury ${isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                    <h3 className={`font-sans text-xs lg:text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isHovered ? 'text-gold' : 'text-bg'}`}>
                                        {feature.title}
                                        <span className={`block h-[1px] bg-gold mt-3 transition-all duration-[800ms] ease-luxury ${isHovered ? 'w-12' : 'w-0'}`}></span>
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* COLUMNA DERECHA: EL MANIFIESTO */}
                <div className="lg:col-span-5 flex flex-col justify-center relative order-1 lg:order-2 text-center lg:text-left">
                    <span className={`text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        The Collection
                    </span>

                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight mb-8 transition-all duration-[1200ms] delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        Space <br className="hidden lg:block" />
                        <span className="italic font-light">Features.</span>
                    </h2>

                    <div className={`w-16 h-[2px] bg-bg/20 mb-8 mx-auto lg:mx-0 transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>

                    <p className={`font-sans text-bg/70 text-base md:text-lg leading-relaxed font-light max-w-[45ch] mx-auto lg:mx-0 transition-all duration-[1200ms] delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        At <strong className="text-white font-medium">Project Room Bern</strong>, we bring together three pillars to elevate any event: an <em className="text-white not-italic font-normal border-b border-gold/50 pb-1">exhibition area</em> featuring gallery lighting for artworks, an <em className="text-white not-italic font-normal border-b border-gold/50 pb-1">audiovisual zone</em> equipped for immersive screenings, and a <em className="text-white not-italic font-normal border-b border-gold/50 pb-1">scenic atmosphere</em> crafted to design memorable environments.
                        <br /><br />
                        <span className="text-white text-xl font-serif italic">Flexibility, aesthetics, and technique in one place.</span>
                    </p>
                </div>

            </div>
        </section>
    );
};
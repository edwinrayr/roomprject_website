import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ExhibitionsXContent: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const paintings = [
        { id: 1, src: '/images/PinturaGrecia-_1_.webp', layout: 'col-span-12 md:col-span-7 lg:col-span-8', aspect: 'aspect-video' },
        { id: 2, src: '/images/PinturaGrecia-_2_.webp', layout: 'col-span-12 md:col-span-5 lg:col-span-4', aspect: 'aspect-[3/4]' },
        { id: 4, src: '/images/PinturaGrecia-_4_.webp', layout: 'col-span-12 md:col-span-4 lg:col-span-3 md:-mt-32 z-10', aspect: 'aspect-[3/4]' },
        { id: 5, src: '/images/PinturaGrecia-_5_.webp', layout: 'col-span-12 md:col-span-8 lg:col-span-6', aspect: 'aspect-[16/10]' },
        { id: 6, src: '/images/PinturaGrecia-_6_.webp', layout: 'col-span-12 md:col-span-5 lg:col-span-3 lg:-ml-20 z-20', aspect: 'aspect-[4/5]' },
        { id: 8, src: '/images/PinturaGrecia-_8_.webp', layout: 'col-span-12 md:col-span-7 lg:col-span-9 md:-mt-16', aspect: 'aspect-[21/9]' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            /* OPTIMIZACIÓN: pt-0 para eliminar huecos con la sección de arriba */
            className="w-full pt-0 pb-16 md:pb-24 lg:pb-32 bg-ink relative overflow-hidden"
        >
            {/* FONDO CREATIVO (X GIGANTE) */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-20">
                <div className="absolute top-1/4 -left-20 font-serif text-[40vw] leading-none text-gold/5 italic">
                    X
                </div>
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }}></div>
            </div>

            <div className="container mx-auto px-6 md:px-0 relative z-10">
                {/* Grid: Gap optimizado para un look más compacto */}
                <div className="grid grid-cols-12 gap-6 md:gap-4 items-start">
                    
                    {paintings.map((art, index) => (
                        <div 
                            key={art.id}
                            /* OPTIMIZACIÓN: col-span-12 en móvil para centrar todo */
                            className={`relative group overflow-hidden shadow-2xl transition-all duration-[1500ms] ease-out transform 
                                ${art.layout} flex flex-col items-center
                                ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-[0.98]'}`}
                            style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
                        >
                            <div className={`w-full ${art.aspect} overflow-hidden bg-black/40 rounded-sm`}>
                                <img 
                                    src={art.src} 
                                    alt={`Artwork ${art.id}`}
                                    className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                                />
                                
                                {/* Spotlight effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]"></div>

                                {/* Label minimalista */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 overflow-hidden">
                                    <span className="block text-[9px] md:text-[10px] font-mono font-bold tracking-[0.4em] text-gold/60 uppercase transform translate-x-full group-hover:translate-x-0 transition-transform duration-700">
                                        PRB-X0{art.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Degradado final para suavizar la transición */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg to-transparent opacity-100"></div>
        </section>
    );
};
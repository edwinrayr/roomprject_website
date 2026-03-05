import React, { useEffect, useRef, useState } from 'react';

// Traducción profesional al inglés (Tono curatorial)
const rulesList = [
    "Smoking is strictly prohibited inside the premises.",
    "The space must be left clean unless a professional cleaning service is contracted.",
    "Any damage to furniture or facilities will be the sole responsibility of the user.",
    "Responsible consumption of beverages within the venue is required.",
    "Advanced notice is required if technical assistance or specific setup is needed."
];

export const RulesContent: React.FC = () => {
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
            ref={sectionRef}
            className="w-full py-20 md:py-32 bg-bg text-ink relative z-10 transition-colors duration-500"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                {/* COLUMNA IZQUIERDA: Imagen Editorial Sticky */}
                <div className={`lg:col-span-5 relative lg:sticky lg:top-32 transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group">
                        <img
                            src="/images/504440699_18075163993909812_4565038911395423983_n.jpg"
                            alt="Project Room Bern - Environment"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-105 filter grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-1000"></div>

                        {/* Placa decorativa traducida */}
                        <div className="absolute bottom-6 left-6 bg-bg/95 backdrop-blur-md px-6 py-4 shadow-xl">
                            <p className="font-serif italic text-lg text-ink">Visual Harmony</p>
                            <p className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Respect for the space</p>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: Protocolos */}
                <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">

                    {/* Introducción Traducida */}
                    <div className={`mb-16 transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="font-serif text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                            Space Usage <br className="hidden md:block" /> <span className="italic font-light text-gold">Guidelines.</span>
                        </h2>
                        <p className="font-sans text-ink/70 text-base md:text-lg leading-relaxed font-light max-w-[55ch]">
                            At <strong className="font-medium text-ink">Project Room Bern</strong>, we strive to maintain a respectful, safe, and functional environment for all our visitors and collaborators. Below are the general rules that ensure a harmonious experience within our facilities.
                        </p>
                        <div className="w-12 h-[1px] bg-gold mt-8"></div>
                    </div>

                    {/* Lista de Reglas Animadas */}
                    <div className="flex flex-col">
                        {rulesList.map((rule, index) => (
                            <div
                                key={index}
                                className={`group flex items-start gap-6 py-8 border-t border-ink/10 transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                style={{ transitionDelay: isVisible ? `${400 + (index * 150)}ms` : '0ms' }}
                            >
                                <div className="flex-shrink-0 pt-1">
                                    <span className="font-serif italic text-2xl md:text-3xl font-light text-gold/60 transition-colors duration-500 group-hover:text-gold">
                                        0{index + 1}.
                                    </span>
                                </div>

                                <p className="font-sans text-base md:text-lg text-ink/80 font-light tracking-wide leading-relaxed group-hover:text-ink transition-colors duration-300">
                                    {rule}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Nota final traducida */}
                    <div className={`mt-16 bg-ink text-bg p-8 md:p-12 rounded-sm transition-all duration-1000 delay-[1200ms] ease-luxury transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                        <p className="font-serif italic text-2xl mb-6 opacity-90 leading-tight">"The beauty of the space lies in how we care for it."</p>
                        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                            Thank you for your collaboration
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
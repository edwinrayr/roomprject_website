import React, { useEffect, useRef, useState } from 'react';

export const WhoWeAre: React.FC = () => {
    // Estado y Referencia para la animación al hacer scroll
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
            { threshold: 0.15 } // Se activa cuando el 15% es visible
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
            className="w-full py-24 md:py-32 bg-bg text-ink relative z-10 transition-colors duration-500 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                {/* Columna Izquierda: Imagen Editorial */}
                <div className={`lg:col-span-5 relative group transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>

                    <div className="relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] overflow-hidden rounded-sm z-10 shadow-lg">
                        <img
                            src="/images/IMG_6892.webp"
                            alt="Project Room Bern Space"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                        />
                    </div>

                    {/* Marco decorativo asimétrico y animado */}
                    <div className="absolute -inset-4 md:-inset-6 border border-ink/20 z-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-[1000ms] ease-luxury group-hover:translate-x-8 group-hover:translate-y-8 hidden md:block"></div>
                </div>

                {/* Columna Derecha: El texto oficial de la misión */}
                <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">

                    <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 block transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Who We Are
                    </span>

                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight mb-10 transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        A space for <br className="hidden lg:block" />
                        <span className="italic font-light">cultural resistance.</span>
                    </h2>

                    {/* Inyectamos y adaptamos el texto de la visión y ubicación */}
                    <div className={`font-sans text-ink/75 text-base md:text-lg leading-relaxed space-y-6 max-w-[55ch] transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                        {/* Párrafo destacado (Lead Paragraph) */}
                        <p className="text-xl md:text-2xl font-serif text-ink mb-6 leading-snug">
                            <strong>Project Room Bern</strong> is a new space, open to everyone and to art in all its forms.
                        </p>

                        <p>
                            We continuously collaborate with emerging artists seeking exhibition opportunities, as well as curators, cultural managers, educators, artisans, and lecturers, to promote art, culture, and personal development.
                        </p>

                        <p>
                            Located in the heart of Bern, within the emblematic <strong>Das Dazwischen</strong>—a vibrant center renowned for its eclectic programming and commitment to contemporary arts. This venue hosts experimental music concerts, artistic performances, participatory workshops, and community events, serving as a true platform for creators.
                        </p>

                        <p>
                            By establishing ourselves in such a symbolic cornerstone of Bern's cultural scene, we amplify our initiative, joining a long-standing tradition of social innovation and cultural resistance.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};
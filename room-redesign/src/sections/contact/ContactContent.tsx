import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

export const ContactContent: React.FC = () => {
    // Observer setup for scroll animations
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

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 bg-bg text-ink relative z-10 transition-colors duration-500"
            id="lets-talk"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* LEFT COLUMN: Text and Artistic Buttons */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
                    <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight mb-4 leading-none transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        Let's talk about <br className="hidden md:block" />
                        <span className="italic font-light text-gold">your event.</span>
                    </h2>
                    <p className={`font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-ink/50 font-bold mb-10 transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Grecia Portorreal — Owner of Project Room Bern
                    </p>

                    {/* Biography translated to professional English */}
                    <div className={`font-sans text-ink/80 text-base md:text-lg leading-relaxed font-light space-y-6 mb-12 max-w-[55ch] mx-auto lg:mx-0 transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <p>
                            Grecia is a visual artist originally from the Dominican Republic. She studied advertising arts at the Universidad Autónoma de Santo Domingo and Fine Arts and Illustration at Altos de Chavón (affiliated with Parsons, NY), graduating <em className="font-serif text-lg text-ink font-medium">Cum Laude</em>. She also completed eight years of rigorous training at the National School of Fine Arts (SD).
                        </p>
                        <p>
                            A specialist in the conservation and restoration of cultural heritage (Spain and Italy), her work has been exhibited across the Dominican Republic, New York, Spain, Italy, and Switzerland. She currently resides in Biel, where she leads <strong className="font-medium text-ink">Project Room Bern</strong> to intertwine art, personal development, female entrepreneurship, and social commitment.
                        </p>
                    </div>

                    {/* Direct Contact Links */}
                    <div className={`flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-8 mb-12 font-serif text-lg md:text-xl transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <a href="tel:+41782378276" className="flex items-center gap-3 hover:text-gold transition-colors duration-300 w-fit">
                            <span className="text-gold text-sm">TEL</span> +41 78 237 82 76
                        </a>
                        <span className="hidden md:block text-ink/20">|</span>
                        <a href="mailto:greportorreal@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors duration-300 w-fit">
                            <span className="text-gold text-sm">MAIL</span> greportorreal@gmail.com
                        </a>
                    </div>

                    {/* CREATIVE BUTTONS (Interactive Cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* 1. Artistic Card: Website */}
                        <div className={`transition-all duration-[1200ms] delay-[800ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                            <a
                                href="https://grecia-portorreal.ch/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden border border-ink/20 p-6 md:p-8 flex flex-col justify-between bg-bg hover:border-gold transition-colors duration-700 rounded-sm min-h-[160px] text-left"
                            >
                                {/* Expanding hover circle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gold rounded-full group-hover:w-[250%] group-hover:aspect-square transition-all duration-[1000ms] ease-luxury"></div>

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <Globe strokeWidth={1.2} className="w-6 h-6 md:w-8 md:h-8 text-ink group-hover:text-bg transition-colors duration-500" />
                                    <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 text-ink opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-bg transition-all duration-700 ease-luxury" />
                                </div>

                                <div className="relative z-10">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/60 group-hover:text-bg/80 transition-colors duration-500 block mb-2 font-bold">
                                        Official Portfolio
                                    </span>
                                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-bg transition-colors duration-500">
                                        Website
                                    </h3>
                                </div>
                            </a>
                        </div>

                        {/* 2. Artistic Card: WhatsApp */}
                        <div className={`transition-all duration-[1200ms] delay-[1000ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                            <a
                                href="https://wa.me/41782378276?text=Hello%20Grecia,%20I%20would%20like%20information%20about%20Project%20Room%20Bern."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden border border-ink/20 p-6 md:p-8 flex flex-col justify-between bg-bg hover:border-gold transition-colors duration-700 rounded-sm min-h-[160px] text-left"
                            >
                                {/* Expanding hover circle (slight delay) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gold rounded-full group-hover:w-[250%] group-hover:aspect-square transition-all duration-[1000ms] ease-luxury delay-75"></div>

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-ink group-hover:text-bg transition-colors duration-500">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                    <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 text-ink opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-bg transition-all duration-700 ease-luxury delay-75" />
                                </div>

                                <div className="relative z-10">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/60 group-hover:text-bg/80 transition-colors duration-500 block mb-2 font-bold">
                                        Immediate Response
                                    </span>
                                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-bg transition-colors duration-500">
                                        WhatsApp
                                    </h3>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>

                {/* RIGHT COLUMN: Photography */}
                <div className={`lg:col-span-5 order-1 lg:order-2 relative group transition-all duration-[1500ms] delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                    <div className="relative w-full max-w-sm mx-auto lg:max-w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src="/images/grecia.webp"
                            alt="Grecia Portorreal - Project Room Bern"
                            className="w-full h-full object-cover filter grayscale transition-all duration-[2500ms] ease-luxury group-hover:scale-105 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};
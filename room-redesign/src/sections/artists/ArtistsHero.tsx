import React, { useEffect, useState } from 'react';

export const ArtistsHero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-bg pt-24 md:pt-32 pb-16 overflow-hidden transition-colors duration-500">

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Text Column: Focus on the Author */}
                <div className="lg:col-span-5 lg:col-start-2 z-20 order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">

                    <div className="overflow-hidden mb-6 flex justify-center lg:justify-start">
                        <span className={`block text-gold text-xs font-bold tracking-[0.4em] uppercase transition-transform duration-[1000ms] ease-luxury ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                            The Eye Behind the Lens
                        </span>
                    </div>

                    <h1 className={`font-serif text-[clamp(3.5rem,8vw,6rem)] text-ink leading-[0.95] tracking-tight mb-8 transition-all duration-[1200ms] ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        Grecia <br className="hidden lg:block" />
                        <span className="italic font-light">Portorreal</span>
                    </h1>

                    <div className={`transition-all duration-[1000ms] delay-300 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="font-sans text-ink/70 text-base md:text-lg leading-relaxed mb-8 max-w-[40ch] mx-auto lg:mx-0">
                            Founder and principal artist of Project Room Bern. Her work captures the essence of timeless moments, transforming space into a visual dialogue between light and form.
                        </p>

                        <div className="inline-block py-4 border-t border-ink/20">
                            <p className="text-[10px] uppercase tracking-widest text-ink/60 font-bold">
                                All rights reserved — Featured Artist
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Column: Original Artwork */}
                <div className="lg:col-span-5 z-10 order-1 lg:order-2 relative flex justify-center lg:justify-end">

                    <div className={`relative w-full max-w-[16rem] sm:max-w-sm md:max-w-md aspect-[4/5] overflow-hidden transition-all duration-[1500ms] delay-200 ease-luxury shadow-2xl ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                        <img
                            src="/images/PinturaGrecia (7).jpg"
                            alt="Grecia Portorreal Artwork"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-luxury"
                        />
                        <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                    </div>

                    <div className={`absolute -bottom-6 md:-bottom-10 right-4 lg:-right-8 bg-ink text-bg px-6 md:px-8 py-3 md:py-4 shadow-xl transition-all duration-1000 delay-700 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="font-serif italic text-lg md:text-xl opacity-90">G. Portorreal</p>
                    </div>

                </div>

            </div>
        </section>
    );
};
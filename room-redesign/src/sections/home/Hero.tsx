import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[100dvh] -mt-[68px] flex flex-col lg:flex-row overflow-hidden">

            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:px-[10%] pt-[100px] pb-12 z-10 bg-bg transition-colors duration-500">
                <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] font-extrabold text-ink mb-2 tracking-tight">
                    Curating <br />
                    <span className="block mt-2">Vision.</span>
                </h1>

                <div className="font-serif text-[clamp(1.2rem,2.5vw,1.8rem)] italic text-gold mb-6 font-medium">
                    The art of modern spaces
                </div>

                <p className="font-sans text-ink/70 max-w-[48ch] text-sm md:text-base leading-relaxed mb-10">
                    Explore an exclusive collection where contemporary art meets avant-garde design. An immersive visual experience curated for those who appreciate pure aesthetics.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                    <a href="#exhibitions" className="btn-pr">
                        Explore Collection
                    </a>
                    <a href="#about" className="text-sm font-semibold tracking-wide text-ink hover:text-gold transition-colors underline underline-offset-4 decoration-ink/20 hover:decoration-gold">
                        Our Story
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-1/2 h-full relative bg-bg-2">
                <img
                    src="/images/serviceshome.webp"
                    alt="Main Exhibition Artwork"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
                />

                <div className="absolute bottom-12 left-4 md:bottom-[20%] md:-left-[20%] w-[55%] max-w-[280px] shadow-2xl z-20 hidden sm:block">
                    <img
                        src="/images/taller.webp"
                        alt="Secondary Artwork Details"
                        className="w-full h-auto object-cover border-[6px] border-bg transition-colors duration-500"
                    />
                </div>
            </div>

        </section>
    );
};
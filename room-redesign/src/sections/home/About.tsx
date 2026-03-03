import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="about" className="w-full bg-ink text-bg flex flex-col lg:flex-row transition-colors duration-500">

            {/* Panel Izquierdo: Imagen Cuadrada */}
            <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-auto lg:min-h-[600px] overflow-hidden">
                <img
                    src="/images/taller.webp"
                    alt="Inside Project Room Gallery"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
            </div>

            {/* Panel Derecho: Contenido y Lista */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center bg-bg text-ink p-8 md:p-16 lg:p-24 transition-colors duration-500">

                <span className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase opacity-70 mb-4 block">
                    About the gallery
                </span>

                <h2 className="font-serif text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.05] font-extrabold mb-6 tracking-tight">
                    Redefining the space between art and observer.
                </h2>

                <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 max-w-[52ch] mb-8">
                    Project Room is more than an exhibition space; it is an architectural canvas dedicated to contemporary masterpieces. We curate immersive environments that challenge perception and elevate the dialogue between the artwork and its environment.
                </p>

                {/* Lista de enfoques */}
                <ul className="flex flex-col gap-1 mb-10 max-w-[48ch]">
                    <li className="py-3 border-b border-ink/10 text-sm md:text-base font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Curated Contemporary Exhibitions
                    </li>
                    <li className="py-3 border-b border-ink/10 text-sm md:text-base font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Private Art Advisory & Acquisitions
                    </li>
                    <li className="py-3 border-b border-ink/10 text-sm md:text-base font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Cultural Events & Artist Workshops
                    </li>
                </ul>

                <div>
                    <a href="#artists" className="inline-block font-bold text-sm tracking-wide text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-gold hover:text-gold transition-colors">
                        Discover our artists
                    </a>
                </div>
            </div>

        </section>
    );
};
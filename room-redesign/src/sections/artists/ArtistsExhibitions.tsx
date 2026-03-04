import React from 'react';

export const Exhibitions: React.FC = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-ink text-bg relative z-10 overflow-hidden" id="about-artist">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* 1. SECCIÓN BIOGRÁFICA (Split Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 border-b border-bg/20 pb-16">
                    
                    {/* Columna Izquierda: Nombre */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                            Artista & Fundadora
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-none">
                            Grecia <br className="hidden lg:block" /> Portorreal
                        </h2>
                        <p className="font-serif italic text-xl md:text-2xl text-gold">
                            "Donde Cada Evento se Convierte en Arte"
                        </p>
                    </div>

                    {/* Columna Derecha: Biografía EXACTA */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 font-sans text-bg/80 text-base md:text-lg leading-relaxed font-light">
                        <p>
                            <strong>Grecia Portorreal</strong> es originaria de la República Dominicana. Nació en Santo Domingo, donde estudió artes publicitarias en la Universidad Autónoma de Santo Domingo y bellas artes e ilustración en la Altos de Chavón School of Design, afiliada a la Parsons School of Design de Nueva York, obteniendo el mérito de Cum Laude.
                        </p>
                        <p>
                            Al mismo tiempo, estudió bellas artes durante 5 años en la Escuela de Bellas Artes de Santo Domingo. Se trasladó a España e Italia, donde estudió la conservación y restauración del patrimonio cultural.
                        </p>
                        <p>
                            Ha expuesto su obra en República Dominicana, Nueva York, España, Italia y Suiza.
                        </p>
                        <p className="text-white font-medium">
                            Actualmente vive en Biel, Suiza, donde se encuentra su estudio de arte.
                        </p>
                    </div>
                </div>

                {/* 2. GALERÍA DE OBRAS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* Obra 1 */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                        <img 
                            src="/images/PinturaGrecia (7).jpg" 
                            alt="Obra de Grecia Portorreal" 
                            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>
                    </div>

                    {/* Obra 2 (Asimétrica) */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-sm md:mt-16">
                        <img 
                            src="/images/pinturas.png" 
                            alt="Obra de Grecia Portorreal" 
                            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>
                    </div>

                    {/* Obra 3 */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-sm lg:mt-8">
                        <img 
                            src="/images/chicas.jpg" 
                            alt="Espacio de Grecia Portorreal" 
                            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105 grayscale hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>
                    </div>
                </div>

                {/* 3. AVISO LEGAL DE DERECHOS DE AUTOR */}
                <div className="mt-24 text-center border-t border-bg/20 pt-16">
                    <p className="font-sans text-[11px] md:text-xs text-bg/50 uppercase tracking-[0.2em] leading-loose max-w-2xl mx-auto">
                        Todas las imágenes publicadas están protegidas por derechos de autor y pertenecen a Grecia Portorreal. <br className="hidden md:block" />
                        Queda prohibida su reproducción, distribución o uso sin autorización por escrito.
                    </p>
                </div>

            </div>
        </section>
    );
};
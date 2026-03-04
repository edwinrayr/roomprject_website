import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

export const ContactContent: React.FC = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-bg text-ink relative z-10" id="hablemos">
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* COLUMNA IZQUIERDA: Texto y Botones Artísticos */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        Hablemos sobre tu evento
                    </h2>
                    <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-ink/50 font-bold mb-10">
                        Grecia Portorreal — Propietaria de Project Room Bern
                    </p>

                    {/* Biografía */}
                    <div className="font-sans text-muted text-base leading-relaxed font-light space-y-6 mb-10">
                        <p>
                            Grecia es una artista plástica originaria de la República Dominicana. Estudió artes publicitarias en la Universidad Autónoma de Santo Domingo y Bellas Artes e Ilustración en Altos de Chavón (afiliada a Parsons, NY) con mención <em className="font-serif text-lg">Cum Laude</em>. También cursó ocho años en la Escuela Nacional de Bellas Artes (SD).
                        </p>
                        <p>
                            Especialista en conservación y restauración del patrimonio cultural (España e Italia). Ha expuesto en República Dominicana, Nueva York, España, Italia y Suiza. Reside en Biel, donde impulsa <strong className="font-medium text-ink">Project Room Bern</strong> para conectar arte, desarrollo personal, emprendimiento femenino y compromiso social.
                        </p>
                    </div>

                    {/* Datos de contacto directos */}
                    <div className="flex flex-col gap-2 mb-10 font-serif text-lg md:text-xl">
                        <a href="tel:+41782378276" className="hover:text-gold transition-colors duration-300 w-fit">📞 +41 78 237 82 76</a>
                        <a href="mailto:greportorreal@gmail.com" className="hover:text-gold transition-colors duration-300 w-fit">✉ greportorreal@gmail.com</a>
                    </div>

                    {/* BOTONES CREATIVOS (TAMAÑO REDUCIDO Y ELEGANTE) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* 1. Tarjeta Artística: Website */}
                        <a 
                            href="https://grecia-portorreal.ch/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden border border-ink/20 p-5 md:p-6 flex flex-col justify-between bg-bg hover:border-gold transition-colors duration-700 rounded-sm min-h-[140px]"
                        >
                            {/* Efecto hover: Círculo expansivo de tinta dorada */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gold rounded-full group-hover:w-[250%] group-hover:aspect-square transition-all duration-[1000ms] ease-luxury"></div>

                            {/* Ícono + Flecha */}
                            <div className="relative z-10 flex justify-between items-start mb-4">
                                <Globe strokeWidth={1.2} className="w-6 h-6 md:w-7 md:h-7 text-ink group-hover:text-bg transition-colors duration-500" />
                                <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 text-ink opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-bg transition-all duration-700 ease-luxury" />
                            </div>

                            {/* Textos */}
                            <div className="relative z-10">
                                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-ink/60 group-hover:text-bg/80 transition-colors duration-500 block mb-1">
                                    Portafolio Oficial
                                </span>
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-bg transition-colors duration-500">
                                    Website
                                </h3>
                            </div>
                        </a>

                        {/* 2. Tarjeta Artística: WhatsApp */}
                        <a 
                            href="https://wa.me/41782378276?text=Hola%20Grecia,%20me%20gustaría%20información%20sobre%20Project%20Room%20Bern." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden border border-ink/20 p-5 md:p-6 flex flex-col justify-between bg-bg hover:border-gold transition-colors duration-700 rounded-sm min-h-[140px]"
                        >
                            {/* Efecto hover: Círculo expansivo con ligero retraso */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gold rounded-full group-hover:w-[250%] group-hover:aspect-square transition-all duration-[1000ms] ease-luxury delay-75"></div>

                            {/* Ícono Oficial de WhatsApp en SVG + Flecha */}
                            <div className="relative z-10 flex justify-between items-start mb-4">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-ink group-hover:text-bg transition-colors duration-500">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                </svg>
                                <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 text-ink opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-bg transition-all duration-700 ease-luxury delay-75" />
                            </div>

                            {/* Textos */}
                            <div className="relative z-10">
                                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-ink/60 group-hover:text-bg/80 transition-colors duration-500 block mb-1">
                                    Respuesta Inmediata
                                </span>
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-bg transition-colors duration-500">
                                    WhatsApp
                                </h3>
                            </div>
                        </a>

                    </div>
                </div>

                {/* COLUMNA DERECHA: Fotografía */}
                <div className="lg:col-span-5 order-1 lg:order-2 relative group">
                    <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                        <img 
                            src="/images/grecia.webp" 
                            alt="Grecia Portorreal" 
                            className="w-full h-full object-cover grayscale transition-transform duration-[2000ms] ease-luxury group-hover:scale-105 group-hover:grayscale-0"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
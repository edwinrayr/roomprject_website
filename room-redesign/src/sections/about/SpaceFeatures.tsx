import React, { useState } from 'react';

// Datos EXACTOS de tu acerca.html
const features = [
    {
        id: 1,
        title: "ÁREA DE EXPOSICIÓN",
        image: "/images/exposicion.png",
        alt: "Área de exposición de arte"
    },
    {
        id: 2,
        title: "ZONA AUDIOVISUAL",
        image: "/images/proyeccion.jpg",
        alt: "Zona Audiovisual"
    },
    {
        id: 3,
        title: "AMBIENTE ESCÉNICO",
        image: "/images/salon.png",
        alt: "Ambiente escénico"
    }
];

export const SpaceFeatures: React.FC = () => {
    // Estado para saber qué imagen se está señalando
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="w-full py-24 md:py-32 bg-ink text-bg relative z-10 overflow-hidden" id="caracteristicas">
            
            {/* Elemento decorativo de fondo (arte abstracto sutil) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                 <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke"/>
                    <line x1="30" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke"/>
                    <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke"/>
                 </svg>
            </div>

            <div className="container-pr relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                {/* --- COLUMNA IZQUIERDA: EL TRÍPTICO INTERACTIVO (7 columnas) --- */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 relative h-[600px] md:h-[500px] lg:h-[600px] items-center">
                    {features.map((feature, index) => {
                        // Lógica de interacción:
                        const isHovered = hoveredId === feature.id;
                        // Si hay alguno señalado, y no es este, entonces este se atenúa.
                        const isDimmed = hoveredId !== null && !isHovered;

                        // Desplazamiento vertical para romper la simetría (arte)
                        // La segunda imagen baja un poco, la tercera sube un poco.
                        const translateY = index === 1 ? 'md:translate-y-12' : index === 2 ? 'md:-translate-y-8' : '';

                        return (
                            <div 
                                key={feature.id}
                                className={`relative h-full transition-all duration-[800ms] ease-luxury cursor-crosshair ${translateY} ${isHovered ? 'z-30 scale-105' : 'z-10 scale-100'} ${isDimmed ? 'opacity-40 blur-[2px] scale-95' : 'opacity-100 blur-0'}`}
                                onMouseEnter={() => setHoveredId(feature.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Contenedor de la imagen (Aspect Ratio Vertical Dramático) */}
                                <div className="relative w-full h-full overflow-hidden rounded-sm bg-bg/5 shadow-2xl">
                                    <img
                                        src={feature.image}
                                        alt={feature.alt}
                                        className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury ${isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`}
                                    />
                                    {/* Overlay degradado para que el texto se lea */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
                                </div>
                                
                                {/* Título superpuesto como placa de museo */}
                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                    <h3 className={`font-sans text-sm md:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isHovered ? 'text-gold' : 'text-bg'}`}>
                                        {feature.title}
                                        {/* Línea decorativa que se expande */}
                                        <span className={`block h-[1px] bg-gold mt-3 transition-all duration-[800ms] ease-luxury ${isHovered ? 'w-12' : 'w-0'}`}></span>
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- COLUMNA DERECHA: EL MANIFIESTO (5 columnas) --- */}
                <div className="lg:col-span-5 flex flex-col justify-center relative">
                     <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block animate-pulse">
                        La Colección
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-10 leading-none">
                        Características <br/> del <span className="italic text-gold">Espacio.</span>
                    </h2>
                    
                    {/* Separador artístico */}
                    <div className="w-16 h-[2px] bg-bg/20 mb-10"></div>

                    {/* Texto copiado EXACTAMENTE de tu HTML original, pero con estilo */}
                    <p className="font-sans text-bg/70 text-lg leading-loose font-light">
                        En <strong className="text-white font-medium">Project Room Bern</strong> reunimos tres pilares para elevar cualquier evento:
                        un <em className="text-white not-italic font-normal border-b border-gold/50 pb-1">área de exposición</em> con luz de galería para obras y montajes, una
                        <em className="text-white not-italic font-normal border-b border-gold/50 pb-1"> zona audiovisual</em> preparada para proyecciones y presentaciones inmersivas,
                        y un <em className="text-white not-italic font-normal border-b border-gold/50 pb-1">ambiente escénico</em> que cuida cada detalle para crear atmósferas memorables.
                        <br/><br/>
                        <span className="text-white text-xl font-serif italic">Flexibilidad, estética y técnica en un mismo lugar.</span>
                    </p>
                </div>

            </div>
        </section>
    );
};
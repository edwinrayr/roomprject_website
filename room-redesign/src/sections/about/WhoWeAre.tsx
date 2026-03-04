import React from 'react';

export const WhoWeAre: React.FC = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-bg text-ink relative z-10">
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Imagen Izquierda */}
                <div className="lg:col-span-6 relative group">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                        <img 
                            src="/images/IMG_6892.webp" 
                            alt="Vista artística Project Room Bern" 
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-105 grayscale hover:grayscale-0"
                        />
                    </div>
                    {/* Cuadro decorativo desplazado */}
                    <div className="absolute -inset-4 border border-ink/10 -z-10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                </div>

                {/* Texto Derecha (Copiado de tu HTML) */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        Quiénes Somos
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                        Un espacio para <br /> <span className="italic font-light">recuerdos atemporales.</span>
                    </h2>
                    
                    <div className="font-sans text-muted text-base md:text-lg leading-relaxed space-y-6">
                        <p>
                            <strong>Project Room Bern</strong> es un espacio íntimo y versátil para arte, cultura, proyecciones y celebraciones privadas. Diseño escénico, luz de galería y un ambiente pensado para crear recuerdos atemporales.
                        </p>
                        <p>
                            Es una sala con estética cuidada y flexibilidad para crear <strong>experiencias únicas</strong>. Nuestro entorno exclusivo en Suiza está diseñado para que cada detalle refleje elegancia y distinción.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
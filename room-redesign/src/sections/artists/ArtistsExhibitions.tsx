import React from 'react';

export const Exhibitions: React.FC = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-ink text-bg relative z-10 overflow-hidden">
            {/* Forzamos el fondo a la variable 'ink' (oscuro) y el texto a 'bg' (claro) para crear contraste */}
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Encabezado de la Exhibición */}
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-bg/20 pb-8">
                    <div>
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            Exhibición Destacada
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Silence & <span className="italic font-light opacity-90">Shadows</span>
                        </h2>
                    </div>
                    {/* Fechas */}
                    <p className="font-sans text-sm uppercase tracking-widest text-muted md:text-right">
                        15 Oct — 28 Nov
                    </p>
                </div>

                {/* Contenido Principal (Split Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
                    
                    {/* Imagen de la Exhibición */}
                    <div className="lg:col-span-7 relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden group">
                        <img 
                            src="/images/PinturaGrecia (7).jpg" 
                            alt="Vista de la exhibición Silence & Shadows" 
                            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105"
                        />
                    </div>

                    {/* Texto y Llamado a la Acción */}
                    <div className="lg:col-span-5 lg:pl-16 flex flex-col justify-center">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                            Un viaje a través del minimalismo contemporáneo.
                        </h3>
                        <p className="font-sans text-bg/80 text-base leading-relaxed mb-10">
                            Explora cómo el espacio y el vacío dialogan en esta instalación inmersiva. "Silence & Shadows" reúne a artistas que desafían nuestra percepción de la luz en entornos cerrados. Una experiencia curada exclusivamente para Project Room Bern.
                        </p>
                        
                        {/* Botón con microinteracción elegante (línea que se expande) */}
                        <div>
                            <a 
                                href="#reservar" 
                                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
                            >
                                <span>RSVP Now</span>
                                <span className="w-8 h-[1px] bg-gold group-hover:bg-white group-hover:w-16 transition-all duration-500 ease-luxury"></span>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
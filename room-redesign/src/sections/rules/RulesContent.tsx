import React from 'react';

// Los textos EXACTOS que me enviaste
const rulesList = [
    "Prohibido fumar dentro del local.",
    "Dejar el espacio limpio si no se contrata el servicio de limpieza.",
    "Cualquier daño al mobiliario o instalaciones será responsabilidad del usuario.",
    "Moderación en el consumo de bebidas dentro del lugar.",
    "Notificar con antelación si se requiere asistencia técnica."
];

export const RulesContent: React.FC = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-bg text-ink relative z-10">
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* COLUMNA IZQUIERDA: Imagen Editorial (Fija al hacer scroll en desktop) */}
                <div className="lg:col-span-5 relative lg:sticky lg:top-32">
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src="/images/504440699_18075163993909812_4565038911395423983_n.jpg" 
                            alt="Project Room Bern - Ambiente" 
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury group-hover:scale-105 grayscale hover:grayscale-0"
                        />
                        {/* Overlay sutil para dar elegancia */}
                        <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-1000"></div>
                        
                        {/* Pequeña placa decorativa sobre la imagen */}
                        <div className="absolute bottom-6 left-6 bg-bg/90 backdrop-blur-sm px-6 py-4">
                            <p className="font-serif italic text-lg text-ink">Armonía visual</p>
                            <p className="font-sans text-[10px] uppercase tracking-widest text-ink/60 font-bold">Respeto por el espacio</p>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: El Texto y las Reglas */}
                <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
                    
                    {/* Introducción */}
                    <div className="mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            Normas de Uso <br className="hidden md:block" /> del <span className="italic font-light text-gold">Espacio.</span>
                        </h2>
                        <p className="font-sans text-muted text-base md:text-lg leading-relaxed font-light">
                            En <strong className="font-medium text-ink">Project Room Bern</strong> buscamos mantener un ambiente respetuoso, seguro y funcional para todos nuestros visitantes y colaboradores. A continuación, te compartimos las reglas generales que garantizan una experiencia armoniosa dentro de nuestras instalaciones.
                        </p>
                        <div className="w-12 h-[1px] bg-gold mt-8"></div>
                    </div>

                    {/* Lista de Reglas */}
                    <div className="flex flex-col">
                        {rulesList.map((rule, index) => (
                            <div 
                                key={index} 
                                className="group flex items-start gap-6 py-8 border-t border-ink/10 transition-colors duration-500 hover:border-gold/30"
                            >
                                {/* Número en Dorado */}
                                <div className="flex-shrink-0 pt-1">
                                    <span className="font-serif italic text-2xl md:text-3xl font-light text-gold/60 transition-colors duration-500 group-hover:text-gold">
                                        0{index + 1}.
                                    </span>
                                </div>
                                
                                {/* Texto de la Regla */}
                                <p className="font-sans text-base md:text-lg text-ink font-light tracking-wide leading-relaxed">
                                    {rule}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Nota final o cierre */}
                    <div className="mt-16 bg-ink text-bg p-8 md:p-10 rounded-sm">
                        <p className="font-serif italic text-xl mb-4 opacity-90">"La belleza del espacio reside en cómo lo cuidamos."</p>
                        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold">
                            Gracias por tu colaboración
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
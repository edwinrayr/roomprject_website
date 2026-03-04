import React from 'react';

export const CancellationPolicy: React.FC = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-bg text-ink relative z-10 border-t border-ink/5">
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Imagen (Ajustada a la captura de pantalla) */}
                <div className="lg:col-span-5">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                        <img 
                            src="/images/PinturaGrecia (3).jpg" 
                            alt="Políticas de cancelación Project Room Bern" 
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxury hover:scale-105"
                        />
                    </div>
                </div>

                {/* Texto (Copiado EXACTAMENTE de tu HTML y screenshot) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
                        Políticas de <br className="hidden lg:block"/> Cancelación
                    </h2>
                    
                    <p className="font-sans text-muted text-base leading-relaxed font-light mb-10">
                        En <strong className="font-medium text-ink">Project Room Bern</strong> valoramos la planificación responsable y el respeto al tiempo de nuestros clientes y equipo. A continuación, te presentamos nuestras políticas de cancelación aplicables a las reservas del espacio.
                    </p>

                    <div className="space-y-6">
                        {/* Regla 1 */}
                        <div className="border-t border-ink/10 pt-6">
                            <p className="font-sans text-base leading-relaxed font-light">
                                <strong className="font-semibold text-ink">Reservas de un solo día:</strong> Si se cancela con más de 30 días de anticipación, se ofrece un <strong className="font-semibold text-ink">reembolso total</strong>. Si la cancelación ocurre dentro de los 30 días previos al evento, <strong className="font-semibold text-ink">no se realiza reembolso</strong>.
                            </p>
                        </div>

                        {/* Regla 2 */}
                        <div className="border-t border-ink/10 pt-6 border-b pb-6">
                            <p className="font-sans text-base leading-relaxed font-light">
                                <strong className="font-semibold text-ink">Reservas de 15 días o más:</strong> Si se cancela con más de 2 meses de anticipación, se ofrece un <strong className="font-semibold text-ink">reembolso total</strong>. Si la cancelación ocurre dentro de los 2 meses previos, se otorga un <strong className="font-semibold text-ink">reembolso del 50%</strong>.
                            </p>
                        </div>
                        
                        {/* Conclusión */}
                        <p className="font-sans text-sm text-ink/60 leading-relaxed font-light italic">
                            Estas políticas buscan garantizar una gestión equitativa y sostenible tanto para el usuario como para la administración del espacio.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
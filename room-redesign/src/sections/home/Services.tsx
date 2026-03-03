import React from 'react';

export const Services: React.FC = () => {
    // Arreglo de datos para iterar las tarjetas fácilmente
    const servicesData = [
        {
            num: '01',
            name: 'Art Exhibitions',
            desc: 'Curated showcases of contemporary artists, providing a dynamic platform for innovative visual expressions.',
            img: '/images/serviceshome.webp',
        },
        {
            num: '02',
            name: 'Private Events',
            desc: 'Exclusive architectural spaces tailored for intimate gatherings, corporate events, and cultural celebrations.',
            img: '/images/taller.webp',
        },
        {
            num: '03',
            name: 'Advisory & Curation',
            desc: 'Expert guidance for collectors and institutions in acquiring, managing, and displaying fine art portfolios.',
            img: '/images/serviceshome.webp',
        }
    ];

    return (
        <section id="services" className="w-full bg-bg text-ink py-16 md:py-24 border-y border-ink/10 transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 text-center">

                {/* Encabezado de la sección */}
                <span className="text-xs font-bold tracking-[0.18em] uppercase opacity-70 block mb-2">
                    Our Expertise
                </span>
                <h2 className="font-serif text-[clamp(2.375rem,6vw,4.625rem)] leading-none font-extrabold mb-10 md:mb-14">
                    What We Do.
                </h2>

                {/* Cuadrícula de 3 columnas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {servicesData.map((service, index) => (
                        <article key={index} className="group flex flex-col bg-bg-2 transition-transform duration-400 hover:-translate-y-1 overflow-hidden">

                            {/* Contenedor de Imagen con proporción 4:5 */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-ink/10">
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500 ease-out"
                                />
                            </div>

                            {/* Contenido de la Tarjeta */}
                            <div className="p-5 md:p-6 flex flex-col flex-grow">
                                <div className="flex items-baseline mb-1">
                                    <span className="text-xs font-bold tracking-[0.14em] opacity-70 mr-3 text-gold">
                                        {service.num}
                                    </span>
                                    <h3 className="font-serif text-lg md:text-xl font-bold">
                                        {service.name}
                                    </h3>
                                </div>
                                <p className="text-sm text-ink/80 leading-relaxed mt-2 max-w-[46ch]">
                                    {service.desc}
                                </p>
                            </div>

                        </article>
                    ))}
                </div>

                {/* Botón inferior */}
                <div className="mt-12">
                    <a href="#contact" className="btn-pr">
                        Inquire Now
                    </a>
                </div>

            </div>
        </section>
    );
};
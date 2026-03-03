import React, { useState } from 'react';

// Simulamos una base de datos de artistas
const artistsData = [
    {
        id: '01',
        name: 'Isabella Rossi',
        category: 'Contemporary Sculpture',
        img: '/images/taller.webp',
    },
    {
        id: '02',
        name: 'Marcus Chen',
        category: 'Abstract Expressionism',
        img: '/images/serviceshome.webp',
    },
    {
        id: '03',
        name: 'Elena Volkov',
        category: 'Multimedia Installations',
        // Usamos taller de nuevo por ahora
        img: '/images/taller.webp',
    },
];

export const Artists: React.FC = () => {
    // Estado de React para saber qué artista está siendo "mirado" por el usuario
    const [activeArtist, setActiveArtist] = useState(artistsData[0]);

    return (
        <section id="artists" className="w-full bg-bg text-ink py-20 md:py-32 transition-colors duration-500 border-b border-ink/10">
            <div className="container mx-auto px-6 md:px-12">

                {/* Encabezado con Botón alineado */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.18em] uppercase opacity-70 block mb-3">
                            The Roster
                        </span>
                        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] font-extrabold tracking-tight">
                            Selected <br className="hidden md:block" /> Artists.
                        </h2>
                    </div>
                    <a href="#all-artists" className="btn-pr shrink-0">
                        View Directory
                    </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">

                    {/* Columna Izquierda: Lista interactiva de nombres */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        {artistsData.map((artist) => (
                            <div
                                key={artist.id}
                                onMouseEnter={() => setActiveArtist(artist)}
                                className={`group cursor-pointer py-8 md:py-10 border-b border-ink/20 transition-all duration-500 flex items-center justify-between ${activeArtist.id === artist.id ? 'opacity-100 pl-4 md:pl-8' : 'opacity-40 hover:opacity-80'
                                    }`}
                            >
                                <div>
                                    <span className="text-sm font-bold tracking-widest text-gold mb-2 block">
                                        {artist.id}
                                    </span>
                                    {/* El texto se desplaza ligeramente hacia la derecha al hacer hover */}
                                    <h3 className="font-serif text-3xl md:text-5xl font-light group-hover:translate-x-2 transition-transform duration-500 ease-out">
                                        {artist.name}
                                    </h3>
                                </div>
                                <span className="text-xs md:text-sm uppercase tracking-wider opacity-60 text-right max-w-[120px] md:max-w-none">
                                    {artist.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Columna Derecha: Imagen dinámica que cambia según el hover */}
                    <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative overflow-hidden bg-bg-2">
                        {artistsData.map((artist) => (
                            <img
                                key={artist.id}
                                src={artist.img}
                                alt={`Artwork by ${artist.name}`}
                                /* La magia visual: solo la imagen del artista activo tiene opacidad 1 y escala normal. Las demás se ocultan y crecen */
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeArtist.id === artist.id
                                        ? 'opacity-100 scale-100 z-10'
                                        : 'opacity-0 scale-110 z-0'
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
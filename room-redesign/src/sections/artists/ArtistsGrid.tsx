import React from 'react';

// Definimos la interfaz para nuestros artistas (TypeScript)
interface Artist {
    id: number;
    name: string;
    discipline: string;
    imageUrl: string;
}

// Datos de prueba (luego puedes conectarlo a un CMS o pasarlo por props)
const artistsData: Artist[] = [
    {
        id: 1,
        name: 'Elena Rostova',
        discipline: 'Contemporary Painting',
        imageUrl: '/images/pinturas.png', // Usando las imágenes de tu HTML
    },
    {
        id: 2,
        name: 'Julian Vance',
        discipline: 'Visual Arts & Photography',
        imageUrl: '/images/chicas.jpg',
    },
    {
        id: 3,
        name: 'Sofia Lin',
        discipline: 'Immersive Installations',
        imageUrl: '/images/PinturaGrecia (7).jpg', // Ajusta el nombre según tus assets reales
    },
    {
        id: 4,
        name: 'Marcus Thorne',
        discipline: 'Sculpture & Form',
        imageUrl: '/images/culura.jpg',
    },
    {
        id: 5,
        name: 'Amelie Laurent',
        discipline: 'Textile Art',
        imageUrl: '/images/convivencia.png',
    },
    {
        id: 6,
        name: 'David Chen',
        discipline: 'Digital & Light Art',
        imageUrl: '/images/proyeccion.jpg',
    }
];

export const ArtistsGrid: React.FC = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-bg text-ink relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Encabezado de la Sección */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        Nuestra Colección
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Residentes & <span className="italic font-light">Invitados</span>
                    </h2>
                </div>

                {/* Cuadrícula de Artistas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                    {artistsData.map((artist) => (
                        <article 
                            key={artist.id} 
                            className="group flex flex-col cursor-pointer"
                        >
                            {/* Contenedor de la Imagen con efecto Hover */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-ink-2/5 rounded-sm">
                                <img 
                                    src={artist.imageUrl} 
                                    alt={`Obra de ${artist.name}`} 
                                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-luxury group-hover:scale-105"
                                />
                                {/* Overlay oscuro sutil que aparece en hover para darle drama */}
                                <div className="absolute inset-0 bg-ink/0 transition-colors duration-[1000ms] ease-luxury group-hover:bg-ink/10"></div>
                            </div>

                            {/* Información del Artista */}
                            <div className="flex flex-col">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 transition-colors duration-500 group-hover:text-gold">
                                    {artist.name}
                                </h3>
                                <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-muted">
                                    {artist.discipline}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botón opcional para cargar más o ver archivo completo */}
                <div className="mt-20 flex justify-center">
                    <button className="btn-pr">
                        Ver Archivo Completo
                    </button>
                </div>

            </div>
        </section>
    );
};
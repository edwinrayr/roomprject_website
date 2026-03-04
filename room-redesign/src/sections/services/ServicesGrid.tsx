import React from 'react';

// Interfaz estricta basada en tu HTML
interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

// Información 100% copiada de tu archivo servicios.html
const servicesData: Service[] = [
    {
        id: '01',
        title: 'Exposiciones de Arte',
        description: 'Nuestro espacio ofrece el entorno perfecto para exhibir talento y creatividad. Con una iluminación cuidadosamente diseñada, amplias áreas y una atmósfera contemporánea, tus obras podrán brillar y conectar con el público de manera única. Ideal para exposiciones individuales, colectivas o lanzamientos artísticos que merecen un escenario de alto nivel.',
        imageUrl: '/images/pinturas.png',
    },
    {
        id: '02',
        title: 'Talleres Culturales',
        description: 'Creamos el ambiente ideal para el aprendizaje, la colaboración y el intercambio cultural. Nuestras áreas se adaptan fácilmente a las necesidades de cada grupo, ofreciendo comodidad, buena acústica y un entorno inspirador. Perfecto para talleres creativos, círculos literarios, clases prácticas o encuentros que promuevan el desarrollo personal y artístico.',
        imageUrl: '/images/culura.jpg',
    },
    {
        id: '03',
        title: 'Cine-foros y Proyecciones',
        description: 'Disfruta de proyecciones con gran calidad visual y acústica en un espacio preparado para vivir el cine en comunidad. Ya sea un estreno independiente, un ciclo temático o un cine-foro con debate posterior, nuestros espacios brindan la comodidad y el ambiente adecuado para cada función. Ideal para cinéfilos, colectivos culturales o presentaciones audiovisuales.',
        imageUrl: '/images/proyeccion.jpg',
    },
    {
        id: '04',
        title: 'Reuniones privadas o familiares',
        description: 'Ofrecemos espacios íntimos y acogedores pensados para compartir momentos especiales en total privacidad. Ya sea una reunión familiar, un cumpleaños o una celebración personal, contamos con el ambiente, la flexibilidad y el servicio que harán de tu evento una experiencia inolvidable. Cada detalle está pensado para que te sientas como en casa.',
        imageUrl: '/images/convivencia.png',
    },
    {
        id: '05',
        title: 'Conferencias, recitales o eventos formativos',
        description: 'Espacios diseñados para potenciar la comunicación y la experiencia de cada asistente. Equipados con tecnología moderna, excelente acústica y un diseño elegante, son ideales para conferencias, presentaciones, recitales o capacitaciones. Comodidad, profesionalismo y estilo se combinan para que tu evento genere un verdadero impacto.',
        imageUrl: '/images/reunion.png',
    },
    {
        id: '06',
        title: 'Celebraciones pequeñas y eventos empresariales',
        description: 'Si buscas un lugar con estilo para convivencias, aniversarios o reuniones corporativas, este espacio ofrece el equilibrio perfecto entre elegancia y funcionalidad. Adaptamos cada rincón a tu tipo de evento, brindando atención personalizada, mobiliario versátil y un ambiente que fomenta la conexión y el disfrute. Cada celebración aquí se convierte en un recuerdo especial.',
        imageUrl: '/images/baile.png',
    }
];

export const ServicesGrid: React.FC = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-bg text-ink relative z-10" id="servicios">
            <div className="container-pr">
                
                {/* Encabezado copiado de tu HTML */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        ELIGE TU EXPERIENCIA
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        SERVICIOS
                    </h2>
                </div>

                {/* Cuadrícula de 6 tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                    {servicesData.map((service) => (
                        <article 
                            key={service.id} 
                            className="group flex flex-col h-full"
                        >
                            {/* Imagen con Aspect Ratio elegante y Zoom en Hover */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-ink-2/5 rounded-sm">
                                <img 
                                    src={service.imageUrl} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-luxury group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-ink/0 transition-colors duration-[1000ms] ease-luxury group-hover:bg-ink/10"></div>
                                
                                {/* Número flotante (01, 02...) */}
                                <div className="absolute top-4 left-4 bg-bg/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-ink tracking-widest">
                                    {service.id}
                                </div>
                            </div>

                            {/* Contenido de texto */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="font-serif text-2xl font-bold mb-4 transition-colors duration-500 group-hover:text-gold">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-sm md:text-base leading-relaxed text-muted flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botón de Cotización (Copiado de tu HTML) */}
                <div className="mt-20 flex justify-center">
                    <a href="#contacto" className="btn-pr">
                        Cotizar
                    </a>
                </div>

            </div>
        </section>
    );
};
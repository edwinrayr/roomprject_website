import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const Artists: React.FC = () => {
    const { t } = useTranslation(); // <-- Extraemos t

    // Movemos los datos adentro para usar t() y useMemo para optimizar
    const artistsData = useMemo(() => [
        {
            id: '01',
            name: 'Julianne Smyth',
            category: t('home_artists.categories.photography', 'Fine Art Photography'),
            img: '/images/artistas.webp',
        },
        {
            id: '02',
            name: 'Aris Thorne',
            category: t('home_artists.categories.sculpture', 'Neo-Classical Sculpture'),
            img: '/images/IMG_6892.webp',
        },
        {
            id: '03',
            name: 'Elena Volkov',
            category: t('home_artists.categories.curation', 'Contemporary Curation'),
            img: '/images/PinturaGrecia-_1_.webp',
        },
    ], [t]);

    const [activeArtist, setActiveArtist] = useState(artistsData[0]);

    // Actualizamos el artista activo si cambia el idioma para mantener la consistencia
    useEffect(() => {
        setActiveArtist(prev => artistsData.find(a => a.id === prev.id) || artistsData[0]);
    }, [artistsData]);

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="artists"
            ref={sectionRef}
            className="w-full bg-bg text-ink py-24 md:py-32 lg:py-40 transition-colors duration-500 border-b border-ink/10 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-8">
                    <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <span className="text-xs font-bold tracking-[0.18em] uppercase opacity-70 block mb-3 text-gold">
                            {t('home_artists.eyebrow', 'The Roster')}
                        </span>
                        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] font-extrabold tracking-tight">
                            {t('home_artists.title_1', 'Selected')} <br className="hidden md:block" /> {t('home_artists.title_2', 'Artists.')}
                        </h2>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <a href="#all-artists" className="btn-pr shrink-0">
                            {t('home_artists.cta', 'View Directory')}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">

                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        {artistsData.map((artist, index) => (
                            <div
                                key={artist.id}
                                onMouseEnter={() => setActiveArtist(artist)}
                                className={`group cursor-pointer py-8 md:py-10 border-b border-ink/20 transition-all duration-[800ms] flex items-center justify-between transform ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                    } ${activeArtist.id === artist.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                                    }`}
                                style={{ transitionDelay: isVisible ? `${400 + (index * 150)}ms` : '0ms' }}
                            >
                                <div className="flex items-center gap-6 md:gap-8">
                                    <div className={`transition-all duration-500 overflow-hidden flex items-center justify-center ${activeArtist.id === artist.id ? 'w-6 opacity-100' : 'w-0 opacity-0'}`}>
                                        <ArrowRight className="text-gold shrink-0" size={24} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <span className="text-sm font-bold tracking-widest text-gold mb-2 block">
                                            {artist.id}
                                        </span>
                                        <h3 className={`font-serif text-3xl md:text-5xl font-light transition-all duration-500 ease-out ${activeArtist.id === artist.id ? 'translate-x-0' : '-translate-x-4 group-hover:-translate-x-2'}`}>
                                            {artist.name}
                                        </h3>
                                    </div>
                                </div>
                                <span className="text-xs md:text-sm uppercase tracking-wider opacity-60 text-right max-w-[120px] md:max-w-none">
                                    {artist.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative overflow-hidden bg-ink/5 transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-95'
                            }`}
                    >
                        {artistsData.map((artist) => (
                            <img
                                key={artist.id}
                                src={artist.img}
                                alt={`Artwork by ${artist.name}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeArtist.id === artist.id
                                        ? 'opacity-100 scale-100 z-10'
                                        : 'opacity-0 scale-110 z-0'
                                    }`}
                            />
                        ))}
                        <div className="absolute inset-4 border border-bg/20 z-20 pointer-events-none mix-blend-overlay"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};
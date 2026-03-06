import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Artists: React.FC = () => {
    const { t } = useTranslation();

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

    // Predeterminado el primer artista (01)
    const [activeArtistId, setActiveArtistId] = useState<string | null>(artistsData[0].id);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Lógica para Escritorio (Hover)
    const handleMouseEnter = (id: string) => {
        if (window.innerWidth >= 1024) setActiveArtistId(id);
    };

    // Lógica para Móvil (Click / Toggle)
    const handleArtistClick = (id: string) => {
        if (window.innerWidth < 1024) {
            setActiveArtistId(activeArtistId === id ? null : id);
        }
    };

    return (
        <section
            id="artists"
            ref={sectionRef}
            /* OPTIMIZACIÓN DE ESPACIOS: py-10 en móvil, py-16 md:py-20 en desktop */
            className="w-full bg-bg text-ink py-10 md:py-16 lg:py-20 border-b border-ink/5 overflow-hidden transition-all duration-700"
        >
            <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Cabecera Compacta y Centrada en móvil */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 lg:mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 block mb-2 text-gold">
                            {t('home_artists.eyebrow', 'The Roster')}
                        </span>
                        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-none font-extrabold tracking-tighter">
                            {t('home_artists.title_1', 'Selected')} <br className="hidden md:block" /> 
                            <span className="italic font-light">{t('home_artists.title_2', 'Artists.')}</span>
                        </h2>
                    </div>

                    <div className="shrink-0 md:mb-1">
                        <a href="/artists" className="group relative inline-flex items-center gap-3 font-bold text-[9px] tracking-[0.3em] uppercase py-2.5 px-6 border border-ink/10 rounded-full hover:bg-ink hover:text-bg transition-all duration-500">
                            {t('home_artists.cta', 'View Directory')}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-0 lg:gap-20 items-stretch">
                    
                    {/* LISTA DE ARTISTAS: Nombres más grandes y paddings compactos */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        {artistsData.map((artist, index) => {
                            const isActive = activeArtistId === artist.id;
                            
                            return (
                                <div key={artist.id} className="w-full border-b border-ink/5">
                                    <button
                                        onMouseEnter={() => handleMouseEnter(artist.id)}
                                        onClick={() => handleArtistClick(artist.id)}
                                        className={`w-full py-6 md:py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left transition-all duration-500 group
                                        ${isActive ? 'opacity-100' : 'opacity-30 lg:opacity-40 hover:opacity-100'}`}
                                    >
                                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 lg:gap-12">
                                            <span className="text-[9px] font-mono tracking-widest text-gold">{artist.id}</span>
                                            {/* OPTIMIZACIÓN: Nombres más grandes en Desktop (lg:text-7xl) */}
                                            <h3 className={`font-serif text-3xl md:text-5xl lg:text-7xl font-light tracking-tight transition-all duration-700 ${isActive ? 'lg:translate-x-4 text-gold' : ''}`}>
                                                {artist.name}
                                            </h3>
                                        </div>
                                        
                                        <div className="flex items-center gap-4">
                                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">
                                                {artist.category}
                                            </span>
                                            <ChevronDown className={`lg:hidden text-gold transition-transform duration-500 ${isActive ? 'rotate-180' : 'rotate-0'}`} size={14} />
                                        </div>
                                    </button>

                                    {/* MÓVIL: Imagen Acordeón (Verticalidad corregida) */}
                                    <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-luxury ${isActive ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                                        <div className="relative w-full max-w-[400px] mx-auto aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                                            <img src={artist.img} alt={artist.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ESCRITORIO: Visual Showcase a la derecha (Verticalidad corregida) */}
                    <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-ink/5 rounded-sm shadow-2xl min-h-[600px]">
                        {artistsData.map((artist) => (
                            <div
                                key={artist.id}
                                className={`absolute inset-0 transition-all duration-[1200ms] ease-luxury transform
                                ${activeArtistId === artist.id ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                            >
                                <img 
                                    src={artist.img} 
                                    alt={artist.name} 
                                    className="w-full h-full object-cover transition-transform duration-[10s] ease-linear hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply"></div>
                            </div>
                        ))}
                        {/* Marco decorativo minimalista */}
                        <div className="absolute inset-8 border border-bg/10 z-20 pointer-events-none mix-blend-overlay"></div>
                    </div>

                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent opacity-50 pointer-events-none"></div>
        </section>
    );
};
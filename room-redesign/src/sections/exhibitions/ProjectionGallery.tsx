import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, Film, VolumeX } from 'lucide-react';

export const ProjectionGallery: React.FC = () => {
    const { t } = useTranslation();
    const [isMuted, setIsMuted] = useState(true); 
    
    const videoProjections = [
        { id: 1, src: '/videos/pro1.webm', title: 'Sonic Architecture' },
        { id: 2, src: '/videos/pro2.webm', title: 'Visual Pulse' },
        { id: 3, src: '/videos/pro3.webm', title: 'Atmospheric Flow' },
        { id: 4, src: '/videos/pro4.webm', title: 'Digital Resonance' },
    ];

    const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(videoProjections.length).fill(null));

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting) {
                        // Respetamos el estado isMuted al hacer auto-play en móvil
                        video.muted = isMuted;
                        video.play().catch(() => {
                            video.muted = true;
                            video.play();
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.6 }
        );

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => observer.disconnect();
    }, [isMuted]); // Re-ejecutar si cambia isMuted para actualizar videos en pantalla

    const handlePlayback = (e: React.MouseEvent<HTMLVideoElement>, start: boolean) => {
        if (window.innerWidth <= 768) return; 

        const video = e.currentTarget;
        if (start) {
            // FIX: En lugar de 'false', usamos el valor de 'isMuted'
            video.muted = isMuted; 
            video.play().catch(() => {
                video.muted = true;
                video.play();
            });
        } else {
            video.pause();
            video.muted = true;
            video.currentTime = 0;
        }
    };

    const toggleGlobalMute = () => {
        const nextMutedState = !isMuted;
        setIsMuted(nextMutedState);
        
        // Aplicamos el cambio inmediatamente a todos los videos
        videoRefs.current.forEach(v => {
            if (v) v.muted = nextMutedState;
        });
    };

    return (
        <section className="cinema-dark-room film-strip-border w-full py-20 md:py-32 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-20 relative z-10">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-28 gap-8 text-center md:text-left items-center md:items-start">
                    <div className="max-w-2xl flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <Film className="text-gold" size={16} />
                            <span className="text-gold text-xs font-bold tracking-[0.5em] uppercase block">
                                {t('projections.eyebrow', 'The Screening Room')}
                            </span>
                        </div>
                        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold text-white tracking-tighter">
                            {t('projections.title', 'Cinematic')} <br />
                            <span className="italic font-light text-gold/80">{t('projections.subtitle', 'Projections.')}</span>
                        </h2>
                    </div>
                    
                    {/* Botón Maestro de Sonido */}
                    <button 
                        onClick={toggleGlobalMute}
                        className="group flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-4 border border-white/10 rounded-sm hover:bg-white/10 transition-all"
                    >
                        {isMuted ? (
                            <VolumeX size={18} className="text-white/40 group-hover:text-white transition-colors" />
                        ) : (
                            <Volume2 size={18} className="text-gold animate-pulse" />
                        )}
                        <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors">
                            {isMuted ? t('projections.tap_unmute', 'Sound Off') : t('projections.sound_on', 'Sound On')}
                        </p>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-x-20 md:gap-y-32">
                    {videoProjections.map((video, index) => (
                        <div key={video.id} className="group relative flex flex-col items-center">
                            <div className="art-spotlight opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative w-full aspect-video p-1 bg-[#1a1a1a] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 max-w-lg md:max-w-none">
                                <div className="w-full h-full overflow-hidden relative bg-black">
                                    <video 
                                        ref={(el) => { videoRefs.current[index] = el; }}
                                        src={video.src}
                                        loop 
                                        playsInline
                                        onMouseEnter={(e) => handlePlayback(e, true)}
                                        onMouseLeave={(e) => handlePlayback(e, false)}
                                        className="w-full h-full object-cover grayscale-0 md:grayscale-[0.8] md:group-hover:grayscale-0 scale-100 md:scale-105 md:group-hover:scale-100 cursor-pointer"
                                    />
                                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]"></div>
                                </div>
                            </div>

                            <div className="mt-8 text-center w-full px-4">
                                <h3 className="font-serif italic text-2xl text-white/90 mb-2">{video.title}</h3>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="h-[1px] w-4 md:w-8 bg-gold/30"></div>
                                    <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-gold/60">
                                        PRB-PRO_0{video.id} // 24 FPS
                                    </p>
                                    <div className="h-[1px] w-4 md:w-8 bg-gold/30"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent opacity-50 pointer-events-none"></div>
        </section>
    );
};
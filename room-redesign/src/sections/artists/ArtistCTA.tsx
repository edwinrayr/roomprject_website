import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ArtistCTA: React.FC = () => {
    const { t } = useTranslation();
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section
            ref={sectionRef}
            /* OPTIMIZACIÓN: Aumentamos py-16 en móvil y añadimos mb-4 para separar del Footer */
            className="w-full py-16 md:py-24 bg-bg flex justify-center px-6 md:px-8 relative z-20 mb-4"
        >
            {/* Contenedor: Eliminamos el h-[450px] fijo para que crezca según el contenido */}
            <div className={`relative w-full max-w-[80rem] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-[1200ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}>

                <div className="grid grid-cols-1 md:grid-cols-2 bg-bg-2">

                    {/* Mitad Contenido: Centrado total */}
                    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-10 md:p-16 lg:p-24 order-1">
                        
                        <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {t('artist_cta.subtitle', 'Private Viewing')}
                        </span>

                        <h2 className={`font-serif text-[clamp(2.2rem,5vw,4rem)] text-ink leading-[1.1] font-extrabold mb-6 tracking-tighter transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {t('artist_cta.title_1', 'Step into the')} <br />
                            <span className="italic font-light text-gold/80">{t('artist_cta.title_2', 'Studio.')}</span>
                        </h2>

                        <p className={`font-sans text-ink/60 text-sm md:text-base leading-relaxed mb-10 max-w-[40ch] transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {t('artist_cta.description', "Experience the creative process firsthand. Schedule a private viewing at Grecia Portorreal's studio or request the exclusive portfolio.")}
                        </p>

                        <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a href="/reserve" className="group w-64 sm:w-auto flex items-center justify-center gap-3 bg-ink text-bg px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-500 shadow-lg">
                                {t('artist_cta.book_btn', 'Book a Visit')}
                                <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a href="https://grecia-portorreal.ch/portofolio" target="_blank" rel="noopener noreferrer" className="group w-64 sm:w-auto flex items-center justify-center gap-3 border border-ink/10 text-ink px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-500">
                                {t('artist_cta.portfolio_btn', 'Request Portfolio')}
                                <Download size={14} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Mitad Imagen: Cambiamos h-72 por aspect-video para que sea responsivo */}
                    <div className="relative order-2 h-72 md:h-auto overflow-hidden">
                        <img
                            src="/images/taller.webp"
                            alt="Grecia Portorreal Art Studio"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-[8s] ease-out"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
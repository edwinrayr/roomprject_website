import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const WhoWeAre: React.FC = () => {
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
            /* COMPACTACIÓN: py-12 en móvil, py-20 en desktop */
            className="w-full py-12 md:py-20 bg-bg text-ink relative z-10 overflow-hidden transition-all duration-700"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                {/* COLUMNA DE CONTENIDO (Foco principal en móvil) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1">

                    {/* 1. Subtítulo */}
                    <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        {t('who_we_are.subtitle', 'Who We Are')}
                    </span>

                    {/* 2. Título */}
                    <h2 className={`font-serif text-[clamp(2.3rem,6vw,4.2rem)] leading-[1.05] font-extrabold tracking-tighter mb-8 transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {t('who_we_are.title_1', 'A space for')} <br className="hidden lg:block" />
                        <span className="italic font-light text-gold/80">{t('who_we_are.title_2', 'cultural resistance.')}</span>
                    </h2>

                    {/* 3. IMAGEN (SÓLO MÓVIL): Inyectada bajo el título */}
                    <div className={`lg:hidden w-full flex justify-center mb-10 transition-all duration-[1500ms] delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                        <div className="relative w-full max-w-[20rem] aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                            <img
                                src="/images/imagensalon2.webp"
                                alt="Project Room Bern Space"
                                className="w-full h-full object-cover filter brightness-95"
                            />
                        </div>
                    </div>

                    {/* 4. Bloque de Texto Biográfico */}
                    <div className={`font-sans text-ink/70 text-sm md:text-base lg:text-lg leading-relaxed space-y-6 max-w-[55ch] transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                        <p className="text-lg md:text-xl font-serif text-ink mb-6 leading-snug">
                            <strong className="text-gold/90">Project Room Bern</strong> {t('who_we_are.lead_text', 'is a new space, open to everyone and to art in all its forms.')}
                        </p>

                        <p>{t('who_we_are.p1', 'We continuously collaborate with emerging artists...')}</p>

                        <p>
                            {t('who_we_are.p2_1', 'Located in the heart of Bern, within the emblematic')} <strong>Das Dazwischen</strong>{t('who_we_are.p2_2', '—a vibrant center renowned for its eclectic programming...')}.
                        </p>

                        <p>{t('who_we_are.p3', 'By establishing ourselves in such a symbolic cornerstone...')}</p>

                    </div>
                </div>

                {/* COLUMNA DE IMAGEN (SÓLO ESCRITORIO): Oculta en móvil */}
                <div className={`hidden lg:block lg:col-span-5 relative group transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm z-10 shadow-2xl">
                        <img
                            src="/images/imagensalon2.webp"
                            alt="Project Room Bern Space"
                            className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                        />
                    </div>
                    {/* Marco decorativo: Sólo desktop */}
                    <div className="absolute -inset-6 border border-ink/10 z-0 translate-x-4 translate-y-4 transition-transform duration-[1200ms] ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
                </div>

            </div>
        </section>
    );
};
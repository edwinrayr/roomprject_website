import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const RulesContent: React.FC = () => {
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

    const rulesList = useMemo(() => [
        t('rules.items.rule_1'),
        t('rules.items.rule_2'),
        t('rules.items.rule_3'),
        t('rules.items.rule_4'),
        t('rules.items.rule_5')
    ], [t]);

    return (
        <section
            ref={sectionRef}
            /* OPTIMIZACIÓN DE ESPACIO: pt-0 en móvil y pt-4 en desktop para reducir el gap con el Hero */
            className="w-full pt-0 md:pt-4 pb-16 md:pb-24 bg-bg text-ink relative z-10 transition-all duration-1000"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

                    {/* COLUMNA DE CONTENIDO (Izquierda en Desktop) */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* 1. TÍTULO E INTRODUCCIÓN (mb-8 para acercarlo a la imagen) */}
                        <div className={`mb-8 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <h2 className="font-serif text-[clamp(2.1rem,5vw,3.5rem)] font-extrabold mb-4 tracking-tighter leading-tight">
                                {t('rules.title_1')} <br className="hidden md:block" /> 
                                <span className="italic font-light text-gold/80">{t('rules.title_2')}</span>
                            </h2>
                            <p className="font-sans text-ink/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-[50ch]">
                                {t('rules.intro_1')} <strong className="font-medium text-ink">Project Room Bern</strong>, {t('rules.intro_2')}
                            </p>
                        </div>

                        {/* 2. IMAGEN (SÓLO MÓVIL): Título -> Imagen -> Texto */}
                        <div className={`lg:hidden w-full mb-10 transition-all duration-[1500ms] delay-300 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'}`}>
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                                <img
                                    src="/images/504440699_18075163993909812_4565038911395423983_n.webp"
                                    className="w-full h-full object-cover filter grayscale"
                                    alt="Space Rules"
                                />
                                <div className="absolute bottom-4 left-4 bg-bg/95 backdrop-blur-md px-4 py-3 shadow-xl border-l-2 border-gold">
                                    <p className="font-serif italic text-base text-ink leading-none">{t('rules.badge_title')}</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. LISTA DE REGLAS */}
                        <div className="flex flex-col w-full">
                            {rulesList.map((rule, index) => (
                                <div
                                    key={index}
                                    className={`group flex items-start gap-5 py-6 lg:border-t border-t-0 border-ink/5 transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                                    style={{ transitionDelay: isVisible ? `${450 + (index * 100)}ms` : '0ms' }}
                                >
                                    <div className="flex-shrink-0 pt-1">
                                        <span className="font-serif italic text-xl md:text-2xl font-light text-gold/40 transition-colors duration-500 group-hover:text-gold">
                                            0{index + 1}.
                                        </span>
                                    </div>
                                    <p className="font-sans text-sm md:text-base lg:text-lg text-ink/80 font-medium tracking-tight leading-relaxed group-hover:text-ink transition-colors duration-300">
                                        {rule}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* 4. NOTA FINAL */}
                        <div className={`mt-10 w-full bg-ink text-bg p-8 md:p-10 rounded-sm transition-all duration-[1500ms] delay-800 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-[0.99] opacity-0'}`}>
                            <p className="font-serif italic text-xl md:text-2xl mb-4 opacity-90 tracking-tight">
                                "{t('rules.quote')}"
                            </p>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                                {t('rules.thanks')}
                            </span>
                        </div>
                    </div>

                    {/* COLUMNA DE IMAGEN (ESCRITORIO): Sticky a la derecha */}
                    <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32">
                        <div className={`relative w-full aspect-[3/4.5] overflow-hidden rounded-sm shadow-2xl transition-all duration-[1800ms] delay-400 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                            <img
                                src="/images/504440699_18075163993909812_4565038911395423983_n.webp"
                                alt="Project Room Bern"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[2.5s] ease-out"
                            />
                            <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>

                            <div className={`absolute bottom-6 left-6 bg-bg/95 backdrop-blur-md px-5 py-4 shadow-xl border-l-2 border-gold transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                                <p className="font-serif italic text-lg text-ink leading-none mb-1">{t('rules.badge_title')}</p>
                                <p className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold">{t('rules.badge_subtitle')}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
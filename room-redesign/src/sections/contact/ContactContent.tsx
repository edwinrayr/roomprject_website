import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ContactContent: React.FC = () => {
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

    const whatsappLink = `https://wa.me/41782378276?text=${encodeURIComponent(t('contact.whatsapp_msg', 'Hello Grecia, I would like information about Project Room Bern.'))}`;

    return (
        <section
            ref={sectionRef}
            /* REDUCCIÓN DE ESPACIO: Pegado al Hero */
            className="w-full pt-0 md:pt-4 pb-16 md:pb-24 bg-bg text-ink relative z-10 transition-all duration-1000"
            id="lets-talk"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* COLUMNA DE CONTENIDO (Izquierda en Desktop) */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        
                        {/* 1. TÍTULO Y SUBTÍTULO (Aparece primero en móvil) */}
                        <div className={`mb-10 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <h2 className="font-serif text-[clamp(2.3rem,5vw,4rem)] font-extrabold tracking-tighter mb-4 leading-none">
                                {t('contact.title_1', "Let's talk about")} <br className="hidden md:block" />
                                <span className="italic font-light text-gold/80">{t('contact.title_2', "your event.")}</span>
                            </h2>
                            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-bold">
                                {t('contact.subtitle', "Grecia Portorreal — Owner")}
                            </p>
                        </div>

                        {/* 2. IMAGEN (SÓLO MÓVIL): Título -> Imagen -> Texto */}
                        <div className={`lg:hidden w-full mb-12 transition-all duration-[1500ms] delay-300 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'}`}>
                            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                                <img
                                    src="/images/grecia.webp"
                                    alt="Grecia Portorreal"
                                    className="w-full h-full object-cover filter grayscale"
                                />
                            </div>
                        </div>

                        {/* 3. BIOGRAFÍA Y ENLACES (Seda en el revelado) */}
                        <div className={`font-sans text-ink/70 text-sm md:text-base lg:text-lg leading-relaxed space-y-6 mb-12 max-w-[55ch] transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <p>{t('contact.bio_p1_1')} <em className="font-serif italic text-ink">{t('contact.bio_p1_cum_laude')}</em> {t('contact.bio_p1_2')}</p>
                            <p>{t('contact.bio_p2_1')} <strong className="font-medium text-ink">Project Room Bern</strong> {t('contact.bio_p2_2')}</p>
                        </div>

                        {/* Canales Directos */}
                        <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 font-serif text-lg transition-all duration-[1200ms] delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <a href="tel:+41782378276" className="group flex items-center gap-3 hover:text-gold transition-colors duration-500">
                                <span className="text-gold text-[10px] font-sans font-bold tracking-widest opacity-50 group-hover:opacity-100">TEL</span> +41 78 237 82 76
                            </a>
                            <a href="mailto:greportorreal@gmail.com" className="group flex items-center gap-3 hover:text-gold transition-colors duration-500">
                                <span className="text-gold text-[10px] font-sans font-bold tracking-widest opacity-50 group-hover:opacity-100">MAIL</span> greportorreal@gmail.com
                            </a>
                        </div>

                        {/* Tarjetas Interactivas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {[ 
                                { label: t('contact.portfolio_label'), title: t('contact.website'), icon: <Globe />, href: "https://grecia-portorreal.ch/", delay: 600 },
                                { label: t('contact.whatsapp_label'), title: "WhatsApp", icon: null, href: whatsappLink, delay: 700 }
                            ].map((card, i) => (
                                <div key={i} className={`transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${card.delay}ms` }}>
                                    <a href={card.href} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden border border-ink/10 p-6 flex flex-col justify-between bg-bg hover:border-gold transition-all duration-700 rounded-sm min-h-[140px] text-left">
                                        <div className="absolute top-full left-0 w-full h-full bg-gold transition-transform duration-1000 ease-out group-hover:-translate-y-full -z-0"></div>
                                        <div className="relative z-10 flex justify-between items-start mb-6">
                                            {card.icon ? React.cloneElement(card.icon as React.ReactElement, { className: "w-6 h-6 text-ink group-hover:text-bg transition-colors duration-500", strokeWidth: 1.2 }) : (
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ink group-hover:text-bg transition-colors duration-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                            )}
                                            <ArrowUpRight className="w-5 h-5 text-ink group-hover:text-bg transition-all duration-700 opacity-0 group-hover:opacity-100" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="text-[9px] uppercase tracking-widest text-ink/40 group-hover:text-bg/60 block mb-1 font-bold">{card.label}</span>
                                            <h3 className="font-serif text-xl font-bold text-ink group-hover:text-bg transition-colors duration-500">{card.title}</h3>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Fotografía (Sticky en Desktop) */}
                    <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 lg:order-2">
                        <div className={`relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl transition-all duration-[1800ms] delay-400 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                            <img
                                src="/images/grecia.webp"
                                alt="Grecia Portorreal"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[2.5s]"
                            />
                            <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
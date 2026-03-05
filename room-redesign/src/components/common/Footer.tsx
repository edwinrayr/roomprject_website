import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, ArrowRight, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Importamos useTranslation

export const Footer: React.FC = () => {
    const { t, i18n } = useTranslation(); // <-- Extraemos t y la instancia i18n
    const currentYear = new Date().getFullYear();

    // Animaciones al hacer scroll
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (footerRef.current) observer.unobserve(footerRef.current);
                }
            },
            { threshold: 0.15 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    // Función para volver arriba suavemente
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Función para cambiar idioma
    const toggleLanguage = () => {
        const currentLang = i18n.language || 'en';
        const newLang = currentLang.startsWith('es') ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const isSpanish = i18n.language?.startsWith('es');

    // Enlaces de navegación con traducciones
    const exploreLinks = [
        { name: t('footer.links.home', 'Home'), path: '/' },
        { name: t('footer.links.about', 'About'), path: '/about' },
        { name: t('footer.links.services', 'Services'), path: '/services' },
        { name: t('footer.links.artists', 'Artists'), path: '/artists' },
        { name: t('footer.links.contact', 'Contact'), path: '/contact' }
    ];

    const legalLinks = [
        { name: t('footer.links.privacy', 'Privacy Policy'), path: '#' },
        { name: t('footer.links.terms', 'Terms of Service'), path: '#' },
        { name: t('footer.links.rules', 'Rules & Guidelines'), path: '/rules' }
    ];

    // Redes Sociales Limpias
    const socialLinks = [
        { Icon: Instagram, url: 'https://www.instagram.com/greciaportorreal/' },
        { Icon: Facebook, url: 'https://www.facebook.com/greciaportorreal12/' },
        { Icon: Linkedin, url: 'https://ch.linkedin.com/in/grecia-portorreal-6a42b72b4' }
    ];

    return (
        <footer
            ref={footerRef}
            className="w-full bg-bg-2 text-ink pt-24 md:pt-32 pb-8 transition-colors duration-500 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.2)]"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Tipografía Monumental de Marca */}
                <div className={`mb-20 md:mb-32 flex justify-center transition-all duration-[1500ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                    <h2 className="font-serif text-[clamp(2.5rem,11vw,12rem)] leading-[0.85] font-extrabold tracking-tighter text-ink text-center opacity-90">
                        PROJECT ROOM.
                    </h2>
                </div>

                {/* Sección Central: Cuadrícula de 4 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 lg:gap-x-8 mb-20 md:mb-24">

                    {/* Columna 1: Marca y Contacto */}
                    <div className={`flex flex-col items-start transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <img
                            src="/projectroombern-logo.png"
                            alt="Project Room Bern Logo"
                            className="h-8 md:h-10 w-auto object-contain mb-8 dark:invert-0 invert"
                        />
                        <p className="text-sm opacity-70 leading-relaxed max-w-[30ch] mb-8 font-sans">
                            {t('footer.description', 'An architectural canvas dedicated to contemporary masterpieces and immersive aesthetic experiences.')}
                        </p>
                        <a href="mailto:greportorreal@gmail.com" className="text-sm font-bold tracking-wide hover:text-gold transition-colors flex items-center gap-3 group">
                            <Mail size={16} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
                            greportorreal@gmail.com
                        </a>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div className={`flex flex-col transition-all duration-1000 delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <h4 className="font-serif text-lg md:text-xl font-bold mb-8 text-gold">{t('footer.explore', 'Explore')}</h4>
                        <nav className="flex flex-col gap-5">
                            {exploreLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-gold transition-all w-fit relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-luxury group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Columna 3: Legal e Información */}
                    <div className={`flex flex-col transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <h4 className="font-serif text-lg md:text-xl font-bold mb-8 text-gold">{t('footer.information', 'Information')}</h4>
                        <nav className="flex flex-col gap-5">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-gold transition-all w-fit relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-luxury group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Columna 4: Newsletter y Redes */}
                    <div className={`flex flex-col transition-all duration-1000 delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <h4 className="font-serif text-lg md:text-xl font-bold mb-8 text-gold">{t('footer.stay_updated', 'Stay Updated')}</h4>
                        <p className="text-sm opacity-70 mb-6 max-w-[30ch] leading-relaxed">
                            {t('footer.subscribe_text', 'Subscribe to receive exclusive invitations to upcoming exhibitions and private events.')}
                        </p>

                        <form className="relative flex items-center mb-10 border-b border-ink/20 focus-within:border-gold transition-colors pb-1">
                            <input
                                type="email"
                                placeholder={t('footer.enter_email', 'Enter your email')}
                                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-ink/40 text-ink font-light"
                            />
                            <button type="button" aria-label="Subscribe" className="text-ink hover:text-gold transition-transform duration-300 hover:translate-x-1 p-2">
                                <ArrowRight size={18} strokeWidth={1.5} />
                            </button>
                        </form>

                        {/* Redes Sociales */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ Icon, url }, idx) => (
                                <a
                                    key={idx}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-gold hover:text-white hover:-translate-y-1 hover:border-gold transition-all duration-500 ease-luxury"
                                    aria-label="Social Media Link"
                                >
                                    <Icon size={16} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sección Inferior: Copyright, Idioma y Volver Arriba */}
                <div className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t border-ink/10 gap-6 transition-all duration-1000 delay-[600ms] ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                    <p className="text-xs opacity-50 font-sans tracking-widest uppercase text-center md:text-left order-3 md:order-1">
                        &copy; {currentYear} Project Room Bern.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-ink/70 hover:text-gold transition-colors order-1 md:order-2"
                    >
                        {t('footer.back_to_top', 'Back to top')}
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-ink/10 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500 ease-luxury">
                            <ArrowUp size={14} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform duration-500 ease-luxury" />
                        </span>
                    </button>

                    {/* 👇 EL BOTÓN DE BANDERA IGUAL AL DE LA NAVBAR 👇 */}
                    <div className="flex items-center order-2 md:order-3">
                        <button 
                            onClick={toggleLanguage} 
                            className="transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100 flex items-center gap-2"
                            aria-label="Cambiar idioma"
                        >
                            <img 
                                src={isSpanish ? "https://flagcdn.com/w40/mx.png" : "https://flagcdn.com/w40/us.png"} 
                                alt={isSpanish ? "Español" : "English"} 
                                className="w-5 md:w-6 h-auto rounded-[2px] shadow-sm" 
                            />
                        </button>
                    </div>

                </div>

            </div>
        </footer>
    );
};
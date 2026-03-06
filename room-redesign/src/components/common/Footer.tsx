import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, ArrowRight, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentYear = new Date().getFullYear();

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
            { threshold: 0.1 }
        );

        if (footerRef.current) observer.observe(footerRef.current);
        return () => { if (footerRef.current) observer.unobserve(footerRef.current); };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 👇 LA MAGIA DE SEDA ESTÁ AQUÍ 👇
    const toggleLanguage = () => {
        const currentLang = i18n.language || 'en';
        const newLang = currentLang.startsWith('es') ? 'en' : 'es';
        
        // Seleccionamos el contenedor principal de React
        const rootElement = document.getElementById('root');
        
        if (rootElement) {
            // 1. Iniciamos el desvanecimiento y desenfoque suave
            rootElement.style.transition = 'opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1), filter 0.6s cubic-bezier(0.33, 1, 0.68, 1)';
            rootElement.style.opacity = '0';
            rootElement.style.filter = 'blur(4px)'; // Sutil efecto de niebla

            setTimeout(() => {
                // 2. Cambiamos el idioma mientras la pantalla está invisible
                i18n.changeLanguage(newLang);

                // 3. Volvemos a traer el contenido a la luz
                rootElement.style.opacity = '1';
                rootElement.style.filter = 'blur(0px)';
                
                // 4. Limpiamos los estilos para no afectar otros componentes
                setTimeout(() => {
                    rootElement.style.transition = '';
                    rootElement.style.filter = '';
                }, 600);
            }, 600); // Sincronizado con los 0.6s de la transición inicial
        } else {
            // Fallback por si acaso
            i18n.changeLanguage(newLang);
        }
    };

    const isSpanish = i18n.language?.startsWith('es');

    const exploreLinks = [
        { name: t('footer.links.home', 'Home'), path: '/' },
        { name: t('footer.links.about', 'About'), path: '/about' },
        { name: t('footer.links.exhibitions', 'Exhibitions'), path: '/exhibitions' },
        { name: t('footer.links.services', 'Services'), path: '/services' },
        { name: t('footer.links.artists', 'Artists'), path: '/artists' },
        { name: t('footer.links.contact', 'Contact'), path: '/contact' }
    ];

    const legalLinks = [
        { name: t('footer.links.privacy', 'Privacy Policy'), path: '#' },
        { name: t('footer.links.terms', 'Terms of Service'), path: '#' },
        { name: t('footer.links.rules', 'Rules & Guidelines'), path: '/rules' }
    ];

    const socialLinks = [
        { Icon: Instagram, url: 'https://www.instagram.com/greciaportorreal/', label: 'Instagram' },
        { Icon: Facebook, url: 'https://www.facebook.com/greciaportorreal12/', label: 'Facebook' },
        { Icon: Linkedin, url: 'https://ch.linkedin.com/in/grecia-portorreal-6a42b72b4', label: 'Linkedin' }
    ];

    return (
        <footer
            ref={footerRef}
            className="w-full bg-bg-2 text-ink pt-20 md:pt-32 pb-8 transition-all duration-1000 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.04)]"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* MARCA MONUMENTAL */}
                <div className={`mb-16 md:mb-28 flex justify-center transition-all duration-[1800ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    <h2 className="font-serif text-[clamp(2.4rem,11vw,11rem)] leading-[0.8] font-extrabold tracking-tighter text-ink text-center opacity-90">
                        PROJECT ROOM.
                    </h2>
                </div>

                {/* CUADRÍCULA CENTRAL */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20">

                    {/* Branding */}
                    <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <img src="/projectroombern-logo.png" alt="Logo" className="h-8 md:h-10 w-auto mb-8 invert dark:invert-0" />
                        <p className="text-sm opacity-60 leading-relaxed max-w-[28ch] mb-8 font-sans">
                            {t('footer.description', 'An architectural canvas dedicated to contemporary masterpieces and immersive aesthetic experiences.')}
                        </p>
                        <a href="mailto:greportorreal@gmail.com" className="text-xs font-bold tracking-widest hover:text-gold transition-colors flex items-center gap-3 group uppercase">
                            <Mail size={14} strokeWidth={2} />
                            greportorreal@gmail.com
                        </a>
                    </div>

                    {/* Explore */}
                    <div className={`flex flex-col items-center lg:items-start transition-all duration-[1200ms] delay-[400ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <h4 className="font-serif text-lg font-bold mb-8 text-gold/80 uppercase tracking-tighter">{t('footer.explore', 'Explore')}</h4>
                        <nav className="flex flex-col gap-4 items-center lg:items-start">
                            {exploreLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-gold transition-all relative group w-fit">
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Information */}
                    <div className={`flex flex-col items-center lg:items-start transition-all duration-[1200ms] delay-[600ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <h4 className="font-serif text-lg font-bold mb-8 text-gold/80 uppercase tracking-tighter">{t('footer.information', 'Information')}</h4>
                        <nav className="flex flex-col gap-4 items-center lg:items-start">
                            {legalLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-gold transition-all relative group w-fit">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Stay Updated */}
                    <div className={`flex flex-col items-center lg:items-start transition-all duration-[1200ms] delay-[800ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <h4 className="font-serif text-lg font-bold mb-8 text-gold/80 uppercase tracking-tighter">{t('footer.stay_updated', 'Stay Updated')}</h4>
                        <p className="text-xs opacity-60 mb-8 max-w-[25ch] leading-relaxed text-center lg:text-left">
                            {t('footer.subscribe_text', 'Subscribe to receive exclusive invitations to upcoming exhibitions and private events.')}
                        </p>
                        <form className="relative w-full max-w-[240px] flex items-center mb-10 border-b border-ink/10 focus-within:border-gold transition-all pb-2">
                            <input type="email" placeholder={t('footer.enter_email', 'Enter email')} className="w-full bg-transparent text-[10px] uppercase tracking-widest outline-none placeholder:text-ink/30 text-ink font-bold" />
                            <button type="button" className="text-ink hover:text-gold transition-transform hover:translate-x-1"><ArrowRight size={16} /></button>
                        </form>
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ Icon, url, label }, idx) => (
                                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-gold hover:text-bg hover:border-gold transition-all duration-500">
                                    <Icon size={14} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BARRA INFERIOR */}
                <div className={`flex flex-col md:flex-row items-center justify-between pt-10 lg:border-t border-t-0 border-ink/5 gap-8 transition-all duration-1000 delay-[1000ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    
                    <p className="text-[9px] opacity-40 font-bold tracking-[0.3em] uppercase order-3 md:order-1">
                        &copy; {currentYear} Project Room Bern.
                    </p>

                    <button onClick={scrollToTop} className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60 hover:text-gold transition-colors order-1 md:order-2">
                        {t('footer.back_to_top', 'Back to top')}
                        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-ink/10 group-hover:border-gold transition-all duration-500">
                            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </button>

                    <div className="flex items-center order-2 md:order-3">
                        <button onClick={toggleLanguage} className="transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100 flex items-center gap-2">
                            {/* 👇 AQUÍ ESTÁ EL CAMBIO A es.png 👇 */}
                            <img src={isSpanish ? "https://flagcdn.com/w40/es.png" : "https://flagcdn.com/w40/us.png"} alt="Flag" className="w-5 h-auto rounded-[1px] grayscale-[0.5] hover:grayscale-0 transition-all" />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};
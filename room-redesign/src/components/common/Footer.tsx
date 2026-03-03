import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
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
            { threshold: 0.1 } // Se activa rápido al llegar al footer
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

    return (
        <footer
            ref={footerRef}
            className="w-full bg-bg-2 text-ink pt-20 md:pt-32 pb-8 transition-colors duration-500 overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Tipografía Monumental de Marca */}
                <div className={`mb-16 md:mb-24 flex justify-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="font-serif text-[clamp(3rem,12vw,12rem)] leading-[0.8] font-extrabold tracking-tighter text-ink text-center opacity-90">
                        PROJECT ROOM.
                    </h2>
                </div>

                {/* Sección Central: Cuadrícula de 4 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24">

                    {/* Columna 1: Marca y Contacto */}
                    <div className={`flex flex-col items-start transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <img
                            src="/projectroombern-logo.png"
                            alt="Project Room Logo"
                            className="h-8 md:h-10 w-auto object-contain mb-6 dark:invert-0 invert"
                        />
                        <p className="text-sm opacity-80 leading-relaxed max-w-[30ch] mb-6 font-sans">
                            An architectural canvas dedicated to contemporary masterpieces and immersive aesthetic experiences.
                        </p>
                        <a href="mailto:contact@projectroom.com" className="text-sm font-semibold hover:text-gold transition-colors flex items-center gap-3 group">
                            <Mail size={16} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
                            contact@projectroom.com
                        </a>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div className={`flex flex-col transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h4 className="font-serif text-lg md:text-xl font-bold mb-6 text-gold">Explore</h4>
                        <nav className="flex flex-col gap-4">
                            {['Exhibitions', 'Artists', 'About', 'Contact'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-gold transition-all w-fit relative group">
                                    {item}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Columna 3: Legal e Información */}
                    <div className={`flex flex-col transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h4 className="font-serif text-lg md:text-xl font-bold mb-6 text-gold">Information</h4>
                        <nav className="flex flex-col gap-4">
                            {['Privacy Policy', 'Terms of Service', 'Press', 'Careers'].map((item) => (
                                <a key={item} href="#" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-gold transition-all w-fit relative group">
                                    {item}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Columna 4: Newsletter y Redes */}
                    <div className={`flex flex-col transition-all duration-1000 delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h4 className="font-serif text-lg md:text-xl font-bold mb-6 text-gold">Stay Updated</h4>
                        <p className="text-sm opacity-80 mb-4 max-w-[30ch]">
                            Subscribe to receive exclusive invitations to upcoming exhibitions.
                        </p>

                        {/* Input de Newsletter */}
                        <form className="relative flex items-center mb-8 border-b border-ink/20 focus-within:border-gold transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-ink/40 text-ink"
                            />
                            <button type="button" aria-label="Subscribe" className="text-ink hover:text-gold transition-colors p-2">
                                <ArrowRight size={18} strokeWidth={1.5} />
                            </button>
                        </form>

                        <div className="flex items-center gap-3">
                            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-bg hover:-translate-y-1 hover:border-ink transition-all duration-300"
                                    aria-label="Social Media Link"
                                >
                                    <Icon size={16} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sección Inferior: Copyright, Idioma y Volver Arriba */}
                <div className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t border-ink/10 gap-6 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                    <p className="text-xs opacity-60 font-sans tracking-wide text-center md:text-left order-3 md:order-1">
                        &copy; {currentYear} Project Room. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink hover:text-gold transition-colors order-1 md:order-2"
                    >
                        Back to top
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink/5 group-hover:bg-gold/10 transition-colors">
                            <ArrowUp size={14} strokeWidth={2} className="group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </button>

                    <div className="flex gap-4 text-xs font-bold tracking-[0.2em] uppercase opacity-80 order-2 md:order-3">
                        <button className="hover:text-gold transition-colors">EN</button>
                        <span className="opacity-30">|</span>
                        <button className="hover:text-gold transition-colors">ES</button>
                    </div>

                </div>

            </div>
        </footer>
    );
};
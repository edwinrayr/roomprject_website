import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    const navLinks = [
        { name: 'Exhibitions', href: '#exhibitions' },
        { name: 'Artists', href: '#artists' },
        { name: 'About', href: '#about' },
    ];

    return (
        <>
            <header
                className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] lg:w-[85%] max-w-7xl transition-all duration-500 rounded-full border ${isScrolled
                        ? 'bg-bg/85 backdrop-blur-md border-ink/10 shadow-2xl py-2.5 md:py-3 px-6 md:px-8'
                        : 'bg-transparent border-transparent py-5 md:py-6 px-6 md:px-8'
                    }`}
            >
                <div className="w-full grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">

                    {/* ZONA IZQUIERDA: Logo */}
                    <div className="flex justify-start z-[60]">
                        <a href="/" className="relative overflow-hidden rounded-sm group block">
                            <img
                                src="/projectroombern-logo.png"
                                alt="ProjectRoom Logo"
                                /* Lógica Camaleónica en el Logo: 
                                   - Si no hay scroll: Forzamos a blanco puro (brightness-0 invert) para que contraste con el Hero oscuro.
                                   - Si hay scroll: Usa tu lógica normal de tema (dark:invert-0 invert).
                                */
                                className={`h-10 md:h-16 w-auto object-contain transition-all duration-700 group-hover:scale-105 ${isScrolled ? 'dark:invert-0 invert' : 'brightness-0 invert'
                                    }`}
                            />
                        </a>
                    </div>

                    {/* ZONA CENTRAL: Enlaces de Navegación */}
                    <nav className="hidden md:flex justify-center items-center gap-8 lg:gap-10 z-[60]">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                /* Lógica Camaleónica en Textos: Blanco si está arriba, text-ink si hace scroll */
                                className={`text-sm font-medium tracking-wide relative group overflow-hidden transition-colors duration-300 ${isScrolled ? 'text-ink' : 'text-white'
                                    }`}
                            >
                                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                                    {link.name}
                                </span>
                                <span className="absolute top-0 left-0 z-10 transition-transform duration-300 translate-y-full group-hover:translate-y-0 block text-gold">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </nav>

                    {/* ZONA DERECHA: Controles y Botón */}
                    <div className="flex items-center justify-end gap-3 md:gap-5 z-[60]">

                        {/* Botón de Contacto (Camaleónico) */}
                        <a
                            href="#contact"
                            className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${isScrolled
                                    ? 'bg-ink text-bg hover:bg-gold hover:text-white'
                                    : 'bg-white text-black hover:bg-gold hover:text-white'
                                }`}
                        >
                            Contact
                        </a>

                        {/* Toggle de Tema Dual (Camaleónico) */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center ${isScrolled ? 'text-ink hover:bg-ink/10' : 'text-white hover:bg-white/20'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={19} strokeWidth={1.5} /> : <Sun size={19} strokeWidth={1.5} />}
                        </button>

                        {/* Menú Hamburguesa (Camaleónico) */}
                        <button
                            onClick={toggleMenu}
                            className={`md:hidden p-2 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center ${isScrolled ? 'text-ink hover:bg-ink/10' : 'text-white hover:bg-white/20'
                                }`}
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Menú Mobile Fullscreen (Se mantiene igual, siempre toma colores del tema) */}
            <div
                className="fixed inset-0 bg-bg z-[55] flex flex-col justify-center px-8 transition-all duration-700 pointer-events-none"
                style={{
                    clipPath: isMenuOpen ? 'circle(150% at calc(100% - 3rem) 3rem)' : 'circle(0% at calc(100% - 3rem) 3rem)',
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                }}
            >
                <div className={`absolute top-6 left-6 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src="/projectroombern-logo.png"
                        alt="ProjectRoom Logo"
                        className="h-10 w-auto dark:invert-0 invert"
                    />
                </div>

                <nav className="flex flex-col gap-6">
                    {[...navLinks, { name: 'Contact', href: '#contact' }].map((link, index) => (
                        <div key={link.name} className="overflow-hidden">
                            <a
                                href={link.href}
                                onClick={toggleMenu}
                                className={`block text-4xl font-serif font-light text-ink transition-transform duration-700 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                                    }`}
                                style={{ transitionDelay: `${isMenuOpen ? index * 100 + 300 : 0}ms` }}
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                </nav>

                <div className={`mt-12 overflow-hidden transition-all duration-700 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-4 delay-0'}`}>
                    <div className="w-full h-px bg-ink/20 mb-6"></div>
                    <p className="text-ink/60 text-sm font-light uppercase tracking-widest">
                        {theme === 'light' ? 'Light Mode Active' : 'Dark Mode Active'}
                    </p>
                </div>
            </div>
        </>
    );
};
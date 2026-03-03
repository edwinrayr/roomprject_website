import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    // Inicializamos el estado en 'light' para que sea el tema por defecto
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Manejo del scroll para el efecto glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manejo del tema dual
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    // Manejo del bloqueo de scroll
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

    const leftLinks = [
        { name: 'Exhibitions', href: '#exhibitions' },
        { name: 'Artists', href: '#artists' },
    ];

    const rightLinks = [
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Navbar Principal */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                    ? 'bg-bg/90 backdrop-blur-md border-ink/10 py-3 md:py-4'
                    : 'bg-transparent border-transparent py-5 md:py-6'
                    }`}
            >
                {/* Contenedor relativo para poder centrar elementos de forma absoluta */}
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative min-h-[40px]">

                    {/* Logo Móvil (Visible solo en pantallas pequeñas, alineado a la izquierda) */}
                    <div className="md:hidden flex justify-start z-[60]">
                        <a href="/" className="relative overflow-hidden rounded-sm group block">
                            <img
                                src="/projectroombern-logo.png"
                                alt="ProjectRoom Logo"
                                className="h-9 w-auto object-contain transition-transform duration-700 group-hover:scale-105 dark:invert-0 invert"
                            />
                        </a>
                    </div>

                    {/* Bloque Central de Navegación (Desktop) - Logo y Enlaces pegados */}
                    <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:gap-14 z-[60] w-max">

                        {/* Enlaces Izquierdos */}
                        <div className="flex items-center gap-8 lg:gap-10">
                            {leftLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium tracking-wide text-ink relative group overflow-hidden"
                                >
                                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                                        {link.name}
                                    </span>
                                    <span className="absolute top-0 left-0 z-10 transition-transform duration-300 translate-y-full group-hover:translate-y-0 block text-gold">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Logo Central (Desktop) */}
                        <a href="/" className="relative overflow-hidden rounded-sm group block shrink-0">
                            <img
                                src="/logo-blanco.jpg"
                                alt="Nedimi Logo"
                                className="h-12 lg:h-14 w-auto object-contain transition-transform duration-700 group-hover:scale-105 dark:invert-0 invert"
                            />
                        </a>

                        {/* Enlaces Derechos */}
                        <div className="flex items-center gap-8 lg:gap-10">
                            {rightLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium tracking-wide text-ink relative group overflow-hidden"
                                >
                                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                                        {link.name}
                                    </span>
                                    <span className="absolute top-0 left-0 z-10 transition-transform duration-300 translate-y-full group-hover:translate-y-0 block text-gold">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Controles Derechos (Tema Dual y Menú Móvil) */}
                    <div className="flex items-center justify-end gap-4 md:gap-6 z-[60] ml-auto">

                        {/* Toggle Tema Dual */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-ink hover:bg-ink/10 transition-colors duration-300 cursor-pointer flex items-center justify-center"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
                        </button>

                        {/* Botón Menú Mobile */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-ink hover:bg-ink/10 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center"
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Menú Mobile Fullscreen */}
            <div
                className="fixed inset-0 bg-bg z-[55] flex flex-col justify-center px-8 transition-all duration-700 pointer-events-none"
                style={{
                    clipPath: isMenuOpen ? 'circle(150% at calc(100% - 3rem) 3rem)' : 'circle(0% at calc(100% - 3rem) 3rem)',
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                }}
            >
                <nav className="flex flex-col gap-6">
                    {[...leftLinks, ...rightLinks].map((link, index) => (
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
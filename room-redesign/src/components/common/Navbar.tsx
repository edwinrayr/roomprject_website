import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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
        { name: 'Exhibitions', href: '/#exhibitions', isHash: true },
        { name: 'Artists', href: '/artists', isHash: false },
        { name: 'Services', href: '/services', isHash: false },
        { name: 'About', href: '/about', isHash: false },
        { name: 'Rules', href: '/rules', isHash: false },
        { name: 'Contact', href: '/contact', isHash: false },
    ];

    return (
        <>
            {/* Cabecera Editorial Persistente: Siempre legible, con cristal esmerilado */}
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-[600ms] ease-luxury border-b border-ink/10 ${isScrolled
                        ? 'bg-bg/95 backdrop-blur-xl py-3 shadow-sm'
                        : 'bg-bg/85 backdrop-blur-md py-5 md:py-6'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-[200px_1fr_200px] items-center">

                    {/* LADO IZQUIERDA: Logo */}
                    <div className="flex justify-start z-[60]">
                        <Link to="/" className="relative overflow-hidden group block">
                            <img
                                src="/projectroombern-logo.png"
                                alt="ProjectRoom Logo"
                                /* Al tener fondo constante, el logo siempre respeta el tema actual */
                                className="h-9 md:h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-105 dark:invert-0 invert"
                            />
                        </Link>
                    </div>

                    {/* CENTRO: Enlaces de Navegación */}
                    <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-10 z-[60]">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[11px] xl:text-xs font-bold uppercase tracking-[0.18em] text-ink hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-[11px] xl:text-xs font-bold uppercase tracking-[0.18em] text-ink hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* LADO DERECHA: Controles */}
                    <div className="flex items-center justify-end gap-4 z-[60]">

                        {/* Botón Reserve Minimalista */}
                        <Link
                            to="/reserve"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-ink text-ink text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-ink hover:text-bg"
                        >
                            Reserve
                        </Link>

                        {/* Toggle Tema */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-ink hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
                        </button>

                        {/* Menú Móvil */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-full text-ink hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center"
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Menú Mobile Fullscreen */}
            <div
                className={`fixed inset-0 bg-bg z-[55] flex flex-col justify-center px-8 transition-all duration-700 ease-luxury pointer-events-none ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                    }`}
                style={{
                    clipPath: isMenuOpen ? 'circle(150% at calc(100% - 3rem) 3rem)' : 'circle(0% at calc(100% - 3rem) 3rem)',
                }}
            >
                <div className={`absolute top-6 left-6 md:left-12 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <img src="/projectroombern-logo.png" alt="ProjectRoom Logo" className="h-10 w-auto dark:invert-0 invert" />
                </div>

                <nav className="flex flex-col gap-6">
                    {[...navLinks, { name: 'Reserve', href: '/reserve', isHash: false }].map((link, index) => (
                        <div key={link.name} className="overflow-hidden">
                            {link.isHash ? (
                                <a
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`block text-3xl md:text-5xl font-serif font-light text-ink hover:text-gold transition-transform duration-700 ease-luxury ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${isMenuOpen ? index * 80 + 200 : 0}ms` }}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    to={link.href}
                                    onClick={toggleMenu}
                                    className={`block text-3xl md:text-5xl font-serif font-light text-ink hover:text-gold transition-transform duration-700 ease-luxury ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${isMenuOpen ? index * 80 + 200 : 0}ms` }}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className={`mt-12 overflow-hidden transition-all duration-700 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-4 delay-0'}`}>
                    <div className="w-full h-px bg-ink/20 mb-6"></div>
                    <p className="text-ink/60 text-xs font-bold uppercase tracking-widest">
                        {theme === 'light' ? 'Light Mode Active' : 'Dark Mode Active'}
                    </p>
                </div>
            </div>
        </>
    );
};
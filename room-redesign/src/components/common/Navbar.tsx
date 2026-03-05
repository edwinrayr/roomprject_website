import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const location = useLocation();

    // Efecto de Scroll para la Navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Aplicar Tema
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    // Bloquear el scroll del cuerpo cuando el menú móvil está abierto
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

    // Cerrar el menú automáticamente si la URL o el anclaje (#) cambian
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname, location.hash]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    // Restauramos tu lista original completa, traduciendo a inglés
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
            {/* Cabecera Editorial Persistente: z-[60] */}
            <header
                className={`fixed top-0 left-0 z-[60] w-full transition-all duration-[600ms] ease-luxury border-b ${isMenuOpen
                        ? 'bg-transparent py-5 md:py-6 border-transparent'
                        : isScrolled
                            ? 'bg-bg/95 backdrop-blur-xl py-3 shadow-sm border-ink/10'
                            : 'bg-bg/85 backdrop-blur-md py-5 md:py-6 border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-[200px_1fr_200px] items-center">

                    {/* LADO IZQUIERDO: Logo */}
                    <div className="flex justify-start">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="relative overflow-hidden group block">
                            <img
                                src="/projectroombern-logo.png"
                                alt="Project Room Bern Logo"
                                className="h-8 md:h-10 w-auto object-contain transition-transform duration-700 group-hover:scale-105 dark:invert-0 invert"
                            />
                        </Link>
                    </div>

                    {/* CENTRO: Enlaces de Navegación (Desktop) */}
                    <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-10">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 ease-luxury group-hover:w-full"></span>
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 ease-luxury group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* LADO DERECHO: Controles */}
                    <div className="flex items-center justify-end gap-3 md:gap-5">
                        {/* Botón Reserve (Desktop) */}
                        <Link
                            to="/reserve"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-ink/20 text-ink text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:border-ink hover:bg-ink hover:text-bg"
                        >
                            Reserve
                        </Link>

                        {/* Toggle Tema */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-ink hover:text-gold transition-colors duration-300 flex items-center justify-center"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
                        </button>

                        {/* Menú Móvil Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-full text-ink hover:text-gold transition-colors duration-300 flex items-center justify-center"
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Menú Mobile Fullscreen: z-[55] */}
            <div
                className={`fixed inset-0 bg-bg z-[55] flex flex-col justify-center px-8 md:px-16 transition-all duration-[800ms] ease-luxury pointer-events-none ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                    }`}
            >
                <nav className="flex flex-col gap-6 mt-12">
                    {[...navLinks, { name: 'Reserve Space', href: '/reserve', isHash: false }].map((link, index) => (
                        <div key={link.name} className="overflow-hidden">
                            {link.isHash ? (
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block w-fit text-4xl md:text-6xl font-serif font-light text-ink hover:text-gold transition-transform duration-[800ms] ease-luxury ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${isMenuOpen ? index * 80 + 150 : 0}ms` }}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block w-fit text-4xl md:text-6xl font-serif font-light text-ink hover:text-gold transition-transform duration-[800ms] ease-luxury ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${isMenuOpen ? index * 80 + 150 : 0}ms` }}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Pie del menú móvil */}
                <div className={`mt-16 overflow-hidden transition-all duration-700 ease-luxury ${isMenuOpen ? 'opacity-100 translate-y-0 delay-[600ms]' : 'opacity-0 translate-y-8 delay-0'}`}>
                    <div className="w-full h-px bg-ink/10 mb-6"></div>
                    <div className="flex justify-between items-center">
                        <p className="text-ink/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                            {theme === 'light' ? 'Light Mode Active' : 'Dark Mode Active'}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-ink hover:text-gold transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                            <a href="#" className="text-ink hover:text-gold transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
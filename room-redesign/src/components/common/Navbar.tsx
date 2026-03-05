import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    useEffect(() => {
        setIsMenuOpen(false);
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleMobileNavigation = (e: React.MouseEvent, href: string, isHash: boolean) => {
        e.preventDefault(); 
        setIsMenuOpen(false); 

        setTimeout(() => {
            if (isHash) {
                const targetId = href.split('#')[1];
                if (location.pathname === '/') {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = href;
                }
            } else {
                navigate(href);
                window.scrollTo(0, 0); 
            }
        }, 150);
    };

    // 👇 NUEVA FUNCIÓN: Alternar entre Inglés y Español 👇
    const toggleLanguage = () => {
        const currentLang = i18n.language || 'en';
        const newLang = currentLang.startsWith('es') ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.exhibitions', 'Exhibitions'), href: '/exhibitions', isHash: false },
        { name: t('nav.artists', 'Artists'), href: '/artists', isHash: false },
        { name: t('nav.services', 'Services'), href: '/services', isHash: false },
        { name: t('nav.about', 'About'), href: '/about', isHash: false },
        { name: t('nav.rules', 'Rules'), href: '/rules', isHash: false },
        { name: t('nav.contact', 'Contact'), href: '/contact', isHash: false },
    ];

    // Variable para saber si estamos en español
    const isSpanish = i18n.language?.startsWith('es');

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-[60] w-full transition-all duration-[600ms] ease-luxury bg-ink border-b ${isMenuOpen
                        ? 'py-5 md:py-6 border-transparent'
                        : isScrolled
                            ? 'py-3 shadow-md border-bg/10'
                            : 'py-5 md:py-6 border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-[200px_1fr_200px] items-center">

                    <div className="flex justify-start">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="relative overflow-hidden group block">
                            <img
                                src="/projectroombern-logo.png"
                                alt="Project Room Bern Logo"
                                className="h-8 md:h-10 w-auto object-contain transition-transform duration-700 group-hover:scale-105 brightness-0 invert"
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-10">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-bg hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 ease-luxury group-hover:w-full"></span>
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-bg hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 ease-luxury group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center justify-end gap-3 md:gap-5">
                        
                        {/* 👇 UN SOLO BOTÓN DE BANDERA EN COMPUTADORA 👇 */}
                        <div className="hidden md:flex items-center mr-2">
                            <button 
                                onClick={toggleLanguage} 
                                className="transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100"
                                aria-label="Cambiar idioma"
                            >
                                <img 
                                    src={isSpanish ? "https://flagcdn.com/w40/mx.png" : "https://flagcdn.com/w40/us.png"} 
                                    alt={isSpanish ? "Español" : "English"} 
                                    className="w-5 md:w-6 h-auto rounded-[2px] shadow-sm" 
                                />
                            </button>
                        </div>

                        <Link
                            to="/reserve"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-bg/20 text-bg text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink"
                        >
                            {t('nav.reserve', 'Reserve')}
                        </Link>

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-full text-bg hover:text-gold transition-colors duration-300 flex items-center justify-center"
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            <div
                className={`fixed inset-0 bg-ink z-[55] flex flex-col justify-center px-8 md:px-16 transition-all duration-[800ms] ease-luxury ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <nav className="flex flex-col gap-5 mt-16 md:gap-6 md:mt-12">
                    {[...navLinks, { name: t('nav.reserve', 'Reserve'), href: '/reserve', isHash: false }].map((link, index) => (
                        <div key={link.name} className="overflow-hidden">
                            <button
                                onClick={(e) => handleMobileNavigation(e, link.href, link.isHash)}
                                className={`block w-fit text-left text-2xl md:text-5xl font-serif font-light text-bg hover:text-gold transition-transform duration-[800ms] ease-luxury ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}
                                style={{ transitionDelay: `${isMenuOpen ? index * 80 + 150 : 0}ms` }}
                            >
                                {link.name}
                            </button>
                        </div>
                    ))}
                </nav>

                <div className={`mt-12 md:mt-16 overflow-hidden transition-all duration-700 ease-luxury ${isMenuOpen ? 'opacity-100 translate-y-0 delay-[600ms]' : 'opacity-0 translate-y-8 delay-0'}`}>
                    <div className="w-full h-px bg-bg/10 mb-6"></div>
                    <div className="flex justify-between items-center">
                        
                        {/* 👇 UN SOLO BOTÓN DE BANDERA EN MÓVIL 👇 */}
                        <div className="flex items-center">
                            <button 
                                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
                                className="transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100"
                                aria-label="Cambiar idioma"
                            >
                                <img 
                                    src={isSpanish ? "https://flagcdn.com/w40/mx.png" : "https://flagcdn.com/w40/us.png"} 
                                    alt={isSpanish ? "Español" : "English"} 
                                    className="w-7 md:w-8 h-auto rounded-[2px] shadow-sm" 
                                />
                            </button>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/greciaportorreal/" target="_blank" rel="noopener noreferrer" className="text-bg hover:text-gold transition-colors">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.facebook.com/greciaportorreal12/" target="_blank" rel="noopener noreferrer" className="text-bg hover:text-gold transition-colors">
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://ch.linkedin.com/in/grecia-portorreal-6a42b72b4" target="_blank" rel="noopener noreferrer" className="text-bg hover:text-gold transition-colors">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
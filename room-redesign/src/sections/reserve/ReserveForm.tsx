import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ReserveForm: React.FC = () => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            date: formData.get('date') as string,
            eventType: formData.get('eventType') as string,
            message: formData.get('message') as string,
        };

        const subject = `${t('reserve_form.email.subject', 'Reservation Request')}: ${data.eventType} - ${data.name}`;
        const body = `${t('reserve_form.email.hello', 'Hello Grecia,')}\n\n${t('reserve_form.email.intro', 'I would like to request a reservation for an event at Project Room Bern.')}\n\n${t('reserve_form.email.header', 'REQUEST DETAILS')}:\n------------------------------------------\n${t('reserve_form.labels.name', 'Name')}: ${data.name}\nEmail: ${data.email}\n${t('reserve_form.labels.phone', 'Phone')}: ${data.phone || 'N/A'}\n${t('reserve_form.labels.date', 'Requested Date')}: ${data.date}\n${t('reserve_form.labels.type', 'Event Type')}: ${data.eventType}\n\n${t('reserve_form.email.msg_header', 'ADDITIONAL MESSAGE')}:\n${data.message}\n------------------------------------------\n\n${t('reserve_form.email.footer', 'I look forward to your prompt response.')}`;

        const mailtoUrl = `mailto:greportorreal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <section
            ref={sectionRef}
            /* COMPACTACIÓN: pt-0 en móvil y pt-4 en desktop para eliminar el salto visual con el Hero */
            className="w-full pt-0 md:pt-4 pb-20 md:pb-32 bg-ink text-bg relative z-10 transition-all duration-1000 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                {/* COLUMNA DE TEXTO (Izquierda) */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
                    <span className={`text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6 block transition-all duration-[1200ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        {t('reserve_form.eyebrow', 'Bookings')}
                    </span>

                    <h2 className={`font-serif text-[clamp(2.3rem,5vw,4.2rem)] leading-[1.05] font-extrabold tracking-tighter mb-8 transition-all duration-[1200ms] delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                        {t('reserve_form.title_1', "Let's design a")} <br />
                        <span className="italic font-light text-gold/80">{t('reserve_form.title_2', "bespoke experience.")}</span>
                    </h2>

                    <p className={`font-sans text-bg/60 text-sm md:text-base leading-relaxed font-light mb-10 max-w-[45ch] transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        {t('reserve_form.description', 'Every event is a blank canvas. Please share the details of what you have in mind. We will contact you shortly to confirm availability and fine-tune every detail of your reservation at Project Room Bern.')}
                    </p>

                    <div className={`hidden lg:block w-20 h-[1px] bg-gold/30 mt-4 transition-all duration-[1500ms] delay-700 ease-out origin-left transform ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>

                {/* COLUMNA DEL FORMULARIO (Derecha) */}
                <div className="lg:col-span-7">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Nombre */}
                            <div className={`flex flex-col relative group transition-all duration-[1200ms] delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                                <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-bg/40 mb-2 group-focus-within:text-gold transition-colors">{t('reserve_form.labels.name', 'Full Name')}</label>
                                <input name="name" type="text" id="name" required className="w-full bg-transparent border-b border-bg/10 py-2 text-bg font-light focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-bg/10" placeholder={t('reserve_form.placeholders.name', 'e.g. Elena Rostova')} />
                            </div>

                            {/* Email */}
                            <div className={`flex flex-col relative group transition-all duration-[1200ms] delay-400 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                                <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-bg/40 mb-2 group-focus-within:text-gold transition-colors">{t('reserve_form.labels.email', 'Email Address')}</label>
                                <input name="email" type="email" id="email" required className="w-full bg-transparent border-b border-bg/10 py-2 text-bg font-light focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-bg/10" placeholder="elena@email.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Teléfono */}
                            <div className={`flex flex-col relative group transition-all duration-[1200ms] delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                                <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-widest text-bg/40 mb-2 group-focus-within:text-gold transition-colors">{t('reserve_form.labels.phone', 'Phone (Optional)')}</label>
                                <input name="phone" type="tel" id="phone" className="w-full bg-transparent border-b border-bg/10 py-2 text-bg font-light focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-bg/10" placeholder="+41 00 000 00 00" />
                            </div>

                            {/* Fecha */}
                            <div className={`flex flex-col relative group transition-all duration-[1200ms] delay-600 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                                <label htmlFor="date" className="font-sans text-[10px] uppercase tracking-widest text-bg/40 mb-2 group-focus-within:text-gold transition-colors">{t('reserve_form.labels.date', 'Estimated Date')}</label>
                                <input name="date" type="date" id="date" required className="w-full bg-transparent border-b border-bg/10 py-2 text-bg font-light focus:outline-none focus:border-gold transition-all duration-500 [color-scheme:dark]" />
                            </div>
                        </div>

                        {/* Tipo de Evento */}
                        <div className={`flex flex-col relative group transition-all duration-[1200ms] delay-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <label htmlFor="eventType" className="font-sans text-[10px] uppercase tracking-widest text-bg/40 mb-2 group-focus-within:text-gold transition-colors">{t('reserve_form.labels.type', 'Event Type')}</label>
                            <select name="eventType" id="eventType" required defaultValue="" className="w-full bg-transparent border-b border-bg/10 py-2 text-bg font-light focus:outline-none focus:border-gold transition-all duration-500 appearance-none cursor-pointer">
                                <option value="" disabled className="text-ink bg-bg">{t('reserve_form.options.default', 'Select an option...')}</option>
                                <option value={t('reserve_form.options.exhibition')} className="text-ink bg-bg">{t('reserve_form.options.exhibition')}</option>
                                <option value={t('reserve_form.options.workshop')} className="text-ink bg-bg">{t('reserve_form.options.workshop')}</option>
                                <option value={t('reserve_form.options.screening')} className="text-ink bg-bg">{t('reserve_form.options.screening')}</option>
                                <option value={t('reserve_form.options.gathering')} className="text-ink bg-bg">{t('reserve_form.options.gathering')}</option>
                                <option value={t('reserve_form.options.corporate')} className="text-ink bg-bg">{t('reserve_form.options.corporate')}</option>
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div className={`flex flex-col relative group transition-all duration-[1200ms] delay-800 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                            <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-bg/40 mb-2 group-focus-within:text-gold transition-colors">{t('reserve_form.labels.details', 'Additional Details')}</label>
                            <textarea name="message" id="message" rows={4} required className="w-full bg-transparent border-b border-bg/10 py-2 text-bg font-light focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-bg/10 resize-none" placeholder={t('reserve_form.placeholders.message', 'Tell us more about your idea...')}></textarea>
                        </div>

                        {/* Botón de Envío */}
                        <div className={`mt-6 flex justify-center lg:justify-end transition-all duration-[1500ms] delay-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                            <button
                                type="submit"
                                className="group flex items-center gap-4 bg-gold text-ink px-10 py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl"
                            >
                                <span>{t('reserve_form.button', 'Request Reservation')}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};
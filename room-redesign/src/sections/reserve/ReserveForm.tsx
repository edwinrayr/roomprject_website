import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ReserveForm: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // 1. Capturamos los datos del formulario usando FormData
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            date: formData.get('date') as string,
            eventType: formData.get('eventType') as string,
            message: formData.get('message') as string,
        };

        // 2. Construimos el cuerpo del correo con un formato limpio
        const subject = `Solicitud de Reserva: ${data.eventType} - ${data.name}`;
        const body = `Hola Grecia,
        
Me gustaría solicitar una reserva para un evento en Project Room Bern.

DETALLES DE LA SOLICITUD:
------------------------------------------
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone || 'No proporcionado'}
Fecha solicitada: ${data.date}
Tipo de evento: ${data.eventType}

MENSAJE ADICIONAL:
${data.message}
------------------------------------------

Quedo atento/a a tu pronta respuesta.`;

        // 3. Generamos el enlace mailto (usando el correo de contacto oficial)
        const mailtoUrl = `mailto:greportorreal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // 4. Abrimos el gestor de correo
        window.location.href = mailtoUrl;
    };

    return (
        <section className="w-full py-20 md:py-32 bg-ink text-bg relative z-10">
            <div className="container-pr grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                
                {/* COLUMNA IZQUIERDA: Texto de soporte */}
                <div className="lg:col-span-5 flex flex-col pt-4">
                    <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        Diseñemos una <br /> <span className="italic font-light text-gold">experiencia a medida.</span>
                    </h2>
                    <p className="font-sans text-bg/70 text-base leading-relaxed font-light mb-10">
                        Cada evento es una obra en blanco. Por favor, compártenos los detalles de lo que tienes en mente. Nos pondremos en contacto contigo a la brevedad para confirmar disponibilidad y afinar cada detalle de tu reservación en Project Room Bern.
                    </p>

                    <div className="hidden lg:block w-24 h-[1px] bg-gold opacity-50 mt-12"></div>
                </div>

                {/* COLUMNA DERECHA: El Formulario */}
                <div className="lg:col-span-7">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col relative group">
                                <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Nombre Completo</label>
                                <input name="name" type="text" id="name" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20" placeholder="Ej. Elena Rostova" />
                            </div>
                            
                            <div className="flex flex-col relative group">
                                <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Correo Electrónico</label>
                                <input name="email" type="email" id="email" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20" placeholder="elena@email.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col relative group">
                                <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Teléfono (Opcional)</label>
                                <input name="phone" type="tel" id="phone" className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20" placeholder="+41 00 000 00 00" />
                            </div>
                            
                            <div className="flex flex-col relative group">
                                <label htmlFor="date" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Fecha Estimada</label>
                                <input name="date" type="date" id="date" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors [color-scheme:dark]" />
                            </div>
                        </div>

                        <div className="flex flex-col relative group">
                            <label htmlFor="eventType" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Tipo de Evento</label>
                            <select name="eventType" id="eventType" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                                <option value="" disabled selected className="text-ink bg-bg">Selecciona una opción...</option>
                                <option value="Exposicion" className="text-ink bg-bg">Exposición de Arte</option>
                                <option value="Taller" className="text-ink bg-bg">Taller o Encuentro Cultural</option>
                                <option value="Cine-Foro" className="text-ink bg-bg">Cine-foro o Proyección</option>
                                <option value="Evento Privado" className="text-ink bg-bg">Reunión / Celebración Privada</option>
                                <option value="Empresarial" className="text-ink bg-bg">Evento Empresarial</option>
                            </select>
                        </div>

                        <div className="flex flex-col relative group">
                            <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Detalles Adicionales</label>
                            <textarea name="message" id="message" rows={4} required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20 resize-none" placeholder="Cuéntanos más sobre tu idea..."></textarea>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button 
                                type="submit" 
                                className="group flex items-center gap-4 bg-gold text-bg px-10 py-5 font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-500 ease-luxury shadow-xl"
                            >
                                <span>Solicitar Reserva</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};
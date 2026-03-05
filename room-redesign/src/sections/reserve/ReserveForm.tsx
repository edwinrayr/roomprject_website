import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const ReserveForm: React.FC = () => {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 1. Capturing form data
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            date: formData.get('date') as string,
            eventType: formData.get('eventType') as string,
            message: formData.get('message') as string,
        };

        // 2. Building the email body in English
        const subject = `Reservation Request: ${data.eventType} - ${data.name}`;
        const body = `Hello Grecia,
        
I would like to request a reservation for an event at Project Room Bern.

REQUEST DETAILS:
------------------------------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Requested Date: ${data.date}
Event Type: ${data.eventType}

ADDITIONAL MESSAGE:
${data.message}
------------------------------------------

I look forward to your prompt response.`;

        // 3. Generating the mailto link
        const mailtoUrl = `mailto:greportorreal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // 4. Opening the email client
        window.location.href = mailtoUrl;
    };

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 md:py-32 bg-ink text-bg relative z-10 transition-colors duration-500 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                {/* LEFT COLUMN: Animated support text */}
                <div className="lg:col-span-5 flex flex-col pt-4">
                    <span className={`text-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 block transition-all duration-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Bookings
                    </span>

                    <h2 className={`font-serif text-[clamp(3rem,5vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight mb-8 transition-all duration-1000 delay-200 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Let's design a <br />
                        <span className="italic font-light text-gold">bespoke experience.</span>
                    </h2>

                    <p className={`font-sans text-bg/70 text-base leading-relaxed font-light mb-10 max-w-[45ch] transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Every event is a blank canvas. Please share the details of what you have in mind. We will contact you shortly to confirm availability and fine-tune every detail of your reservation at Project Room Bern.
                    </p>

                    <div className={`hidden lg:block w-24 h-[1px] bg-gold opacity-50 mt-8 transition-all duration-[1500ms] delay-700 ease-luxury origin-left transform ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>

                {/* RIGHT COLUMN: The Form with staggered entrance */}
                <div className="lg:col-span-7">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className={`flex flex-col relative group transition-all duration-1000 delay-300 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Full Name</label>
                                <input name="name" type="text" id="name" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20" placeholder="e.g. Elena Rostova" />
                            </div>

                            <div className={`flex flex-col relative group transition-all duration-1000 delay-400 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Email Address</label>
                                <input name="email" type="email" id="email" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20" placeholder="elena@email.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className={`flex flex-col relative group transition-all duration-1000 delay-500 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Phone (Optional)</label>
                                <input name="phone" type="tel" id="phone" className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20" placeholder="+41 00 000 00 00" />
                            </div>

                            <div className={`flex flex-col relative group transition-all duration-1000 delay-600 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <label htmlFor="date" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Estimated Date</label>
                                <input name="date" type="date" id="date" required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors [color-scheme:dark]" />
                            </div>
                        </div>

                        <div className={`flex flex-col relative group transition-all duration-1000 delay-700 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <label htmlFor="eventType" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Event Type</label>
                            <select name="eventType" id="eventType" required defaultValue="" className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                                <option value="" disabled className="text-ink bg-bg">Select an option...</option>
                                <option value="Art Exhibition" className="text-ink bg-bg">Art Exhibition</option>
                                <option value="Workshop or Cultural Meeting" className="text-ink bg-bg">Workshop or Cultural Meeting</option>
                                <option value="Screening or Film Forum" className="text-ink bg-bg">Screening or Film Forum</option>
                                <option value="Private Gathering" className="text-ink bg-bg">Private Gathering / Celebration</option>
                                <option value="Corporate Event" className="text-ink bg-bg">Corporate Event</option>
                            </select>
                        </div>

                        <div className={`flex flex-col relative group transition-all duration-1000 delay-800 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-bg/50 mb-2 group-focus-within:text-gold transition-colors">Additional Details</label>
                            <textarea name="message" id="message" rows={4} required className="w-full bg-transparent border-b border-bg/20 py-2 text-bg font-light focus:outline-none focus:border-gold transition-colors placeholder:text-bg/20 resize-none" placeholder="Tell us more about your idea..."></textarea>
                        </div>

                        <div className={`mt-6 flex justify-end transition-all duration-1000 delay-1000 ease-luxury transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <button
                                type="submit"
                                className="group flex items-center gap-4 bg-gold text-ink px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-500 ease-luxury shadow-xl"
                            >
                                <span>Request Reservation</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};
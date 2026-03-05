import React from 'react';
import { SEO } from '../components/SEO';
import { ContactHero } from '../sections/contact/ContactHero';
import { ContactContent } from '../sections/contact/ContactContent';
import { CancellationPolicy } from '../sections/contact/CancellationPolicy';

export const ContactPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            {/* Implementación de SEO para la página de Contacto */}
            <SEO
                title="Get in Touch"
                description="Contact Grecia Portorreal to discuss your vision, request portfolio details, or inquire about booking our exclusive event space in Bern."
                keywords="contact Project Room Bern, book gallery space, Grecia Portorreal contact, event planning Switzerland, contemporary art inquiries"
            />

            <ContactHero />
            <ContactContent />
            <CancellationPolicy />

        </main>
    );
};
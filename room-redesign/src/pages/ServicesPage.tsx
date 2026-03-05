import React from 'react';
import { SEO } from '../components/SEO';
import { ServicesHero } from '../sections/services/ServicesHero';
import { ServicesGrid } from '../sections/services/ServicesGrid';
import { EventCTA } from '../sections/services/EventCTA';

export const ServicesPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            {/* Implementación de SEO para la página de Servicios */}
            <SEO
                title="Bespoke Services"
                description="Explore our tailored services at Project Room Bern. We offer elegant and versatile environments for art exhibitions, corporate conferences, workshops, and private celebrations."
                keywords="event services Bern, rent gallery space Switzerland, corporate event venue, art exhibition rental, private gatherings, cultural workshops, bespoke events"
            />

            <ServicesHero />
            <ServicesGrid />
            <EventCTA />

        </main>
    );
};
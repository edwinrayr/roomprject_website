import React from 'react';
import { ServicesHero } from '../sections/services/ServicesHero';
import { ServicesGrid } from '../sections/services/ServicesGrid';
import { EventCTA } from '../sections/services/EventCTA';

export const ServicesPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <ServicesHero />
            <ServicesGrid />
            <EventCTA />
        </main>
    );
};
import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../sections/home/Hero';
import { About } from '../sections/home/About';
import { Services } from '../sections/home/Services';
import { Artists } from '../sections/home/Artists';
import { Booking } from '../sections/home/Booking';

export const Home: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            {/* Implementación de SEO para la página principal */}
            <SEO
                title="Home"
                description="Discover Project Room Bern, an exclusive architectural canvas for contemporary art exhibitions, private gatherings, and cultural events in the heart of Switzerland."
                keywords="contemporary art gallery Bern, exclusive event space Switzerland, private venue booking, art exhibitions Bern, cultural workshops, Das Dazwischen, bespoke events"
            />

            {/* Sección 1: Hero */}
            <Hero />

            {/* Secciones del Home */}
            <About />
            <Services />
            <Artists />
            <Booking />

        </main>
    );
};
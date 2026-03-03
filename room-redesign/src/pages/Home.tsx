import React from 'react';
import { Hero } from '../sections/home/Hero';
import { About } from '../sections/home/About';
import { Services } from '../sections/home/Services';
import { Artists } from '../sections/home/Artists';
import { Booking } from '../sections/home/Booking';

export const Home: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            {/* Sección 1: Hero */}
            <Hero />
            <About />
            <Services />
            <Artists />
            <Booking />
        </main>
    );
};
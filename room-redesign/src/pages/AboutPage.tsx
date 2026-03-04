import React from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { WhoWeAre } from '../sections/about/WhoWeAre';
import { SpaceFeatures } from '../sections/about/SpaceFeatures';
import { Booking } from '../sections/home/Booking';

export const AboutPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <AboutHero />
            <WhoWeAre />
            <SpaceFeatures />
            <Booking />
        </main>
    );
};
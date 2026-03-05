import React from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { WhoWeAre } from '../sections/about/WhoWeAre';
import { SpaceFeatures } from '../sections/about/SpaceFeatures';
import { AboutDetails } from '../sections/about/AboutDetails';

export const AboutPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <AboutHero />
            <WhoWeAre />
            <SpaceFeatures />
            <AboutDetails />
        </main>
    );
};
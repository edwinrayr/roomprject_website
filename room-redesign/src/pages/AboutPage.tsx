import React from 'react';
import { SEO } from '../components/SEO';
import { AboutHero } from '../sections/about/AboutHero';
import { WhoWeAre } from '../sections/about/WhoWeAre';
import { SpaceFeatures } from '../sections/about/SpaceFeatures';
import { AboutDetails } from '../sections/about/AboutDetails';

export const AboutPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            <SEO
                title="The Vision"
                description="Learn about the philosophy and space behind Project Room Bern. A venue dedicated to social innovation, cultural resistance, and unique aesthetic experiences in the heart of Das Dazwischen."
                keywords="Das Dazwischen Bern, cultural resistance art space, gallery lighting venue, creative space Switzerland, Project Room Bern mission"
            />

            <AboutHero />
            <WhoWeAre />
            <SpaceFeatures />
            <AboutDetails />
        </main>
    );
};
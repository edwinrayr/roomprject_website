import React from 'react';
import { SEO } from '../components/SEO';
import { ArtistsHero } from '../sections/artists/ArtistsHero';
import { Exhibitions } from '../sections/artists/ArtistsExhibitions';
import { ArtistCTA } from '../sections/artists/ArtistCTA';

export const ArtistsPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            {/* Implementación de SEO para la página de Artistas */}
            <SEO
                title="Featured Artists"
                description="Explore the visionary works of Grecia Portorreal and other featured artists at Project Room Bern. A contemporary art gallery dedicated to visual harmony and cultural expression in Switzerland."
                keywords="Grecia Portorreal artist, contemporary art Bern, art exhibitions Switzerland, featured artists Project Room Bern, visual arts Biel, fine arts gallery"
            />

            <ArtistsHero />
            <Exhibitions />
            <ArtistCTA />

        </main>
    );
};
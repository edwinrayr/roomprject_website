import React from 'react';
import { ArtistsHero } from '../sections/artists/ArtistsHero';
import { Exhibitions } from '../sections/artists/ArtistsExhibitions';
import { ArtistCTA } from '../sections/artists/ArtistCTA';

export const ArtistsPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <ArtistsHero />
            <Exhibitions />
            <ArtistCTA />

        </main>
    );
};
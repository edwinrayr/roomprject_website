import React from 'react';
import { ArtistsHero } from '../sections/artists/ArtistsHero';
import { Exhibitions } from '../sections/artists/ArtistsExhibitions';

import { Booking } from '../sections/home/Booking'; 

export const ArtistsPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            {/* Sección 1: Hero con la temática de "The Visionaries" */}
            <ArtistsHero />
            
            {/* Sección 3: Información sobre exhibiciones pasadas o futuras */}
            <Exhibitions />
            
            {/* Sección 4: Llamado a la acción para reservar el espacio o contactar */}
            <Booking />
        </main>
    );
};
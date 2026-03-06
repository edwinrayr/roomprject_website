import React from 'react';
import { SEO } from '../components/SEO';
import { ExhibitionsXHero } from '../sections/exhibitions/ExhibitionsXHero';
import { ExhibitionsXContent } from '../sections/exhibitions/ExhibitionsXContent';
import { ProjectionGallery } from '../sections/exhibitions/ProjectionGallery';

export const ExhibitionsPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            <SEO
                title="Exhibitions X — Project Room Bern"
                description="Explore the exclusive collection and artistic vision of Grecia Portorreal. A curated journey through contemporary art, textures, and unseen works in our architectural space."
                keywords="Grecia Portorreal art, contemporary art exhibitions, fine art gallery Biel, Project Room Bern collection, modern art Switzerland"
            />

            {/* 1. Apertura Monumental con tipografía macro */}
            <ExhibitionsXHero />

            {/* 3. Galería extendida de obras inéditas (Fondo Bg) */}
            <ExhibitionsXContent />

            <ProjectionGallery/>

        </main>
    );
};
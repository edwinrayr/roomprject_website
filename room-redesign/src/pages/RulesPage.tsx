import React from 'react';
import { SEO } from '../components/SEO';
import { RulesHero } from '../sections/rules/RulesHero';
import { RulesContent } from '../sections/rules/RulesContent';

export const RulesPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            {/* Implementación de SEO para la página de Reglas */}
            <SEO
                title="Rules & Guidelines"
                description="Official rules and regulations for visitors and event organizers to ensure a harmonious, safe, and respectful experience at Project Room Bern."
                keywords="Project Room Bern rules, art gallery guidelines, event space policies Switzerland, venue regulations Bern, visitor information"
            />

            <RulesHero />
            <RulesContent />

        </main>
    );
};
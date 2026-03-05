import React from 'react';
import { RulesHero } from '../sections/rules/RulesHero';
import { RulesContent } from '../sections/rules/RulesContent';

export const RulesPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <RulesHero />
            <RulesContent />
        </main>
    );
};
import React from 'react';
import { ContactHero } from '../sections/contact/ContactHero';
import { ContactContent } from '../sections/contact/ContactContent';
import { CancellationPolicy } from '../sections/contact/CancellationPolicy';

export const ContactPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <ContactHero />
            <ContactContent />
            <CancellationPolicy />
        </main>
    );
};
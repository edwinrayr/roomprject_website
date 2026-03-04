import React from 'react';
import { ReserveHero } from '../sections/reserve/ReserveHero';
import { ReserveForm } from '../sections/reserve/ReserveForm';

export const ReservePage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            <ReserveHero />
            <ReserveForm />
        </main>
    );
};
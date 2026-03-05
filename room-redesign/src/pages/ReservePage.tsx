import React from 'react';
import { SEO } from '../components/SEO';
import { ReserveHero } from '../sections/reserve/ReserveHero';
import { ReserveForm } from '../sections/reserve/ReserveForm';

export const ReservePage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">

            {/* Implementación de SEO para la página de Reservas */}
            <SEO
                title="Book Your Event"
                description="Secure your date at Bern's most unique venue. Request a reservation for your next art exhibition, cultural workshop, or private celebration at Project Room Bern."
                keywords="book event space Bern, reserve art gallery, schedule cultural event Switzerland, private venue booking, Project Room Bern reservation"
            />

            <ReserveHero />
            <ReserveForm />

        </main>
    );
};
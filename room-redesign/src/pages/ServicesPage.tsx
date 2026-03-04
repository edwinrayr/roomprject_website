import React from 'react';
import { ServicesHero } from '../sections/services/ServicesHero';
import { ServicesGrid } from '../sections/services/ServicesGrid';
import { Booking } from '../sections/home/Booking'; 

export const ServicesPage: React.FC = () => {
    return (
        <main className="w-full overflow-hidden">
            {/* 1. Bienvenida a los servicios */}
            <ServicesHero />
            
            {/* 2. La cuadrícula de 6 servicios copiados de tu HTML */}
            <ServicesGrid />
            
            {/* 3. Llamado a la acción */}
            <Booking />
        </main>
    );
};
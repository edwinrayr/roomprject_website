import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image = '/images/IMG_6892.webp',
    url = 'https://projectroombern.ch'
}) => {
    const siteName = "Project Room Bern";
    const defaultKeywords = "contemporary art gallery Bern, event space Switzerland, private event venue, art exhibitions Bern, cultural workshops, Grecia Portorreal, Das Dazwischen, bespoke events";

    const pageTitle = title === "Home" ? `${siteName} | Contemporary Art & Event Space` : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Etiquetas Estándar */}
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
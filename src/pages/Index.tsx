import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | MAKAS Barbershop Haunstetten</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop MAKAS Barbershop Haunstetten in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg, Haunstetten, MAKAS Barbershop"
        />
        <link rel="canonical" href="https://makas-barbershop.de" />

        {/* Open Graph */}
        <meta property="og:title" content="MAKAS Barbershop Haunstetten | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg Haunstetten."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://makas-barbershop.de" />
        <meta property="og:image" content="https://makas-barbershop.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAKAS Barbershop Haunstetten | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://makas-barbershop.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "MAKAS Barbershop Haunstetten",
            "image": "https://makas-barbershop.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hofackerstraße 20",
              "addressLocality": "Augsburg",
              "postalCode": "86179",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3101",
              "longitude": "10.9068"
            },
            "url": "https://makas-barbershop.de",
            "telephone": "+49 821 24256270",
            "openingHours": "Di-Fr 09:00-18:30, Sa 08:30-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/makasbarbershop",
              "https://www.instagram.com/makasbarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;


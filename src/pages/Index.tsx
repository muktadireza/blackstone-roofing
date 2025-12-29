import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import AreasSection from "@/components/home/AreasSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Blackstone Roofing Ltd | Oxford's Trusted Roofers | 45+ Years Experience</title>
        <meta 
          name="description" 
          content="Oxford's most trusted roofing company with 45+ years experience. 24/7 emergency repairs, flat-rate pricing, fully insured. 4.9★ rating from 87 reviews. Call 07882 354943." 
        />
        <meta name="keywords" content="roofing Oxford, roof repair Oxford, emergency roofer, flat roofing, chimney repair, gutter cleaning, Blackstone Roofing" />
        <link rel="canonical" href="https://blackstoneroofing.co.uk" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blackstone Roofing Ltd | Oxford's Trusted Roofers" />
        <meta property="og:description" content="Professional roofing services with 24/7 emergency response. 45+ years experience, fully insured, workmanship guaranteed." />
        <meta property="og:type" content="website" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "name": "Blackstone Roofing Ltd",
            "image": "",
            "telephone": "07882354943",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oxford",
              "addressRegion": "Oxfordshire",
              "addressCountry": "GB"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "priceRange": "££",
            "areaServed": ["Oxford", "Basingstoke", "Bath", "Bicester", "Bristol", "Swindon", "Newbury"]
          })}
        </script>
      </Helmet>
      
      <Layout>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ReviewsSection />
        <AreasSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

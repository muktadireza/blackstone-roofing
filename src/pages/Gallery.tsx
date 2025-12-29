import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceFlatRoof from "@/assets/service-flat-roof.jpg";
import serviceChimney from "@/assets/service-chimney.jpg";
import serviceGutters from "@/assets/service-gutters.jpg";
import heroImage from "@/assets/hero-roofing.jpg";

const galleryImages = [
  { src: heroImage, alt: "Residential roof installation in Oxford", category: "Installation" },
  { src: serviceRepair, alt: "Professional roof tile repair", category: "Repair" },
  { src: serviceFlatRoof, alt: "Commercial flat roofing project", category: "Flat Roofing" },
  { src: serviceChimney, alt: "Chimney repair and repointing", category: "Chimney" },
  { src: serviceGutters, alt: "New gutter installation", category: "Gutters" },
  { src: heroImage, alt: "Complete re-roofing project", category: "Installation" },
  { src: serviceRepair, alt: "Storm damage repair", category: "Repair" },
  { src: serviceFlatRoof, alt: "Flat roof waterproofing", category: "Flat Roofing" },
  { src: serviceChimney, alt: "Chimney stack rebuilding", category: "Chimney" },
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Project Gallery | Roofing Work Examples | Blackstone Roofing Oxford</title>
        <meta 
          name="description" 
          content="View our portfolio of completed roofing projects in Oxford. Roof repairs, installations, flat roofing, chimney work and more. See the quality of our work." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Our Work
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Project
                <span className="text-accent block">Gallery</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl">
                Browse through our portfolio of completed roofing projects across Oxford 
                and surrounding areas. Quality workmanship you can trust.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-primary-foreground font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Like What You See?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let us bring the same quality workmanship to your property. Contact us today 
              for a free quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:07882354943">
                <Button variant="accent" size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Call for Free Quote
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Gallery;

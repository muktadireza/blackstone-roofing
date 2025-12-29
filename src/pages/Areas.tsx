import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";

const areas = [
  { name: "Oxford", description: "Our home base - comprehensive roofing services across all Oxford areas", featured: true },
  { name: "Headington", description: "Full service coverage for Headington and surrounding neighborhoods", featured: true },
  { name: "Kidlington", description: "Serving residential and commercial properties in Kidlington", featured: true },
  { name: "Bicester", description: "Professional roofing services throughout Bicester", featured: false },
  { name: "Wallingford", description: "Complete roofing solutions for Wallingford properties", featured: false },
  { name: "Abingdon", description: "Trusted roofers serving the Abingdon community", featured: false },
  { name: "Basingstoke", description: "Extending our expertise to Basingstoke and surrounds", featured: false },
  { name: "Bath", description: "Quality roofing services for Bath's historic and modern properties", featured: false },
  { name: "Bristol", description: "Professional roofing coverage throughout Bristol", featured: false },
  { name: "Swindon", description: "Reliable roofing services for Swindon residents", featured: false },
  { name: "Newbury", description: "Expert roofing solutions in Newbury and nearby areas", featured: false },
  { name: "Marlborough", description: "Serving Marlborough with quality roofing work", featured: false },
  { name: "Devizes", description: "Professional roofing services for Devizes properties", featured: false },
  { name: "Hungerford", description: "Complete roofing coverage for Hungerford", featured: false },
  { name: "Tadley", description: "Trusted roofing services in Tadley", featured: false },
  { name: "Royal Wootton Bassett", description: "Serving Royal Wootton Bassett and surroundings", featured: false },
];

const Areas = () => {
  return (
    <>
      <Helmet>
        <title>Areas We Cover | Roofing Services Oxford & Surrounding Areas | Blackstone Roofing</title>
        <meta 
          name="description" 
          content="Blackstone Roofing serves Oxford, Basingstoke, Bath, Bristol, Swindon, Newbury and more. 24/7 emergency roofing services across Oxfordshire. Call 07882 354943." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Service Areas
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Areas We
                <span className="text-accent block">Cover</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl">
                From our base in Oxford, we provide professional roofing services across 
                Oxfordshire and beyond. Wherever you are in our coverage area, we're just a call away.
              </p>
            </div>
          </div>
        </section>

        {/* Main Areas */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Primary Service Areas
              </h2>
              <p className="text-muted-foreground text-lg">
                We're proud to serve homeowners and businesses across these communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {areas.filter(a => a.featured).map((area) => (
                <div 
                  key={area.name}
                  className="bg-accent/10 border-2 border-accent/20 rounded-xl p-8 hover:border-accent transition-colors"
                >
                  <MapPin className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">{area.name}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <a href="tel:07882354943" className="inline-flex items-center text-accent font-medium hover:underline">
                    Get a quote <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>

            {/* All Areas Grid */}
            <div className="bg-muted rounded-2xl p-8 md:p-12">
              <h3 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
                Full Coverage Area
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {areas.map((area) => (
                  <div 
                    key={area.name}
                    className={`flex items-center gap-3 p-4 rounded-lg bg-background border transition-colors ${
                      area.featured ? "border-accent" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <CheckCircle className={`h-5 w-5 flex-shrink-0 ${area.featured ? "text-accent" : "text-muted-foreground"}`} />
                    <span className="font-medium text-foreground">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not Listed CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Area Listed?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              We may still be able to help! Give us a call to check if we can service your location. 
              We're always expanding our coverage area.
            </p>
            <a href="tel:07882354943">
              <Button variant="hero" size="xl" className="gap-2">
                <Phone className="h-5 w-5" />
                Call 07882 354943
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Areas;

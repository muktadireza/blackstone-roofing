import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  { name: "Oxford", featured: true },
  { name: "Headington", featured: true },
  { name: "Kidlington", featured: true },
  { name: "Bicester", featured: false },
  { name: "Wallingford", featured: false },
  { name: "Basingstoke", featured: false },
  { name: "Bath", featured: false },
  { name: "Bristol", featured: false },
  { name: "Swindon", featured: false },
  { name: "Newbury", featured: false },
  { name: "Marlborough", featured: false },
  { name: "Devizes", featured: false },
  { name: "Hungerford", featured: false },
  { name: "Tadley", featured: false },
  { name: "Royal Wootton Bassett", featured: false },
];

const AreasSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
            Service Areas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serving Oxford & Beyond
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide professional roofing services across Oxford and the surrounding areas. 
            Wherever you are in our coverage zone, we're just a call away.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {areas.map((area) => (
            <div
              key={area.name}
              className={`flex items-center gap-2 p-4 rounded-lg border transition-colors ${
                area.featured
                  ? "bg-accent/10 border-accent/20 text-foreground"
                  : "bg-card border-border hover:border-accent/30 text-foreground/80"
              }`}
            >
              <MapPin className={`h-4 w-4 flex-shrink-0 ${area.featured ? "text-accent" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm">{area.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Don't see your area? We may still cover it! Give us a call to check.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:07882354943">
              <Button variant="accent" size="lg">
                Call to Check Coverage
              </Button>
            </a>
            <Link to="/areas">
              <Button variant="outline" size="lg" className="gap-2">
                View All Areas
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Home, Search, Flame, Droplets, AlertTriangle } from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceFlatRoof from "@/assets/service-flat-roof.jpg";
import serviceChimney from "@/assets/service-chimney.jpg";
import serviceGutters from "@/assets/service-gutters.jpg";

const services = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Roof Repair",
    description: "Expert repairs for all types of roofing damage. From minor leaks to major storm damage, we fix it right.",
    image: serviceRepair,
    href: "/services#repair",
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Flat Roofing",
    description: "Specialist flat roof installation and repair using the latest materials and techniques.",
    image: serviceFlatRoof,
    href: "/services#flat",
  },
  {
    icon: <Flame className="h-8 w-8" />,
    title: "Chimney Repair",
    description: "Complete chimney services including repointing, rebuilding, and waterproofing.",
    image: serviceChimney,
    href: "/services#chimney",
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: "Gutter Services",
    description: "Gutter cleaning, repair, and installation to protect your property from water damage.",
    image: serviceGutters,
    href: "/services#gutters",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Roofing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From emergency repairs to complete roof installations, we provide professional 
            roofing services backed by 45+ years of experience and our workmanship guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Services + CTA */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Need Emergency Repairs?
              </h3>
              <p className="text-muted-foreground max-w-lg">
                We offer 24/7 emergency roofing services. Storm damage, major leaks, or any urgent 
                roofing issue - we're here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07882354943">
                <Button variant="accent" size="lg" className="gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Emergency Line
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

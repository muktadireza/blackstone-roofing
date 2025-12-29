import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, Home, Search, Flame, Droplets, AlertTriangle, 
  Layers, Sparkles, Phone, CheckCircle, ArrowRight 
} from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceFlatRoof from "@/assets/service-flat-roof.jpg";
import serviceChimney from "@/assets/service-chimney.jpg";
import serviceGutters from "@/assets/service-gutters.jpg";

const services = [
  {
    id: "repair",
    icon: <Wrench className="h-10 w-10" />,
    title: "Roof Repair",
    description: "Professional roof repair services for all types of roofing damage, from minor leaks to major storm damage.",
    features: ["Leak detection and repair", "Storm damage restoration", "Tile and slate replacement", "Ridge and hip repairs", "Flashing repairs"],
    image: serviceRepair,
  },
  {
    id: "installation",
    icon: <Home className="h-10 w-10" />,
    title: "Roof Installation",
    description: "Complete roof installation services for new builds and full roof replacements using quality materials.",
    features: ["New roof installations", "Complete re-roofing", "All roof types covered", "Quality material options", "Long-term warranties"],
    image: serviceRepair,
  },
  {
    id: "flat",
    icon: <Layers className="h-10 w-10" />,
    title: "Flat Roofing",
    description: "Specialist flat roof installation, repair, and maintenance using modern, durable materials.",
    features: ["EPDM rubber roofing", "GRP fibreglass roofing", "Felt roofing systems", "Waterproof coatings", "Drainage solutions"],
    image: serviceFlatRoof,
  },
  {
    id: "inspection",
    icon: <Search className="h-10 w-10" />,
    title: "Roof Inspection",
    description: "Comprehensive roof inspections to identify issues before they become costly problems.",
    features: ["Visual inspection", "Detailed reports", "Photo documentation", "Maintenance advice", "Free estimates"],
    image: serviceRepair,
  },
  {
    id: "chimney",
    icon: <Flame className="h-10 w-10" />,
    title: "Chimney Repair",
    description: "Complete chimney services including repointing, rebuilding, lead work, and waterproofing.",
    features: ["Chimney repointing", "Stack rebuilding", "Lead flashing work", "Cowl installation", "Waterproofing"],
    image: serviceChimney,
  },
  {
    id: "pointing",
    icon: <Sparkles className="h-10 w-10" />,
    title: "Pointing & Repointing",
    description: "Expert pointing and repointing services for ridge tiles, verges, and chimney stacks.",
    features: ["Ridge tile pointing", "Verge pointing", "Mortar repairs", "Weather protection", "Long-lasting finish"],
    image: serviceChimney,
  },
  {
    id: "gutters",
    icon: <Droplets className="h-10 w-10" />,
    title: "Gutter Services",
    description: "Complete gutter solutions including cleaning, repair, and new installations.",
    features: ["Gutter cleaning", "Leak repairs", "New installations", "Downpipe services", "Fascia and soffit work"],
    image: serviceGutters,
  },
  {
    id: "cleaning",
    icon: <Sparkles className="h-10 w-10" />,
    title: "Roof Cleaning",
    description: "Professional roof cleaning to remove moss, algae, and debris, extending your roof's lifespan.",
    features: ["Moss removal", "Pressure washing", "Biocide treatment", "Debris clearance", "Preventive treatments"],
    image: serviceRepair,
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Roofing Services | Roof Repair, Installation & More | Blackstone Roofing Oxford</title>
        <meta 
          name="description" 
          content="Professional roofing services in Oxford: roof repair, installation, flat roofing, chimney repair, gutters & more. 24/7 emergency service. Free quotes. Call 07882 354943." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Complete Roofing
                <span className="text-accent block">Solutions</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8">
                From emergency repairs to complete roof installations, we offer a full range of 
                professional roofing services backed by 45+ years of experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:07882354943">
                  <Button variant="hero" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call for Free Quote
                  </Button>
                </a>
                <Link to="/emergency">
                  <Button variant="heroOutline" className="gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Emergency Repairs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                      {service.icon}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="tel:07882354943">
                      <Button variant="accent" size="lg" className="gap-2">
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 lg:h-[500px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Need a Roofing Service?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Get in touch today for a free, no-obligation quote. We offer flat-rate pricing 
              with no hidden costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:07882354943">
                <Button variant="hero" size="xl" className="gap-2">
                  <Phone className="h-5 w-5" />
                  07882 354943
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, AlertTriangle, Shield, Award, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container-custom py-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="text-accent">⭐ 4.9/5</span>
            <span className="text-primary-foreground/80">from 87 Google Reviews</span>
            <span className="text-primary-foreground/60">•</span>
            <span className="text-primary-foreground/80">45+ Years Experience</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Oxford's Most Trusted
            <span className="block text-accent">Roofing Specialists</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Professional roofing services with 24/7 emergency response. 
            <span className="text-accent font-semibold"> Flat-rate pricing</span> with no hidden costs. 
            Fully insured and workmanship guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="tel:07882354943">
              <Button variant="hero" size="xl" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Calendar className="h-5 w-5" />
                Get Free Quote
              </Button>
            </Link>
            <Link to="/emergency">
              <Button variant="emergency" size="xl" className="gap-2">
                <AlertTriangle className="h-5 w-5" />
                Emergency Repair
              </Button>
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <TrustBadge icon={<Shield className="h-5 w-5" />} text="Fully Insured" />
            <TrustBadge icon={<Award className="h-5 w-5" />} text="Guaranteed Work" />
            <TrustBadge icon={<Clock className="h-5 w-5" />} text="24/7 Service" />
            <TrustBadge icon={<CheckCircle className="h-5 w-5" />} text="Google Verified" />
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
    <span className="text-accent">{icon}</span>
    <span className="text-primary-foreground text-sm font-medium">{text}</span>
  </div>
);

export default HeroSection;

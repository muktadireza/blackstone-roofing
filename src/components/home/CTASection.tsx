import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-slate-medium text-primary-foreground overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Fix Your Roof?
            <span className="text-accent block mt-2">Get Your Free Quote Today</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether it's a small repair or a complete roof replacement, our team is ready to help. 
            Contact us today for a free, no-obligation quote.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="tel:07882354943">
              <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                Call 07882 354943
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="gap-2 w-full sm:w-auto">
                <Calendar className="h-5 w-5" />
                Request Free Quote
              </Button>
            </Link>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Flat-rate pricing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              No hidden costs
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Free estimates
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Same-day response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Award, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Roof Repair", href: "/services#repair" },
    { name: "Roof Installation", href: "/services#installation" },
    { name: "Flat Roofing", href: "/services#flat" },
    { name: "Chimney Repair", href: "/services#chimney" },
    { name: "Gutter Services", href: "/services#gutters" },
    { name: "Emergency Repairs", href: "/emergency" },
  ];

  const areas = [
    "Oxford",
    "Basingstoke",
    "Bath",
    "Bristol",
    "Swindon",
    "Newbury",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Blackstone</h3>
                <p className="text-xs text-primary-foreground/70 tracking-wider uppercase">Roofing Ltd</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Over 45 years of trusted roofing services in Oxford and surrounding areas. 
              Fully insured with workmanship guarantee.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Areas We Cover</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    to="/areas"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/areas" className="text-accent font-medium hover:underline">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:07882354943" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 mt-0.5 text-accent" />
                  <div>
                    <p className="font-semibold text-primary-foreground">07882 354943</p>
                    <p className="text-sm">24/7 Emergency Line</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="font-semibold text-primary-foreground">Open 24 Hours</p>
                  <p className="text-sm">7 Days a Week</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="font-semibold text-primary-foreground">Oxford</p>
                  <p className="text-sm">& Surrounding Areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="h-5 w-5 text-accent" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Award className="h-5 w-5 text-accent" />
              <span>Workmanship Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span className="text-accent">⭐</span>
              <span>4.9/5 from 87 Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span className="text-accent font-bold">45+</span>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Blackstone Roofing Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Clock, Shield } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Emergency", href: "/emergency" },
  { name: "Reviews", href: "/reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Areas", href: "/areas" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>Open 24/7 - Emergency Service Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>Fully Insured & Guaranteed</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">⭐ 4.9/5</span>
            <span className="text-primary-foreground/70">from 87 Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background"
        }`}
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-foreground leading-tight">
                  Blackstone
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Roofing Ltd
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:07882354943">
                <Button variant="accent" size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden xl:inline">07882 354943</span>
                  <span className="xl:hidden">Call Now</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:07882354943" className="block">
                  <Button variant="accent" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now - 07882 354943
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

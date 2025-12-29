import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within a few hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Quote | Blackstone Roofing Oxford</title>
        <meta 
          name="description" 
          content="Contact Blackstone Roofing for a free quote. Call 07882 354943 or fill out our contact form. We typically respond within a few hours. 24/7 emergency service available." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get Your
                <span className="text-accent block">Free Quote</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl">
                Ready to discuss your roofing needs? Contact us today for a free, 
                no-obligation quote. We typically respond within a few hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07XXX XXXXXX"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service...</option>
                      <option value="roof-repair">Roof Repair</option>
                      <option value="roof-installation">Roof Installation</option>
                      <option value="flat-roofing">Flat Roofing</option>
                      <option value="chimney-repair">Chimney Repair</option>
                      <option value="gutter-services">Gutter Services</option>
                      <option value="roof-inspection">Roof Inspection</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your roofing needs..."
                      rows={5}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6 mb-12">
                  <a 
                    href="tel:07882354943"
                    className="flex items-start gap-4 p-6 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Call Us Now</p>
                      <p className="text-accent font-display text-2xl font-bold">07882 354943</p>
                      <p className="text-muted-foreground text-sm mt-1">24/7 Emergency Line Available</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Opening Hours</p>
                      <p className="text-foreground font-medium">Open 24 Hours</p>
                      <p className="text-muted-foreground text-sm mt-1">7 Days a Week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Service Area</p>
                      <p className="text-foreground font-medium">Oxford & Surrounding Areas</p>
                      <p className="text-muted-foreground text-sm mt-1">Including Swindon, Bath, Bristol, Newbury</p>
                    </div>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="bg-primary text-primary-foreground rounded-xl p-8">
                  <h3 className="font-display font-bold text-xl mb-6">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Free, no-obligation quotes",
                      "Typically respond within hours",
                      "Flat-rate pricing - no surprises",
                      "45+ years of experience",
                      "Fully insured & guaranteed",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;

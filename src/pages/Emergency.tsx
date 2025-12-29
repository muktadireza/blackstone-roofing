import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Clock, AlertTriangle, CheckCircle, Zap, Shield } from "lucide-react";

const Emergency = () => {
  const emergencyServices = [
    "Storm damage repairs",
    "Major roof leaks",
    "Fallen trees on roof",
    "Structural damage",
    "Chimney collapse",
    "Urgent tile replacement",
    "Emergency waterproofing",
    "Temporary roof covering",
  ];

  return (
    <>
      <Helmet>
        <title>24/7 Emergency Roofing Repairs Oxford | Blackstone Roofing</title>
        <meta 
          name="description" 
          content="24/7 emergency roofing repairs in Oxford. Rapid response for storm damage, leaks & urgent repairs. Call now: 07882 354943. Fully insured, immediate assistance." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-destructive text-destructive-foreground py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-10 w-10 animate-pulse" />
                <span className="font-semibold text-lg tracking-wider uppercase">Emergency Service</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                24/7 Emergency
                <span className="block">Roofing Repairs</span>
              </h1>
              <p className="text-destructive-foreground/90 text-lg md:text-xl mb-8">
                Roof emergency? We're here to help. Our team responds quickly to urgent 
                roofing situations across Oxford and surrounding areas, day or night.
              </p>
              <a href="tel:07882354943">
                <Button 
                  size="xl" 
                  className="gap-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-10 py-6 h-auto animate-pulse"
                >
                  <Phone className="h-6 w-6" />
                  Call Now: 07882 354943
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-12 bg-accent text-accent-foreground">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex items-center gap-4">
                <Zap className="h-12 w-12" />
                <div>
                  <p className="font-display text-3xl font-bold">Rapid Response</p>
                  <p className="text-accent-foreground/80">Typically within hours</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-accent-foreground/20" />
              <div className="flex items-center gap-4">
                <Clock className="h-12 w-12" />
                <div>
                  <p className="font-display text-3xl font-bold">24/7 Available</p>
                  <p className="text-accent-foreground/80">Day or night, weekends included</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-accent-foreground/20" />
              <div className="flex items-center gap-4">
                <Shield className="h-12 w-12" />
                <div>
                  <p className="font-display text-3xl font-bold">Fully Insured</p>
                  <p className="text-accent-foreground/80">Complete peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                  Emergency Services
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What We Cover
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our emergency team is equipped to handle all urgent roofing situations. 
                  We'll secure your property quickly and carry out permanent repairs as needed.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {emergencyServices.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
                <h3 className="font-display text-2xl font-bold mb-4">Have an Emergency?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Don't wait - roof damage can quickly worsen. Call us immediately and 
                  we'll be there to help.
                </p>
                <a href="tel:07882354943" className="block">
                  <Button variant="hero" size="xl" className="w-full gap-2 text-xl">
                    <Phone className="h-6 w-6" />
                    07882 354943
                  </Button>
                </a>
                <p className="text-center text-primary-foreground/60 mt-4 text-sm">
                  Available 24 hours, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Our Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                How We Respond
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Call Us", desc: "Contact our 24/7 emergency line" },
                { step: "2", title: "Assessment", desc: "We assess the situation over the phone" },
                { step: "3", title: "Rapid Response", desc: "Our team arrives to secure your property" },
                { step: "4", title: "Permanent Fix", desc: "We complete lasting repairs" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Emergency;

import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Clock, CheckCircle, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Workmanship",
      description: "Every job is completed to the highest standards, backed by our workmanship guarantee.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "We prioritize clear communication, fair pricing, and complete customer satisfaction.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "When we say we'll be there, we mean it. Punctuality and dependability are our hallmarks.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Local Expertise",
      description: "45+ years serving Oxford means we understand local building styles and weather challenges.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Blackstone Roofing Ltd | 45+ Years Serving Oxford</title>
        <meta 
          name="description" 
          content="Learn about Blackstone Roofing Ltd - a locally owned roofing company with over 45 years of experience serving Oxford. Fully insured, workmanship guaranteed." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="relative container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                45+ Years of Trusted
                <span className="text-accent block">Roofing Excellence</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl">
                Blackstone Roofing Ltd is a locally owned and operated roofing company 
                that has been serving Oxford and surrounding areas for over four decades.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building Trust, One Roof at a Time
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded over 45 years ago, Blackstone Roofing Ltd started as a small family 
                    business with a simple mission: provide honest, high-quality roofing services 
                    to our local community.
                  </p>
                  <p>
                    Over the decades, we've grown from a one-man operation to a team of skilled 
                    professionals, but our core values remain unchanged. We still treat every 
                    customer like a neighbor and every project like it's our own home.
                  </p>
                  <p>
                    Today, we're proud to be one of the most trusted roofing companies in Oxford, 
                    with a 4.9-star rating from 87 Google reviews and thousands of satisfied 
                    customers across the region.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <div className="font-display text-5xl font-bold text-accent mb-2">45+</div>
                  <p className="text-primary-foreground/70">Years Experience</p>
                </div>
                <div className="bg-muted rounded-2xl p-8 text-center">
                  <div className="font-display text-5xl font-bold text-accent mb-2">4.9</div>
                  <p className="text-muted-foreground">Star Rating</p>
                </div>
                <div className="bg-muted rounded-2xl p-8 text-center">
                  <div className="font-display text-5xl font-bold text-accent mb-2">87</div>
                  <p className="text-muted-foreground">Google Reviews</p>
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <div className="font-display text-5xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-primary-foreground/70">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Sets Us Apart
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-background rounded-xl p-8 text-center shadow-md">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Why Trust Blackstone Roofing?
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Google Verified Business",
                      "Fully insured for all work",
                      "Workmanship guarantee on every job",
                      "Flat-rate pricing with no hidden costs",
                      "Locally owned and operated",
                      "Responsive - typically reply within hours",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <p className="text-primary-foreground/70 mb-4">Ready to work with us?</p>
                  <a href="tel:07882354943">
                    <Button variant="hero" size="xl" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Call 07882 354943
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

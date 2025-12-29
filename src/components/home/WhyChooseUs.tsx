import { Shield, Award, Clock, Users, CheckCircle, Phone } from "lucide-react";

const stats = [
  { value: "45+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
  { value: "4.9", label: "Star Rating", icon: <span className="text-2xl">⭐</span> },
  { value: "87", label: "Google Reviews", icon: <Users className="h-6 w-6" /> },
  { value: "24/7", label: "Emergency Service", icon: <Clock className="h-6 w-6" /> },
];

const features = [
  "Flat-rate pricing with no hidden costs",
  "Fully insured for your peace of mind",
  "Workmanship guarantee on all jobs",
  "Locally owned and operated",
  "Fast response times",
  "Free, no-obligation quotes",
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Oxford's Most Trusted 
              <span className="text-accent"> Roofing Company</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              For over 45 years, Blackstone Roofing has been the go-to choice for homeowners 
              and businesses across Oxford. Our commitment to quality workmanship, transparent 
              pricing, and exceptional customer service has earned us a 4.9-star rating from 
              87 satisfied customers.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="tel:07882354943" 
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 rounded-lg font-semibold hover:brightness-110 transition-all shadow-lg hover:shadow-glow"
            >
              <Phone className="h-5 w-5" />
              <div>
                <p className="text-sm opacity-80">Call us today</p>
                <p className="text-lg font-bold">07882 354943</p>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 text-center hover:bg-primary-foreground/10 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-xl text-accent mb-4">
                  {stat.icon}
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

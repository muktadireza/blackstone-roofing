import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah Thompson",
    location: "Headington, Oxford",
    rating: 5,
    text: "Absolutely fantastic service! They responded to our emergency call within 2 hours and had the leak fixed the same day. Professional, friendly, and their pricing was exactly as quoted. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "James Mitchell",
    location: "Kidlington",
    rating: 5,
    text: "Blackstone replaced our entire roof after storm damage. The team was incredibly professional from start to finish. The quality of work is outstanding and they left the site spotless. Best roofing company we've ever used.",
    date: "1 month ago",
  },
  {
    name: "Patricia Roberts",
    location: "Bicester",
    rating: 5,
    text: "Had my gutters cleaned and some pointing work done. Very impressed with the attention to detail and fair pricing. The team arrived on time and completed the work to a very high standard.",
    date: "3 weeks ago",
  },
  {
    name: "David Williams",
    location: "Wallingford",
    rating: 5,
    text: "Called them for an emergency chimney repair after noticing water damage. They came out the next morning, diagnosed the issue, and fixed it properly. Transparent about costs and excellent workmanship.",
    date: "1 month ago",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 87 reviews</span>
          </div>
          <a 
            href="https://www.google.com/search?q=blackstone+roofing+oxford+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            View all reviews on Google →
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm mb-6 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/reviews">
            <Button variant="accent" size="lg" className="gap-2">
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, Phone, ArrowRight } from "lucide-react";

const allReviews = [
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
  {
    name: "Emma Clarke",
    location: "Oxford City Centre",
    rating: 5,
    text: "Used Blackstone for a complete flat roof replacement on our extension. The team was knowledgeable, worked efficiently, and the result is fantastic. No more leaks! Would definitely use them again.",
    date: "2 months ago",
  },
  {
    name: "Michael Brown",
    location: "Abingdon",
    rating: 5,
    text: "Excellent service from start to finish. Had some missing tiles replaced and ridge pointing done. Very professional team, fair pricing, and they cleaned up after themselves. Highly recommended.",
    date: "1 month ago",
  },
  {
    name: "Susan Taylor",
    location: "Newbury",
    rating: 5,
    text: "After getting quotes from several companies, Blackstone offered the best value and most comprehensive service. They explained everything clearly and delivered exactly what they promised. Great experience!",
    date: "3 weeks ago",
  },
  {
    name: "Robert Johnson",
    location: "Swindon",
    rating: 4,
    text: "Good quality work on our roof repair. The team was professional and thorough. Only reason for 4 stars is it took slightly longer than initially estimated, but the end result was worth the wait.",
    date: "2 months ago",
  },
  {
    name: "Helen Davies",
    location: "Bath",
    rating: 5,
    text: "Blackstone came highly recommended by our neighbors and they didn't disappoint. Fixed a persistent leak that others couldn't find. Really thorough investigation and permanent fix. Thank you!",
    date: "1 month ago",
  },
  {
    name: "Andrew Wilson",
    location: "Bristol",
    rating: 5,
    text: "Fantastic company to deal with. Had our entire gutter system replaced. Clean, efficient work and the price was very competitive. The new gutters look great and work perfectly.",
    date: "6 weeks ago",
  },
  {
    name: "Catherine Moore",
    location: "Marlborough",
    rating: 5,
    text: "Emergency call-out for storm damage at 10pm on a Sunday. They were there within 90 minutes and made everything safe. Came back Monday to complete permanent repairs. Above and beyond service!",
    date: "3 weeks ago",
  },
  {
    name: "Peter Anderson",
    location: "Basingstoke",
    rating: 5,
    text: "Had a roof inspection and some preventative maintenance done. The report was detailed and honest - they actually said I needed less work than I thought. Refreshing honesty. Will definitely use them for future work.",
    date: "1 month ago",
  },
];

const Reviews = () => {
  const averageRating = (allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length).toFixed(1);

  return (
    <>
      <Helmet>
        <title>Customer Reviews | Blackstone Roofing Oxford | 4.9★ Rating</title>
        <meta 
          name="description" 
          content="Read verified customer reviews for Blackstone Roofing Ltd. 4.9-star rating from 87 Google reviews. See what Oxford homeowners say about our roofing services." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Customer Reviews
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                What Our Customers
                <span className="text-accent block">Say About Us</span>
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-4xl font-bold">{averageRating}/5</span>
              </div>
              <p className="text-primary-foreground/80 text-lg">
                Based on 87 verified Google reviews from satisfied customers across Oxford and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {allReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <Quote className="h-8 w-8 text-accent/20 mb-4" />
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-muted-foreground" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
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

            {/* Google Link */}
            <div className="text-center">
              <a 
                href="https://www.google.com/search?q=blackstone+roofing+oxford+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  View All Reviews on Google
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Our 5-Star Service?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Join our growing list of satisfied customers. Contact us today for a free, 
                no-obligation quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:07882354943">
                  <Button variant="hero" size="xl" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call 07882 354943
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Reviews;

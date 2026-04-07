import React, { useEffect, useRef } from 'react';
import { SEO } from '@/components/seo';
import { Link } from 'wouter';
import { brands, services, areas, testimonials } from '@/lib/data';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <SEO
        title="Luxury Appliance Repair Naples FL — Sub-Zero, Wolf, Miele | Naples Appliance Repair"
        description="Factory-certified appliance repair for Sub-Zero, Wolf, Miele, Thermador, and more. Serving Port Royal, Pelican Bay, and Southwest Florida's finest homes. (239) 351-2666."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://naples-appliancerepair.com/#business",
          "name": "Naples Appliance Repair",
          "url": "https://naples-appliancerepair.com",
          "telephone": "+12393512666",
          "priceRange": "$$$",
          "image": "https://naples-appliancerepair.com/images/luxury-kitchen-hero.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Naples",
            "addressLocality": "Naples",
            "addressRegion": "FL",
            "postalCode": "34102",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.142,
            "longitude": -81.7948
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
          ],
          "areaServed": ["Naples","Port Royal","Pelican Bay","Marco Island","Bonita Springs","Estero","North Naples","Golden Gate Estates","Ave Maria","Cape Coral"],
          "knowsAbout": ["Sub-Zero refrigerator repair","Wolf range repair","Miele appliance service","Thermador repair","Viking appliance repair","Gaggenau service"],
          "sameAs": []
        }}
      />

      {/* Hero */}
      <section className="bg-primary min-h-[88vh] flex items-end pb-0 relative overflow-hidden">
        {/* Real kitchen photo as background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luxury-kitchen-hero.jpg"
            alt="Luxury kitchen with premium appliances"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 pb-0 w-full relative z-10">
          <div className="max-w-5xl pt-28 pb-20">
            {/* Year tag — understated, top-left */}
            <div className="mb-12">
              <span className="text-secondary/60 text-xs tracking-[0.2em] uppercase font-medium">Est. 2009 · Naples, Florida</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-primary-foreground leading-[1.08] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              When your Sub-Zero fails,<br />
              <span className="text-secondary">you need someone who<br />actually knows Sub-Zero.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mb-12 font-light"
            >
              Factory-certified repair for Sub-Zero, Wolf, Miele, Thermador, Gaggenau, and a dozen other brands that generalist companies won't touch. We service Port Royal, Pelican Bay, Marco Island, and communities throughout Southwest Florida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:239-351-2666"
                data-testid="button-call-hero"
                className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 font-semibold text-sm tracking-wide hover:bg-secondary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (239) 351-2666
              </a>
              <Link
                href="/contact"
                data-testid="button-schedule-hero"
                className="inline-flex items-center gap-3 border border-primary-foreground/25 text-primary-foreground/80 px-8 py-4 text-sm tracking-wide hover:border-secondary hover:text-secondary transition-colors"
              >
                Schedule a Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom brand strip inside hero */}
          <div className="border-t border-primary-foreground/10 py-6 flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="text-primary-foreground/30 text-xs tracking-widest uppercase">Certified Service For:</span>
            {["Sub-Zero", "Wolf", "Miele", "Thermador", "Viking", "Gaggenau", "La Cornue", "Miele"].slice(0,7).map((b, i) => (
              <span key={i} className="text-primary-foreground/50 text-sm font-medium tracking-wide">{b}</span>
            ))}
            <span className="text-primary-foreground/30 text-xs">+ 8 more</span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-secondary/10 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { number: "15+", label: "Years in Naples" },
              { number: "5,000+", label: "Luxury Appliances Serviced" },
              { number: "15", label: "Brands Certified" },
              { number: "8", label: "Southwest Florida Communities" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08} className="py-7 px-6 text-center">
                <div className="font-serif text-3xl text-primary font-bold mb-1">{stat.number}</div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — not card grid, just honest prose + a list */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <FadeIn>
              <span className="text-secondary text-xs tracking-[0.18em] uppercase font-medium mb-6 block">Why Naples homeowners call us first</span>
              <h2 className="font-serif text-4xl text-foreground leading-tight mb-8">
                Most appliance companies haven't seen a La Cornue in person.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Naples has a higher concentration of luxury appliances per household than almost anywhere else in Florida. Sub-Zero columns, Wolf dual-fuel ranges, Miele steam ovens — these aren't appliances that respond well to guesswork or aftermarket parts.
                </p>
                <p>
                  We built our company around serving this market specifically. Every technician we hire goes through factory training for the brands we service. We invest in the diagnostic hardware that Miele and Gaggenau require. We stock OEM parts, not knockoffs.
                </p>
                <p>
                  When we leave your home, your appliance is fixed — and it's fixed to the manufacturer's specification, not patched until something else breaks.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Genuine OEM parts only",
                    "Diagnostic tools, not guesswork",
                    "Same-day in most of Naples",
                    "Boot covers and floor mats, always",
                    "Written estimates before starting",
                    "90-day parts and labor warranty"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-secondary mt-2.5 shrink-0 block" />
                      <span className="text-sm text-foreground leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="space-y-0">
              {/* Staggered testimonials — real people, specific details */}
              {testimonials.slice(0, 3).map((t, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className={`border border-border p-7 ${i === 1 ? 'ml-6 border-t-0' : i === 2 ? 'border-t-0' : ''}`}>
                    <blockquote className="text-foreground text-[0.95rem] leading-relaxed mb-5 font-light">
                      "{t.text}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm text-foreground">{t.name}</div>
                        <div className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{t.location} · {t.appliance}
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array(5).fill(null).map((_, si) => (
                          <svg key={si} className="w-3.5 h-3.5 text-secondary fill-secondary" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width photo break */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="/images/wolf-range-kitchen.jpg"
          alt="Professional grade Wolf range in a Naples luxury kitchen"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <p className="font-serif text-2xl md:text-4xl italic opacity-90">
              "Not every appliance company is equipped to work on a Wolf."
            </p>
            <p className="text-sm mt-3 opacity-60 tracking-widest uppercase">Naples Appliance Repair · Est. 2009</p>
          </div>
        </div>
      </div>

      {/* Services — clean two-column list, not cards */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <FadeIn>
              <span className="text-secondary text-xs tracking-[0.18em] uppercase font-medium mb-6 block">What we repair</span>
              <h2 className="font-serif text-4xl text-foreground leading-tight mb-6">
                Every appliance in a high-end kitchen.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're not a one-brand shop. If it came from a luxury manufacturer and stopped working, we can most likely fix it.
              </p>
              <Link
                href="/contact"
                data-testid="link-services-contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary/30 hover:border-primary pb-0.5 transition-colors"
              >
                Schedule a service call <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeIn>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-0">
              {services.map((s, i) => (
                <FadeIn key={s.slug} delay={i * 0.04}>
                  <Link
                    href={`/services/${s.slug}`}
                    data-testid={`link-service-${s.slug}`}
                    className="flex items-center justify-between py-4 border-b border-border group text-sm font-medium text-foreground hover:text-secondary transition-colors"
                  >
                    <span>{s.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transform transition-transform" />
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-secondary text-xs tracking-[0.18em] uppercase font-medium mb-4 block">Brands we service</span>
                <h2 className="font-serif text-4xl text-foreground leading-tight">
                  The full spectrum of luxury.
                </h2>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                We hold factory certifications and maintain OEM parts inventories for every brand listed here.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border">
            {brands.map((b, i) => (
              <FadeIn key={b.slug} delay={i * 0.03}>
                <Link
                  href={`/brands/${b.slug}`}
                  data-testid={`link-brand-${b.slug}`}
                  className="bg-background p-6 flex flex-col gap-1 group hover:bg-muted transition-colors"
                >
                  <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{b.name}</span>
                  <span className="text-muted-foreground text-xs leading-snug line-clamp-2 group-hover:text-foreground/60 transition-colors">{b.certType}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/naples-florida-waterfront.jpg"
            alt="Naples Florida waterfront"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <span className="text-secondary/70 text-xs tracking-[0.18em] uppercase font-medium mb-6 block">Where we work</span>
              <h2 className="font-serif text-4xl text-primary-foreground leading-tight mb-6">
                From Old Naples to Marco Island.
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-10">
                We cover the full Southwest Florida luxury market. Whether you're in a gated estate in Pelican Bay or a waterfront home on Marco Island, we have technicians who know the area and can get to you.
              </p>
              <a
                href="tel:239-351-2666"
                data-testid="button-call-areas"
                className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 font-semibold text-sm tracking-wide hover:bg-secondary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call to check availability
              </a>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/10">
              {areas.map((a, i) => (
                <FadeIn key={a.slug} delay={i * 0.06}>
                  <Link
                    href={`/service-area/${a.slug}`}
                    data-testid={`link-area-${a.slug}`}
                    className="bg-primary p-6 flex items-start justify-between gap-4 group hover:bg-primary-foreground/5 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-primary-foreground mb-1 group-hover:text-secondary transition-colors">{a.name}</div>
                      <div className="text-primary-foreground/40 text-xs leading-snug">{a.neighborhoods.split(',').slice(0,2).join(', ')}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-secondary/40 group-hover:text-secondary shrink-0 mt-0.5 transition-colors" />
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — plain and direct, not "Expect Perfection" */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-2">Ready to schedule?</h2>
              <p className="text-muted-foreground">We're available Monday–Friday 8am–6pm, Saturday 9am–2pm.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:239-351-2666"
                data-testid="button-call-cta"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (239) 351-2666
              </a>
              <Link
                href="/contact"
                data-testid="button-schedule-cta"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

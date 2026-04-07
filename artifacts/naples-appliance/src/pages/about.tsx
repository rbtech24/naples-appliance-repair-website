import React from 'react';
import { SEO } from '@/components/seo';
import { Link } from 'wouter';
import { Phone, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function About() {
  return (
    <div className="w-full">
      <SEO
        title="About Naples Appliance Repair | Factory-Certified Since 2009"
        description="Naples Appliance Repair has served Southwest Florida's luxury homes since 2009. Factory-certified for Sub-Zero, Wolf, Miele, and more. Learn about our team and approach."
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">About</span>
        </div>
      </div>

      {/* Hero — left-aligned, factual, no taglines */}
      <section className="bg-primary text-primary-foreground py-20 border-b-2 border-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-secondary/60 text-xs tracking-[0.18em] uppercase font-medium mb-8">Est. 2009 · Naples, Florida</div>
            <h1 className="font-serif leading-tight text-primary-foreground mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              About Naples Appliance Repair
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl font-light">
              We've been servicing luxury appliances in Southwest Florida since 2009. Here's how we built the company and why we run it the way we do.
            </p>
          </div>
        </div>
      </section>

      {/* Main story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="font-serif text-3xl text-foreground mb-4">How this company started</h2>
                <div className="w-10 h-px bg-secondary mb-7" />
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    We started in 2009 when Naples had plenty of appliance repair companies but very few that actually knew how to work on luxury brands. The Sub-Zero dealer would tell homeowners their refrigerator needed a part that would take three weeks to arrive. A generic company would show up and charge $800 to replace a part that wasn't the real issue.
                  </p>
                  <p>
                    We invested heavily in factory training and OEM parts inventory specifically for the brands that Naples homeowners actually own. Sub-Zero, Wolf, Miele, Gaggenau — these aren't appliances that respond well to approximation. They're precision equipment, and they require technicians who understand them at a mechanical level.
                  </p>
                  <p>
                    Over 15 years, we've built a reputation in Port Royal, Pelican Bay, Park Shore, Marco Island, and across the region. We've worked on La Cornue ranges worth more than most cars, on Sub-Zero columns integrated into $40,000 cabinetry, and on Gaggenau combi-steam ovens that most technicians have never even seen in person.
                  </p>
                </div>
              </div>

              {/* Technician photo */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src="/images/technician-repair.jpg"
                  alt="Naples Appliance Repair technician servicing a luxury appliance"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">How we actually run service calls</h2>
                <div className="space-y-0 border border-border divide-y divide-border">
                  {[
                    {
                      title: "We arrive on time, in clean vehicles",
                      desc: "Our service vehicles are stocked with OEM parts for the most common failures we encounter. We give 30-minute call-ahead windows, not 4-hour gaps."
                    },
                    {
                      title: "Boot covers and floor mats before anything else",
                      desc: "Before we open a tool bag, protective mats go down. Before we cross your threshold, shoe covers are on. This isn't a box we check — it's just how we operate."
                    },
                    {
                      title: "We diagnose before we quote",
                      desc: "We use manufacturer-approved diagnostic tools and reference factory service documentation. We tell you exactly what's wrong and what it costs to fix before we touch anything."
                    },
                    {
                      title: "OEM parts, not substitutes",
                      desc: "Aftermarket parts exist and they're cheaper. We don't use them. Genuine manufacturer parts protect your warranty and last as long as the original equipment."
                    },
                    {
                      title: "We test before we leave",
                      desc: "After every repair, we run a full test cycle to confirm the fix is complete. We don't declare a job done until the appliance demonstrates that it's working correctly."
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-6 flex gap-5">
                      <span className="font-serif text-secondary text-xl font-bold shrink-0 w-7 leading-none mt-0.5">{i + 1}</span>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-2">{item.title}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">What our customers say</h2>
                <div className="space-y-0 divide-y divide-border border border-border">
                  {testimonials.slice(0, 3).map((t, i) => (
                    <div key={i} className="p-6">
                      <blockquote className="text-foreground text-sm leading-relaxed mb-4 font-light">
                        "{t.text}"
                      </blockquote>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">{t.name}</span> · {t.location} · {t.appliance}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats — simple data, not icon cards */}
              <div className="border border-border">
                <div className="p-5 border-b border-border">
                  <div className="font-serif text-3xl text-secondary font-bold">2009</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Year Founded</div>
                </div>
                <div className="p-5 border-b border-border">
                  <div className="font-serif text-3xl text-secondary font-bold">15</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Luxury Brands Certified</div>
                </div>
                <div className="p-5 border-b border-border">
                  <div className="font-serif text-3xl text-secondary font-bold">5,000+</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Appliances Serviced</div>
                </div>
                <div className="p-5">
                  <div className="font-serif text-3xl text-secondary font-bold">8</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Communities Served</div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground p-7">
                <div className="text-secondary/70 text-xs tracking-widest uppercase font-medium mb-4">Schedule service</div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  Monday through Friday, 8am to 6pm. Saturday 9am to 2pm. Same-day often available.
                </p>
                <a
                  href="tel:239-351-2666"
                  data-testid="button-call-about"
                  className="text-2xl font-bold font-serif text-secondary hover:text-secondary/80 transition-colors block mb-5"
                >
                  (239) 351-2666
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 border border-secondary/30 text-secondary/80 hover:border-secondary hover:text-secondary transition-colors py-3 text-xs tracking-wider uppercase"
                >
                  Send a message
                </Link>
              </div>

              {/* Naples photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/naples-luxury-home.jpg"
                  alt="Naples Florida luxury home — service area"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary/25" />
                <div className="absolute bottom-3 left-4 text-xs text-primary-foreground/60 tracking-wider uppercase">Naples, FL · Our Service Area</div>
              </div>

              {/* Certifications */}
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground text-sm mb-4">Factory certifications held</h4>
                <div className="space-y-2">
                  {[
                    "Sub-Zero Wolf Certified Service",
                    "Miele Factory Trained",
                    "Thermador Certified",
                    "Viking Factory Trained",
                    "Gaggenau Specialist",
                    "Bosch Certified Service",
                    "Dacor Certified"
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-secondary rounded-full shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

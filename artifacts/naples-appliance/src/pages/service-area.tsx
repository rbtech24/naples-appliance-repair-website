import React from 'react';
import { useParams, Link } from 'wouter';
import { SEO } from '@/components/seo';
import { areas, brands, services } from '@/lib/data';
import { areaPhotos } from '@/lib/photos';
import NotFound from './not-found';
import { Phone, ChevronRight, ArrowRight } from 'lucide-react';

export default function ServiceAreaPage() {
  const { slug } = useParams();
  const area = areas.find(a => a.slug === slug);

  if (!area) return <NotFound />;

  const photo = areaPhotos[slug || ''] || '/images/naples-luxury-home.jpg';

  return (
    <div className="w-full">
      <SEO
        title={`Luxury Appliance Repair in ${area.name}, FL — Sub-Zero, Wolf, Miele Service`}
        description={`Premium appliance repair in ${area.name}, FL. ${area.headline} Serving ${area.neighborhoods}. Call (239) 351-2666.`}
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Service Areas</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">{area.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 border-b-2 border-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-secondary/60 text-xs tracking-[0.18em] uppercase font-medium mb-8">Southwest Florida · Luxury Appliance Repair</div>
            <h1 className="font-serif leading-tight text-primary-foreground mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Appliance Repair in<br />
              <span className="text-secondary">{area.name}, Florida</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mb-10 font-light">
              {area.headline}
            </p>
            <a
              href="tel:239-351-2666"
              data-testid={`button-call-area-${area.slug}`}
              className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 font-semibold text-sm tracking-wide hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (239) 351-2666
            </a>
          </div>
        </div>
      </section>

      {/* Area photo — full width */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={photo}
          alt={`${area.name}, Florida — luxury appliance service area`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/25" />
      </div>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-12">
              {/* About this area */}
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-4">Serving {area.name} homeowners</h2>
                <div className="w-10 h-px bg-secondary mb-7" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{area.body}</p>
                  <p>{area.areaContext}</p>
                </div>
              </div>

              {/* Neighborhoods */}
              <div className="bg-muted border border-border p-8">
                <h3 className="font-serif text-xl text-foreground mb-5">Communities we serve in {area.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.split(',').map((n, i) => (
                    <span key={i} className="bg-background border border-border text-foreground text-sm px-3 py-1.5">
                      {n.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services available */}
              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">Services available in {area.name}</h3>
                <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                  {services.map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      data-testid={`link-service-from-area-${s.slug}`}
                      className="bg-background flex items-center justify-between px-5 py-4 group hover:bg-muted transition-colors text-sm text-foreground"
                    >
                      <span>{s.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Brands in this area */}
              <div>
                <h3 className="font-serif text-xl text-foreground mb-3">Brands we service in {area.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">We carry OEM parts for all of the following manufacturers and service them across {area.name} and surrounding communities.</p>
                <div className="flex flex-wrap gap-2">
                  {brands.map(b => (
                    <Link
                      key={b.slug}
                      href={`/brands/${b.slug}`}
                      data-testid={`link-brand-from-area-${b.slug}`}
                      className="border border-border hover:border-primary hover:text-primary px-4 py-2 text-sm text-foreground transition-colors"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary text-primary-foreground p-7">
                <div className="text-secondary/70 text-xs tracking-widest uppercase font-medium mb-4">Schedule in {area.name}</div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  Call us to check same-day or next-day availability in {area.name}. We'll dispatch the closest certified technician to your location.
                </p>
                <a
                  href="tel:239-351-2666"
                  data-testid={`button-sidebar-call-area-${area.slug}`}
                  className="text-2xl font-bold font-serif text-secondary hover:text-secondary/80 transition-colors block mb-5"
                >
                  (239) 351-2666
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 border border-secondary/30 text-secondary/80 hover:border-secondary hover:text-secondary transition-colors py-3 text-xs tracking-wider uppercase"
                >
                  Request online
                </Link>
              </div>

              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground text-sm mb-4">Business hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Mon – Fri</span><span>8:00am – 6:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>9:00am – 2:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>

              {/* Other areas */}
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground text-sm mb-4">Other service areas</h4>
                <div className="space-y-0 divide-y divide-border">
                  {areas.filter(a => a.slug !== area.slug).map(a => (
                    <Link
                      key={a.slug}
                      href={`/service-area/${a.slug}`}
                      className="flex items-center justify-between py-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      {a.name}
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
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

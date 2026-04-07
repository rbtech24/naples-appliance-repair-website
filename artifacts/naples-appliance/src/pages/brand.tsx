import React from 'react';
import { useParams, Link } from 'wouter';
import { SEO } from '@/components/seo';
import { brands, services } from '@/lib/data';
import { brandPhotos } from '@/lib/photos';
import NotFound from './not-found';
import { Phone, ChevronRight, ArrowRight } from 'lucide-react';

export default function BrandPage() {
  const { slug } = useParams();
  const brand = brands.find(b => b.slug === slug);

  if (!brand) return <NotFound />;

  const photo = brandPhotos[slug || ''] || '/images/kitchen-interior.jpg';

  return (
    <div className="w-full">
      <SEO
        title={`${brand.name} Appliance Repair in Naples, FL | ${brand.certType}`}
        description={`${brand.name} repair in Naples, FL. ${brand.tagline} Serving Port Royal, Pelican Bay, Marco Island, and Southwest Florida.`}
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Brands</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">{brand.name}</span>
        </div>
      </div>

      {/* Hero — left-aligned, not centered */}
      <section className="bg-primary text-primary-foreground py-20 border-b-2 border-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-secondary/60 text-xs tracking-[0.18em] uppercase font-medium mb-8">{brand.certType}</div>
            <h1 className="font-serif leading-tight text-primary-foreground mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              {brand.name} Service &amp; Repair<br />
              <span className="text-secondary">in Naples, Florida</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mb-10 font-light">
              {brand.tagline}
            </p>
            <a
              href="tel:239-351-2666"
              data-testid={`button-call-brand-${brand.slug}`}
              className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 font-semibold text-sm tracking-wide hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (239) 351-2666
            </a>
          </div>
        </div>
      </section>

      {/* Brand photo — full width */}
      <div className="relative h-56 md:h-80 overflow-hidden">
        <img
          src={photo}
          alt={`${brand.name} appliance in a luxury Naples kitchen`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/25" />
      </div>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-4">Our {brand.name} expertise</h2>
                <div className="w-10 h-px bg-secondary mb-7" />
                <p className="text-muted-foreground text-base leading-relaxed">
                  {brand.body}
                </p>
              </div>

              {/* Common issues — list, not icon cards */}
              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">Common {brand.name} issues we resolve</h3>
                <ul className="space-y-0 divide-y divide-border border border-border">
                  {brand.commonIssues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-4 px-5 py-4">
                      <span className="font-serif text-secondary text-lg font-bold shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-foreground text-sm leading-relaxed">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* OEM commitment */}
              <div className="bg-muted border border-border p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">We use only genuine {brand.name} parts</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Aftermarket parts may fit, but they rarely perform the same as OEM components — and in some cases, they void your manufacturer's warranty. We source directly from {brand.name}'s authorized distribution network, ensuring every repair meets the same standard as factory service.
                </p>
              </div>

              {/* All services */}
              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">Related services</h3>
                <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                  {services.slice(0, 6).map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      data-testid={`link-service-from-brand-${s.slug}`}
                      className="bg-background flex items-center justify-between px-5 py-4 group hover:bg-muted transition-colors text-sm text-foreground"
                    >
                      <span>{s.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="space-y-6">
              {/* Contact block */}
              <div className="bg-primary text-primary-foreground p-7">
                <div className="text-secondary/70 text-xs tracking-widest uppercase font-medium mb-4">Need {brand.name} service?</div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  Our dispatch team can usually schedule a certified technician within 24 hours across Naples and the surrounding area.
                </p>
                <a
                  href="tel:239-351-2666"
                  data-testid={`button-sidebar-call-${brand.slug}`}
                  className="text-2xl font-bold font-serif text-secondary hover:text-secondary/80 transition-colors block mb-5"
                >
                  (239) 351-2666
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 border border-secondary/30 text-secondary/80 hover:border-secondary hover:text-secondary transition-colors py-3 text-xs tracking-wider uppercase"
                >
                  Or book online
                </Link>
              </div>

              {/* Hours */}
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground text-sm mb-4">Business hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Mon – Fri</span><span>8:00am – 6:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>9:00am – 2:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>

              {/* Areas served */}
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground text-sm mb-4">Areas we serve</h4>
                <div className="space-y-1">
                  {["Naples", "Marco Island", "Bonita Springs", "Estero", "North Naples"].map(area => (
                    <div key={area} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-secondary rounded-full shrink-0" />
                      {area}
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

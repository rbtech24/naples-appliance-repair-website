import React from 'react';
import { useParams, Link } from 'wouter';
import { SEO } from '@/components/seo';
import { brands, services } from '@/lib/data';
import { servicePhotos } from '@/lib/photos';
import NotFound from './not-found';
import { Phone, ChevronRight, ArrowRight } from 'lucide-react';

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <NotFound />;

  const photo = servicePhotos[slug || ''] || '/images/kitchen-interior.jpg';

  const featuredBrands = service.topBrands
    ? brands.filter(b => (service as any).topBrands.includes(b.slug))
    : brands.slice(0, 5);

  return (
    <div className="w-full">
      <SEO
        title={`${service.name} in Naples, FL — Sub-Zero, Wolf, Miele Experts`}
        description={`${service.name} in Naples, FL. ${service.headline} Factory-certified technicians, OEM parts, same-day service available.`}
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">{service.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 border-b-2 border-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-secondary/60 text-xs tracking-[0.18em] uppercase font-medium mb-8">Naples, FL · Luxury Appliance Service</div>
            <h1 className="font-serif leading-tight text-primary-foreground mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              {service.name} in Naples
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mb-10 font-light">
              {service.headline}
            </p>
            <a
              href="tel:239-351-2666"
              data-testid={`button-call-service-${service.slug}`}
              className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 font-semibold text-sm tracking-wide hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (239) 351-2666
            </a>
          </div>
        </div>
      </section>

      {/* Service photo — full width */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={photo}
          alt={`${service.name} in a Naples luxury home`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-12">
              {/* About this service */}
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-4">How we approach {service.name.toLowerCase()}</h2>
                <div className="w-10 h-px bg-secondary mb-7" />
                <p className="text-muted-foreground text-base leading-relaxed">
                  {service.body}
                </p>
              </div>

              {/* Common issues */}
              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">Issues we diagnose and fix</h3>
                <ul className="space-y-0 divide-y divide-border border border-border">
                  {service.commonIssues.map((issue: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 px-5 py-4">
                      <span className="font-serif text-secondary text-lg font-bold shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-foreground text-sm leading-relaxed">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How a visit works */}
              <div className="bg-muted border border-border p-8">
                <h3 className="font-serif text-xl text-foreground mb-7">What to expect when we arrive</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "We protect your home first", desc: "Boot covers on before we cross the threshold. Floor protection mats placed before any tools come out. Every time." },
                    { step: "2", title: "Accurate diagnosis, not guessing", desc: "We use manufacturer-approved diagnostic equipment and reference factory service documentation — not generic appliance repair logic." },
                    { step: "3", title: "Clear explanation before any work", desc: "We tell you exactly what's wrong and what it costs to fix before we touch anything. Written estimate, no surprises." },
                    { step: "4", title: "OEM repair and verification", desc: "Genuine parts. After installation, we run the appliance through a full test cycle to verify the fix is complete." }
                  ].map(step => (
                    <div key={step.step} className="flex gap-5">
                      <span className="font-serif text-2xl text-secondary/50 font-bold shrink-0 w-8 leading-none">{step.step}</span>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">{step.title}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-serif text-xl text-foreground mb-6">Brands we service for {service.name.toLowerCase()}</h3>
                <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                  {brands.slice(0, 8).map(b => (
                    <Link
                      key={b.slug}
                      href={`/brands/${b.slug}`}
                      data-testid={`link-brand-from-service-${b.slug}`}
                      className="bg-background flex items-center justify-between px-5 py-4 group hover:bg-muted transition-colors text-sm"
                    >
                      <div>
                        <span className="font-medium text-foreground">{b.name}</span>
                        <span className="text-muted-foreground text-xs block">{b.certType}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary text-primary-foreground p-7">
                <div className="text-secondary/70 text-xs tracking-widest uppercase font-medium mb-4">Schedule {service.name}</div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  Same-day service is often available across Naples. Call now to check current availability.
                </p>
                <a
                  href="tel:239-351-2666"
                  data-testid={`button-sidebar-call-service-${service.slug}`}
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

              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground text-sm mb-4">Other services</h4>
                <div className="space-y-0 divide-y divide-border">
                  {services.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between py-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      {s.name}
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

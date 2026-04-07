import React from 'react';
import { Link } from 'wouter';
import { Menu, Phone, X, Clock } from 'lucide-react';
import { brands, services, areas } from '@/lib/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Top utility bar — phone + hours */}
      <div className="bg-primary text-primary-foreground/70 text-xs border-b border-primary-foreground/10 hidden md:block">
        <div className="container mx-auto px-6 h-9 flex items-center justify-between">
          <span className="tracking-wide">Factory-certified luxury appliance repair · Naples, FL 34102</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 opacity-60" />
              Mon–Fri 8am–6pm · Sat 9am–2pm
            </span>
            <a href="tel:239-351-2666" className="flex items-center gap-1.5 text-secondary hover:text-secondary/80 transition-colors font-medium">
              <Phone className="w-3 h-3" />
              (239) 351-2666
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 w-full bg-background/97 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-serif text-xl font-semibold tracking-tight text-primary">Naples Appliance Repair</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border shadow-lg max-h-[60vh] overflow-y-auto min-w-[220px]">
                {services.map(s => (
                  <DropdownMenuItem key={s.slug} asChild>
                    <Link href={`/services/${s.slug}`} className="cursor-pointer text-sm">{s.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer">
                Brands
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border shadow-lg max-h-[60vh] overflow-y-auto min-w-[200px]">
                {brands.map(b => (
                  <DropdownMenuItem key={b.slug} asChild>
                    <Link href={`/brands/${b.slug}`} className="cursor-pointer text-sm">{b.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer">
                Areas
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border shadow-lg max-h-[60vh] overflow-y-auto min-w-[200px]">
                {areas.map(a => (
                  <DropdownMenuItem key={a.slug} asChild>
                    <Link href={`/service-area/${a.slug}`} className="cursor-pointer text-sm">{a.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Schedule Service
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background absolute top-16 w-full left-0 shadow-xl flex flex-col max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="p-4 border-b bg-muted flex items-center justify-between">
              <a href="tel:239-351-2666" className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Phone className="h-4 w-4" />
                (239) 351-2666
              </a>
              <span className="text-muted-foreground text-xs">Mon–Fri 8–6, Sat 9–2</span>
            </div>

            <div className="p-4 flex flex-col">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm font-medium border-b">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm font-medium border-b">About</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm font-medium border-b">Contact</Link>

              <div className="py-3 text-xs tracking-widest uppercase text-secondary font-medium border-b mt-2">Services</div>
              <div className="grid grid-cols-2 gap-1 py-2 border-b">
                {services.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="py-2 px-1 text-sm text-muted-foreground hover:text-foreground">{s.name}</Link>
                ))}
              </div>

              <div className="py-3 text-xs tracking-widest uppercase text-secondary font-medium border-b mt-2">Brands</div>
              <div className="grid grid-cols-2 gap-1 py-2 border-b">
                {brands.map(b => (
                  <Link key={b.slug} href={`/brands/${b.slug}`} onClick={() => setMobileMenuOpen(false)} className="py-2 px-1 text-sm text-muted-foreground hover:text-foreground">{b.name}</Link>
                ))}
              </div>

              <div className="py-3 text-xs tracking-widest uppercase text-secondary font-medium border-b mt-2">Service Areas</div>
              <div className="grid grid-cols-2 gap-1 py-2">
                {areas.map(a => (
                  <Link key={a.slug} href={`/service-area/${a.slug}`} onClick={() => setMobileMenuOpen(false)} className="py-2 px-1 text-sm text-muted-foreground hover:text-foreground">{a.name}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="font-serif text-xl font-semibold text-secondary block mb-5">Naples Appliance Repair</span>
              <p className="text-primary-foreground/60 text-sm mb-6 leading-relaxed">
                Factory-certified service for Sub-Zero, Wolf, Miele, Thermador, Gaggenau, and more. Serving Southwest Florida's luxury homes since 2009.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:239-351-2666" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors">
                  <Phone className="h-3.5 w-3.5" /> (239) 351-2666
                </a>
                <span className="text-primary-foreground/50 block">Naples, FL 34102</span>
                <span className="text-primary-foreground/50 text-xs block">Mon–Fri 8am–6pm · Sat 9am–2pm</span>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-secondary/70 font-medium mb-5">Brands We Service</h3>
              <ul className="space-y-2">
                {brands.slice(0, 8).map(b => (
                  <li key={b.slug}>
                    <Link href={`/brands/${b.slug}`} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">{b.name}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/brands" className="text-secondary/70 hover:text-secondary text-xs uppercase tracking-wider mt-1 block transition-colors">All brands →</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-secondary/70 font-medium mb-5">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 8).map(s => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-secondary/70 font-medium mb-5">Service Areas</h3>
              <ul className="space-y-2">
                {areas.map(a => (
                  <li key={a.slug}>
                    <Link href={`/service-area/${a.slug}`} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">{a.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-primary-foreground/40 text-xs">
            <p>© 2025 Naples Appliance Repair. All rights reserved.</p>
            <p>Naples, FL · Serving Southwest Florida since 2009</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky click-to-call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-2xl border-t border-primary-foreground/20">
        <a
          href="tel:239-351-2666"
          className="flex-1 flex items-center justify-center gap-2.5 bg-secondary text-primary font-bold py-4 text-base tracking-wide"
        >
          <Phone className="w-5 h-5" />
          Call (239) 351-2666
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center px-5 bg-primary text-primary-foreground font-medium text-sm border-l border-primary-foreground/20"
        >
          Book
        </Link>
      </div>

      {/* Spacer so footer isn't hidden behind mobile bar */}
      <div className="md:hidden h-16" />
    </div>
  );
}

import React, { useState } from 'react';
import { SEO } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { brands, services } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Received",
        description: "Our concierge team will contact you shortly to confirm your appointment.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="w-full">
      <SEO 
        title="Contact Us | Schedule Service | Naples Appliance Repair"
        description="Schedule premium appliance repair service in Naples, FL. Contact our concierge team for Sub-Zero, Wolf, and luxury appliance service."
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "url": "https://naples-appliancerepair.com/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "@id": "https://naples-appliancerepair.com/#business",
            "name": "Naples Appliance Repair",
            "url": "https://naples-appliancerepair.com",
            "telephone": "+12393512666",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Naples",
              "addressRegion": "FL",
              "postalCode": "34102",
              "addressCountry": "US"
            }
          }
        }}
      />

      <section className="bg-primary text-primary-foreground py-16 border-b-4 border-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Request <span className="text-secondary italic">Service</span></h1>
          <p className="text-lg text-primary-foreground/80 font-light">
            Fast, discrete, and professional service for your luxury appliances.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-6">Concierge Desk</h2>
                <p className="text-muted-foreground mb-8">
                  For immediate emergency service regarding refrigeration or active leaks, please call our dispatch directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium">Phone</h3>
                    <a href="tel:239-351-2666" className="text-muted-foreground hover:text-primary text-lg">(239) 351-2666</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium">Email</h3>
                    <a href="mailto:service@naplesappliance.com" className="text-muted-foreground hover:text-primary">service@naplesappliance.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium">Headquarters</h3>
                    <p className="text-muted-foreground">Naples, FL 34102<br/>Serving all of Southwest Florida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium">Hours of Operation</h3>
                    <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 6:00 PM<br/>Saturday: 9:00 AM – 2:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-card p-8 border border-card-border shadow-sm">
              <h2 className="text-2xl font-serif text-foreground mb-6">Service Request Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <Input required placeholder="Jane Doe" className="rounded-none h-12 bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <Input required type="tel" placeholder="(239) 555-0000" className="rounded-none h-12 bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <Input required type="email" placeholder="jane@example.com" className="rounded-none h-12 bg-background" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Appliance Brand</label>
                    <Select required>
                      <SelectTrigger className="rounded-none h-12 bg-background">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map(b => (
                          <SelectItem key={b.slug} value={b.slug}>{b.name}</SelectItem>
                        ))}
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Service Needed</label>
                    <Select required>
                      <SelectTrigger className="rounded-none h-12 bg-background">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(s => (
                          <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Issue Description</label>
                  <Textarea required placeholder="Please describe the issue you are experiencing..." className="rounded-none min-h-[120px] bg-background resize-none" />
                </div>

                <Button disabled={isSubmitting} type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none h-14 text-base uppercase tracking-widest">
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

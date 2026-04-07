import React, { useEffect } from 'react';
import { useLocation } from 'wouter';

const SITE_URL = 'https://naples-appliancerepair.com';

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, any>;
  canonicalPath?: string;
}

function setMeta(name: string, content: string, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SEO({ title, description, schema, canonicalPath }: SEOProps) {
  const [location] = useLocation();
  const path = canonicalPath ?? location;
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

  useEffect(() => {
    document.title = title;

    // Canonical
    setLink('canonical', canonicalUrl);

    // Standard meta
    setMeta('description', description);

    // Open Graph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', 'Naples Appliance Repair', 'property');
    setMeta('og:image', `${SITE_URL}/images/luxury-kitchen-hero.jpg`, 'property');

    // Twitter card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Schema
    if (schema) {
      let scriptSchema = document.querySelector('script[type="application/ld+json"]');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    } else {
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) existingSchema.remove();
    }
  }, [title, description, schema, canonicalUrl]);

  return null;
}

/* ============================================
   JSON-LD Strukturierte Daten

   Generiert Schema.org Markup damit Google
   Öffnungszeiten, FAQ, Bewertungen etc. direkt
   in den Suchergebnissen anzeigen kann.
   ============================================ */

import { siteConfig } from '../config';

// Unternehmensdaten (LocalBusiness)
export function getBusinessSchema(options?: {
  openingHours?: { day: string; from: string; to: string; closed: boolean }[];
  rating?: { average: number; count: number };
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.zip,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
  };

  // Öffnungszeiten
  if (options?.openingHours) {
    const dayMap: Record<string, string> = {
      'Montag': 'Monday',
      'Dienstag': 'Tuesday',
      'Mittwoch': 'Wednesday',
      'Donnerstag': 'Thursday',
      'Freitag': 'Friday',
      'Samstag': 'Saturday',
      'Sonntag': 'Sunday',
    };

    schema.openingHoursSpecification = options.openingHours
      .filter((h) => !h.closed)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[h.day] || h.day,
        opens: h.from,
        closes: h.to,
      }));
  }

  // Bewertungen
  if (options?.rating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: options.rating.average,
      reviewCount: options.rating.count,
    };
  }

  return schema;
}

// FAQ Schema (für Google FAQ Rich Results)
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Blogpost Schema (für Google Artikel Rich Results)
export function getBlogPostSchema(post: {
  title: string;
  excerpt?: string;
  publishedAt: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author || siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(post.image && { image: post.image }),
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

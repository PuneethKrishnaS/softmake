import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { staticSeoRegistry } from '../data/seoData';
import { servicesRegistry } from '../data/servicesData';
import { industriesRegistry } from '../data/industriesData';
import { blogsRegistry } from '../data/blogsData';

export default function SEO() {
  const location = useLocation();
  const params = useParams<{ slug?: string }>();
  const pathname = location.pathname;

  useEffect(() => {
    let title = "Softmake IT Solutions | Premium Software Engineering";
    let description = "We engineer premium, scalable, and secure custom software systems, business applications, and ERP integrations. Custom code built to scale your organization.";
    let keywords = "Software development, Custom ERP, Zoho integration, Tauri development, web apps, SaaS development";
    let schemaJson: Record<string, any> | null = null;
    const siteUrl = "https://www.softmake.in";
    const currentUrl = `${siteUrl}${pathname}`;
    const defaultImage = `${siteUrl}/Logo.svg`;

    // 1. Resolve metadata depending on current route
    if (staticSeoRegistry[pathname]) {
      // Static Pages
      title = staticSeoRegistry[pathname].title;
      description = staticSeoRegistry[pathname].description;
      keywords = staticSeoRegistry[pathname].keywords;

      // Base Website/Organization schema for home page
      if (pathname === "/") {
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Softmake.in",
          "url": siteUrl,
          "logo": defaultImage,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "email": "info@softmake.in",
            "areaServed": "IN",
            "availableLanguage": ["en", "kn"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Davanagere",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://twitter.com/softmake_in",
            "https://www.linkedin.com/company/softmake"
          ]
        };
      }
    } else if (pathname.startsWith("/services/")) {
      // Dynamic Services detail
      const slug = params.slug;
      const service = slug ? servicesRegistry[slug] : null;
      if (service) {
        title = `${service.title} | Softmake IT Solutions`;
        description = service.desc;
        keywords = `${service.title}, ${service.techStack.join(', ')}, custom development`;

        // Product/Service schema
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "provider": {
            "@type": "Organization",
            "name": "Softmake.in",
            "url": siteUrl
          },
          "description": service.desc,
          "areaServed": "Worldwide"
        };
      }
    } else if (pathname.startsWith("/industries/")) {
      // Dynamic Industries detail
      const slug = params.slug;
      const industry = slug ? industriesRegistry[slug] : null;
      if (industry) {
        title = `${industry.title} Solutions | Softmake IT Solutions`;
        description = industry.desc;
        keywords = `${industry.title}, technology consulting, business solutions, softmake`;

        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${industry.title} Software Solutions`,
          "provider": {
            "@type": "Organization",
            "name": "Softmake.in",
            "url": siteUrl
          },
          "description": industry.desc
        };
      }
    } else if (pathname.startsWith("/blogs/")) {
      // Dynamic Blogs detail
      const slug = params.slug;
      const blog = slug ? blogsRegistry[slug] : null;
      if (blog) {
        title = `${blog.title} | Softmake Engineering Log`;
        description = blog.tagline;
        keywords = `${blog.category}, tech insights, web engineering, ${blog.author}`;

        // Blog Posting schema
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": blog.tagline,
          "author": {
            "@type": "Person",
            "name": blog.author
          },
          "datePublished": blog.date,
          "publisher": {
            "@type": "Organization",
            "name": "Softmake.in",
            "logo": {
              "@type": "ImageObject",
              "url": defaultImage
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
          }
        };
      }
    }

    // 2. Update head titles & generic metadata tags
    document.title = title;
    
    const setMetaTag = (name: string, value: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:type', pathname.startsWith('/blogs/') ? 'article' : 'website', true);
    setMetaTag('og:image', defaultImage, true);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', defaultImage);

    // Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 3. Inject structured JSON-LD schema script block
    let schemaScript = document.getElementById('jsonld-seo-schema');
    if (schemaScript) {
      schemaScript.remove();
    }

    if (schemaJson) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-seo-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.innerHTML = JSON.stringify(schemaJson);
      document.head.appendChild(schemaScript);
    }

  }, [pathname, params.slug]);

  return null; // Side-effect rendering only
}

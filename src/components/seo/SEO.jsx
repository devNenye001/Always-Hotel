import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://always-hotel.vercel.app";
const DEFAULT_TITLE = "Always Hotel Minna | Best Hotel in Minna, Niger State";
const DEFAULT_DESCRIPTION =
  "Experience comfort, luxury and warm hospitality at Always Hotel Minna. Located at 82 Eastern Bye-Pass, Tudun Wada South, Minna. 24/7 power, AC rooms, restaurant & bar.";
const DEFAULT_IMAGE = "/logo1.png";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema,
}) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath === "/" ? "" : currentPath}`;
  const fullTitle = title
    ? `${title} | Always Hotel Minna`
    : DEFAULT_TITLE;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta
    setMetaTag("description", description);
    if (keywords) {
      setMetaTag("keywords", keywords);
    }
    setMetaTag("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // 3. Open Graph
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:image", ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`, true);
    setMetaTag("og:site_name", "Always Hotel Minna", true);

    // 4. Twitter
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`);

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // 6. JSON-LD Schema
    const schemaScriptId = "dynamic-json-ld";
    let scriptTag = document.getElementById(schemaScriptId);
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = schemaScriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      const el = document.getElementById(schemaScriptId);
      if (el) el.remove();
    };
  }, [fullTitle, description, keywords, canonicalUrl, ogType, ogImage, schema]);

  return null;
}

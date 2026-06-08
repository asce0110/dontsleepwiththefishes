// SEO is now handled by Next.js Metadata API in each page.tsx.
// This component is a no-op — kept to avoid breaking existing page JSX.
export function SEO(_props: {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonical?: string;
}) {
  return null;
}

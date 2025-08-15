import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CaptnCasper | Digital Design Portfolio',
  description: 'Professional digital design portfolio showcasing modern web, UI/UX, and branding projects. Request a quote for your next project.',
  keywords: ['digital design', 'web design', 'UI/UX', 'branding', 'portfolio', 'CaptnCasper', 'freelance designer'],
  openGraph: {
    title: 'CaptnCasper | Digital Design Portfolio',
    description: 'Professional digital design portfolio showcasing modern web, UI/UX, and branding projects.',
    url: 'https://your-subdomain.prestigecorp.au',
    type: 'website',
    images: [
      {
        url: 'https://your-subdomain.prestigecorp.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CaptnCasper Digital Design Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaptnCasper | Digital Design Portfolio',
    description: 'Professional digital design portfolio showcasing modern web, UI/UX, and branding projects.',
    images: ['https://your-subdomain.prestigecorp.au/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

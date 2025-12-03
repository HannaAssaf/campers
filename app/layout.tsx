import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Campers TravelTrucks',
  description:
    'Discover top-quality campers and travel trucks ready for your next adventure. Browse listings, compare models, and book your ideal travel vehicle.',
  openGraph: {
    title: `Campers TravelTrucks`,
    description:
      'Explore the best campers and travel trucks for unforgettable journeys.',
    url: ``,
    siteName: 'Campers',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Campers TravelTrucks',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

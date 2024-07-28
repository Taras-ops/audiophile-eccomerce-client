import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import {
  ReactQueryClientProvider,
  Navbar,
  Footer,
  StoreProvider,
  Toaster,
} from '@/components';

import './globals.css';

const manrope = Manrope({ weight: ['700', '400', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Audiophile E-Commerce',
  description:
    "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <StoreProvider>
        <html lang='en'>
          <body className={manrope.className}>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </StoreProvider>
    </ReactQueryClientProvider>
  );
}


import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from '@/components/shared/CustomCursor';
import SmoothScroll from '@/components/shared/SmoothScroll';
import { FirebaseProvider } from '@/firebase/provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NeonVerse Portfolio',
  description: 'A futuristic portfolio showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-primary/40 selection:text-primary-foreground">
        <FirebaseProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
            <Toaster />
          </SmoothScroll>
        </FirebaseProvider>
      </body>
    </html>
  );
}

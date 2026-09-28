import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/layout/AppShell';
import { ThemeProvider } from '@/lib/theme/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'CAT 2026 Focused Preparation Workspace',
  description: 'A focused, distraction-free preparation workspace for serious CAT aspirants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('cat_prep_theme')||'beige';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','beige');}})();`,
          }}
        />
        {/* Google AdSense Verification & Auto-Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6007818041605263"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-cat-bg text-cat-ink min-h-screen antialiased">
        <ThemeProvider>
          <AppShell>
            {children}
          </AppShell>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

'use client';

import Script from 'next/script';

interface GoogleAdSenseProps {
  publisherId?: string;
}

export default function GoogleAdSense({ publisherId }: GoogleAdSenseProps) {
  const pId = publisherId || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6007818041605263';

  if (!pId) return null;

  return (
    <Script
      id="google-adsense-script"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

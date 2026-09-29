'use client';

import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
}

export default function AdBanner({
  slot = '6820469844',
  format = 'auto',
  responsive = true,
  className = '',
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    // Check if adsbygoogle exists and ad element is not already filled
    try {
      if (typeof window !== 'undefined') {
        const timeout = setTimeout(() => {
          try {
            if (adRef.current && adRef.current.children.length === 0) {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
          } catch (err) {
            // Ignore AdSense duplicate push error in SPA navigation
          }
        }, 200);

        return () => clearTimeout(timeout);
      }
    } catch (e) {
      // Safe fallback
    }
  }, []);

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6007818041605263';

  return (
    <div className={`overflow-hidden text-center my-6 min-h-[90px] flex items-center justify-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '250px' }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

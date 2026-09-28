'use client';

import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
}

export default function MathText({ content, className = '' }: MathTextProps) {
  if (!content) return null;

  // Split by inline math $...$ and display math $$...$$
  const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2);
          try {
            const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
            return (
              <span
                key={index}
                className="my-2 block overflow-x-auto text-center"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return <span key={index} className="font-mono">{part}</span>;
          }
        } else if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const math = part.slice(1, -1);
          try {
            const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
            return (
              <span
                key={index}
                className="inline-block px-0.5"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return <span key={index} className="font-mono">{part}</span>;
          }
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

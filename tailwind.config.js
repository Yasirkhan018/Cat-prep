/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cat: {
          bg: 'var(--cat-bg)',
          card: 'var(--cat-card)',
          'card-subtle': 'var(--cat-card-subtle)',
          hover: 'var(--cat-hover)',
          border: 'var(--cat-border)',
          'border-strong': 'var(--cat-border-strong)',
          ink: 'var(--cat-ink)',
          sub: 'var(--cat-muted)',
          faint: 'var(--cat-faint)',
          primary: 'var(--cat-primary)',
          'primary-hover': 'var(--cat-primary-hover)',
          'primary-text': 'var(--cat-primary-text)',
          blue: '#2563EB',
          emerald: '#16A34A',
          amber: '#D97706',
          rose: '#DC2626',
          indigo: '#4F46E5',
          purple: '#7C3AED'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        serif: ['Charter', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'elevated': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}

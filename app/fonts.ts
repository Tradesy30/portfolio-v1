import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  variable: '--font-roboto-mono',
});

// Font configuration object for easy access
export const fonts = {
  sans: inter.className,
  mono: robotoMono.className,
  variables: `${inter.variable} ${robotoMono.variable}`,
};
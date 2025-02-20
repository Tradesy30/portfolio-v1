import { ImageProps } from 'next/image';

export interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  fallback?: string;
}

export const getImageProps = (
  src: string,
  width: number,
  height: number,
  alt: string,
  options: Partial<Omit<OptimizedImageProps, 'src' | 'alt' | 'width' | 'height'>> = {}
): OptimizedImageProps => {
  return {
    src,
    alt,
    width,
    height,
    loading: 'lazy',
    quality: 90,
    placeholder: 'blur',
    blurDataURL: `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="#e5e7eb"/></svg>`
    ).toString('base64')}`,
    ...options,
  };
};

export const imageKitLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  return `${src}?tr=${params.join(',')}`;
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e5e7eb" offset="20%" />
      <stop stop-color="#f3f4f6" offset="50%" />
      <stop stop-color="#e5e7eb" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e5e7eb" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
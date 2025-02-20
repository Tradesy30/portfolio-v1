import dynamic from 'next/dynamic';
import { ComponentType, ReactNode, JSX } from 'react';

export interface LazyComponentProps {
  fallback?: JSX.Element | null;
}

/**
 * Creates a lazy-loaded component with TypeScript support
 * @param importFn - Import function that returns a promise of the component
 * @param options - Options for the lazy component (fallback, etc.)
 */
export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyComponentProps = {}
) {
  return dynamic(() => importFn(), {
    loading: options.fallback
      ? () => options.fallback
      : undefined,
    ssr: true,
  });
}

/**
 * HOC to add loading state to a component
 * @param Component - The component to wrap
 * @param LoadingComponent - The loading component to show
 */
export function withLoading<P extends object>(
  Component: ComponentType<P>,
  LoadingComponent: ComponentType<{}> = () => null
): ComponentType<P & { isLoading?: boolean }> {
  return function WithLoadingComponent(props: P & { isLoading?: boolean }) {
    const { isLoading, ...componentProps } = props;
    return isLoading ? <LoadingComponent /> : <Component {...(componentProps as P)} />;
  };
}
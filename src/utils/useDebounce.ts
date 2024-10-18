import { useEffect } from 'react';
import useTimeout from './useTimeout';

export default function useDebounce<
  T extends ReadonlyArray<unknown>,
>(
  callback: () => void,
  delay: number | null,
  dependencies: T,
): { reset: () => void; clear: () => void } {
  const { reset, clear } = useTimeout(
    callback,
    delay,
  );

  useEffect(() => {
    reset();
    return clear;
  }, [reset, clear, ...dependencies]);

  return { reset, clear };
}

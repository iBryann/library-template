import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

export default function useTimeout(
  callback: () => void,
  delay: number | null,
): { reset: () => void; clear: () => void } {
  const callbackRef =
    useRef<() => void>(callback);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    if (delay !== null) {
      timeoutRef.current = window.setTimeout(
        () => callbackRef.current(),
        delay,
      );
    }
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

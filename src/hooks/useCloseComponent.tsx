import { useEffect } from 'react';

import { EVENTS } from '../utils/events';

export function useCloseComponent(
  selector: string,
  state: boolean,
  closeFn: () => void,
) {
  function closeListener(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest(selector)) {
      closeFn();
      window.removeEventListener('click', closeListener);
    }
  }

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        window.addEventListener('click', closeListener);
      }, 0);
    }
  }, [state]);

  useEffect(() => {
    window.addEventListener(EVENTS.CLOSE, closeFn);

    return () => {
      window.removeEventListener(EVENTS.CLOSE, closeFn);
    };
  }, []);
}

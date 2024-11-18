import { useCallback, useRef, WheelEvent, WheelEventHandler } from 'react';

type ScrollHandlerCallback = (direction: 'up' | 'down') => void;

export const useScrollDetector = <T extends HTMLElement = HTMLElement>(
  callback: ScrollHandlerCallback,
  delay: number = 500,
): WheelEventHandler<T> => {
  const lockRef = useRef(false);

  const handleScroll = (event: WheelEvent<T>) => {
    if (lockRef.current) return;

    // lock
    lockRef.current = true;

    setTimeout(() => {
      lockRef.current = false; // 딜레이 후 잠금 해제
    }, delay);

    const { deltaY } = event;

    if (deltaY > 0) {
      callback('down');
      return;
    } else if (deltaY < 0) {
      callback('up');
    }
  };

  return useCallback(handleScroll, [callback, delay]);
};

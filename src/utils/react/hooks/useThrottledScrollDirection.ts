import { useCallback, useRef, WheelEvent, WheelEventHandler } from 'react';

type ScrollHandlerCallback = (direction: 'up' | 'down') => void;

export const useThrottledScrollDirection = <
  T extends HTMLElement = HTMLElement,
>(
  callback: ScrollHandlerCallback,
  threshold: number = 200,
  cooldown: number = 500,
): WheelEventHandler<T> => {
  const accumulatedDelta = useRef(0);
  const lastDirection = useRef<'up' | 'down' | null>(null);
  const cooldownActive = useRef(false);

  const handleScroll = (event: WheelEvent<T>) => {
    const { deltaY } = event;

    if (cooldownActive.current) return;

    const currentDirection = deltaY > 0 ? 'down' : 'up';

    if (lastDirection.current && currentDirection !== lastDirection.current) {
      accumulatedDelta.current = 0;
    }

    lastDirection.current = currentDirection;
    accumulatedDelta.current += deltaY;

    // 임계값을 초과하면 콜백 실행 및 쿨다운 활성화
    if (Math.abs(accumulatedDelta.current) >= threshold) {
      callback(currentDirection);
      accumulatedDelta.current = 0;

      cooldownActive.current = true;
      setTimeout(() => {
        cooldownActive.current = false;
      }, cooldown);
    }
  };

  return useCallback(handleScroll, [callback, threshold, cooldown]);
};

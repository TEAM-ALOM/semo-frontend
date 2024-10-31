import { useRef } from 'react';
import { getRandomGreetingMessage } from '../../service/getRadomGreetingMessage';

export const useGreetingMessage = () => {
  const greetringMessageRef = useRef(getRandomGreetingMessage());

  return {
    greetingMessage: greetringMessageRef.current,
  };
};

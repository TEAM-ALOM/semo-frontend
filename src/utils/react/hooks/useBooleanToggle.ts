import { useReducer } from 'react';

export const useBooleanToggle = (initialValue: boolean) => {
  const [value, toggle] = useReducer((state: boolean) => !state, initialValue);
  return [value, toggle] as const;
};

import { type ChangeEvent, useCallback, useState } from 'react';

export const useInputState = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handleChange] as const;
};

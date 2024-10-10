import { useState } from 'react';
import { useInputState } from '@/utils/react/hooks/useInputState';
import { validatePasswordInput } from '../../services/validatePasswordInput';
import { validateUserIdInput } from '../../services/validateUserIdInput';

export const useLoginFormState = () => {
  const [userId, handleUserIdChange] = useInputState('');
  const [password, handlePasswordChange] = useInputState('');

  const isUserIdValid = validateUserIdInput(userId);
  const isPasswordValid = validatePasswordInput(password);

  const isFormValid = isUserIdValid && isPasswordValid;
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  return {
    userId: {
      value: userId,
      onChange: handleUserIdChange,
      isValid: isUserIdValid,
    },
    password: {
      value: password,
      onChange: handlePasswordChange,
      isValid: isPasswordValid,
    },
    form: {
      isValid: isFormValid,
      isDirty: isFormDirty,
      setIsDirty: setIsFormDirty,
    },
  } as const;
};

import { MAX_USER_NAME_LENGTH } from '../models/validationPolicy';

export const validateUserNameInput = (userName: string) => {
  return userName.length > 0 && userName.length <= MAX_USER_NAME_LENGTH;
};

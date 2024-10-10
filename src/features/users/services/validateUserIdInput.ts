import { MAX_USER_ID_LENGTH } from '../models/validationPolicy';

export const validateUserIdInput = (userId: string) => {
  return userId.length > 0 && userId.length <= MAX_USER_ID_LENGTH;
};

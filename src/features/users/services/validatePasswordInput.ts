import { MIN_USER_PASSWORD_LENGTH } from '../models/validationPolicy';

export const validatePasswordInput = (password: string) => {
  return password.length >= MIN_USER_PASSWORD_LENGTH;
};

export const validateRePasswordInput = (
  password: string,
  rePassword: string,
) => {
  return validatePasswordInput(password) && password === rePassword;
};

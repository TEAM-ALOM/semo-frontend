import { pallete } from '../pallete/pallete';

export const texts = {
  primary: pallete.black,
  secondary: pallete.gray[700],
  disabled: pallete.gray[300],
  placeholder: pallete.gray[300],
  warning: pallete.yellow[400],
  error: pallete.red[600],
} as const;

export type Texts = typeof texts;

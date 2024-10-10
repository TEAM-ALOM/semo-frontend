import { pallete } from '../pallete/pallete';

export const borders = {
  light: pallete.gray[100],
  basic: pallete.gray[400],
} as const;

export type Borders = typeof borders;

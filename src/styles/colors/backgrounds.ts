import { pallete } from '../pallete/pallete';

export const backgrounds = {
  base: pallete.white,
  gray1: pallete.gray[100],
  gray2: pallete.gray[200],
} as const;

export type Backgrounds = typeof backgrounds;

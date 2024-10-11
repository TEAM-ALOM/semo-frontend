import { pallete } from '../pallete/pallete';

export const shadows = {
  // 25%
  basic: `${pallete.gray[600]}40`,
  // 10%
  thin: `${pallete.gray[600]}1A`,
} as const;

export type Shadows = typeof shadows;

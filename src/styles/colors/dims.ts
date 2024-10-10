import { pallete } from '../pallete/pallete';

export const dims = {
  // 70%
  thick: `${pallete.gray[700]}BF`,
  // 50%
  basic: `${pallete.gray[700]}80`,
  // 15%
  thin: `${pallete.gray[700]}26`,
} as const;

export type Dims = typeof dims;

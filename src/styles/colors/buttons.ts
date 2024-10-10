import { pallete } from '../pallete/pallete';

export const buttons = {
  cyan: pallete.cyan[300],
  red: pallete.red[300],
  gray: pallete.gray[500],
};

export const presseds = {
  // 15%
  light: `${pallete.white}26`,
  // 5%
  dark: `${pallete.gray[700]}0D`,
} as const;

export type Buttons = typeof buttons;
export type Presseds = typeof presseds;

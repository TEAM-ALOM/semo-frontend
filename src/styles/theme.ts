import {
  backgrounds,
  borders,
  buttons,
  dims,
  pallete,
  shadows,
  texts,
} from './colors';

export const theme = {
  pallete,
  backgrounds,
  texts,
  shadows,
  dims,
  buttons,
  borders,
} as const;

export type Theme = typeof theme;

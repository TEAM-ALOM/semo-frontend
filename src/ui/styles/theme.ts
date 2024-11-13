import {
  backgrounds,
  borders,
  buttons,
  dims,
  pallete,
  searchPalette,
  shadows,
  texts,
} from './colors';

export const theme = {
  pallete,
  searchPalette,
  backgrounds,
  texts,
  shadows,
  dims,
  buttons,
  borders,
} as const;

export type Theme = typeof theme;

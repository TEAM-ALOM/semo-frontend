import { createGlobalStyle } from 'styled-components';
import { miniReset } from './miniReset';

export const GlobalStyles = createGlobalStyle`

  ${miniReset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: black;
    color:white
  }
`;

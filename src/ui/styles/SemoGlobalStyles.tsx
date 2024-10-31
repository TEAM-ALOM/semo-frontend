import { createGlobalStyle } from 'styled-components';
import { miniReset } from './miniReset';

export const SemoGlobalStyles = createGlobalStyle`

  ${miniReset}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    background-color: black;
    color: white;
  }
`;

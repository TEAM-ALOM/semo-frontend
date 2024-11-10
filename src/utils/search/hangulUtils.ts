// src/utils/hangulUtils.ts
import { disassembleCompleteCharacter } from 'es-hangul';

/**
 * 한글 문자열을 초성으로 변환합니다.
 * @param text 변환할 한글 문자열
 * @returns 초성 문자열
 */
export const getInitials = (text: string): string => {
  return text
    .split('')
    .map(char => {
      const decomposed = disassembleCompleteCharacter(char);
      return decomposed ? decomposed.choseong : char;
    })
    .join('');
};

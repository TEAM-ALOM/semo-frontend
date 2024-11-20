import { atom, useAtom } from 'jotai';
import { Bookmark } from '../../model/Bookmark';

const initialBookmarkList: Bookmark[] = [
  {
    id: '1',
    title: 'Google',
    url: 'https://www.google.com',
  },
  {
    id: '2',
    title: 'Naver',
    url: 'https://www.naver.com',
  },
  {
    id: '3',
    title: 'Daum',
    url: 'https://www.daum.net',
  },
];

export const mockBookmarkAtom = atom<Bookmark[]>(initialBookmarkList);

export const useMockBookmarkList = () => {
  return useAtom(mockBookmarkAtom);
};

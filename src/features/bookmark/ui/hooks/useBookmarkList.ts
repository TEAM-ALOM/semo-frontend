import { useMockBookmarkList } from './useMockBookmark';

export const useBookmarkList = () => {
  //  todo useQuery
  const [bookmarks] = useMockBookmarkList();
  return { data: bookmarks };
};

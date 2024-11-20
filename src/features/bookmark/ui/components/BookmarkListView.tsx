import styled from 'styled-components';
import { useBookmarkList } from '../hooks/useBookmarkList';
import { AddBookmarkButton } from './bookmark-item/AddBookmarkButton';
import { BookmarkCard } from './bookmark-item/BookmarkCard';

export const BookmarkListView = () => {
  const { data: bookmarks } = useBookmarkList();

  return (
    <BookmarkListContainer>
      {bookmarks?.map(bookmark => (
        <BookmarkCard key={bookmark.id} infomation={bookmark} />
      ))}

      <AddBookmarkButton />
    </BookmarkListContainer>
  );
};

const BookmarkListContainer = styled.ul`
  display: flex;
  width: fit-content;
  margin: 48px auto 0;
  gap: 18px;
`;

import styled from 'styled-components';
import { Bookmark } from '@semo-client/features/bookmark/model/Bookmark';
import { IconMoreVertical } from '@semo-client/ui/assets/icons/IconMoreVertical';

interface BookmarkCardProps {
  infomation: Bookmark;
}

export const BookmarkCard = ({ infomation }: BookmarkCardProps) => {
  return (
    <BookmarkCardContainer
      onClick={() => {
        // open link
        window.open(infomation.url, '_blank');
      }}
    >
      <BookmarkEditButton
        onClick={() => {
          // open edit modal
        }}
      >
        <IconMoreVertical color='black' />
      </BookmarkEditButton>
      <BookmarkCardImageWrapper></BookmarkCardImageWrapper>
      <BookmarkCardTitle>{infomation.title}</BookmarkCardTitle>
      {/* title */}
      {/* </BookmarkCardTitle> */}
    </BookmarkCardContainer>
  );
};

const BookmarkCardContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 80px;
  height: 64px;
  padding: 8px;
  border-radius: 8px;

  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(3px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  align-items: center;
`;

const BookmarkEditButton = styled.button`
  position: absolute;
  background-color: transparent;
  outline: none;
  border: none;

  top: 6px;
  right: 8px;

  width: 12px;
  height: 12px;
  cursor: pointer;
`;

const BookmarkCardImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eaeaea;
  border-radius: 8px;
`;

const BookmarkCardTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

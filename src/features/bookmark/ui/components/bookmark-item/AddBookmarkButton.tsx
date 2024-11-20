import styled from 'styled-components';
import { overlayKit } from '@semo-client/configs/react/libs/overlay-kit';
import { IconAdd } from '@semo-client/ui/assets/icons/IconAdd';
import { CreateBookmarkModal } from '../CreateBookmarkModal';

export const AddBookmarkButton = () => {
  return (
    <AddButtonContainer
      onClick={() => {
        overlayKit.open(
          ({ isOpen, close }) => {
            return isOpen && <CreateBookmarkModal close={close} />;
          },
          {
            overlayId: 'create-bookmark',
          },
        );
      }}
    >
      <BackgroundCicle>
        <IconAdd color='black' />
      </BackgroundCicle>
    </AddButtonContainer>
  );
};

const AddButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 64px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(28, 28, 30, 0.7);
  backdrop-filter: blur(3px);
`;

const BackgroundCicle = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
`;

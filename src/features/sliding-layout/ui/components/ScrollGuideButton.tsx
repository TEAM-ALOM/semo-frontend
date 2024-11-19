import styled from 'styled-components';
import { IconDoubleArrowDown } from '@semo-client/ui/assets/icons/IconDoubleArrowDown';
import { fadeIn } from '@semo-client/ui/styles/keyframes/fades';

export const ScrollGuideButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledGuideButton onClick={onClick}>
      <div>스크롤해서 다른 정보들도 확인해보세요!</div>
      <IconDoubleArrowDown />
    </StyledGuideButton>
  );
};

const StyledGuideButton = styled.button`
  animation: ${fadeIn} 0.4s;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  z-index: 100;
`;

import { overlay } from 'overlay-kit';
import React from 'react';
import styled from 'styled-components';

interface ModalSearchProps {
  open: boolean;
  onClose: () => void;
  onExit: () => void;
}

const ModalSearch: React.FC<ModalSearchProps> = ({ open, onClose, onExit }) => {
  return (
    <>
      <ModalBackground>
        <button
          type='button'
          onClick={() => {
            onExit();
          }}
        >
          asdf
        </button>
      </ModalBackground>
    </>
  );
};

export default ModalSearch;

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

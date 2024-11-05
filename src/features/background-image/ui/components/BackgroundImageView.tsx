import styled, { css } from 'styled-components';
import { fadeIn } from '@semo-client/ui/styles/keyframes/fades';
import { useBackgroundImageLoader } from '../hooks/useBackgroundImageLoader';

export const BackgroundImageView = () => {
  const { backgroundImageUrl, isImageReady } = useBackgroundImageLoader();

  return (
    <>
      <FullScreenBackground
        imageUrl={backgroundImageUrl}
        isImageReady={isImageReady}
      >
        <Overlay />
      </FullScreenBackground>
    </>
  );
};

const FullScreenBackground = styled.div<{
  imageUrl: string;
  isImageReady: boolean;
}>`
  width: 100vw;
  height: 100vh;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  opacity: ${({ isImageReady }) => (isImageReady ? 1 : 0)};

  ${({ isImageReady }) =>
    isImageReady &&
    css`
      animation: ${fadeIn} 0.35s linear;
    `};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  left: 0;
`;

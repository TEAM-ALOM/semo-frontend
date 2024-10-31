import styled from 'styled-components';
import { Header } from '@semo-client/features/header/ui/components/Header';

export const Home = () => {
  return (
    <AppContainer>
      <FullScreenBackground>
        <Overlay />
      </FullScreenBackground>

      <Header />

      {/* <Clock /> */}
      {/* <Search /> */}
      {/* <Notice /> */}
      {/* <Bookmark /> */}
      {/* 여기까지 스크롤 전  */}
      {/* <ProjectCuration /> */}
    </AppContainer>
  );
};

const FullScreenBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/image.jpg');
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

const AppContainer = styled.main`
  position: relative;
  /* 다른 요소들이 위에 표시되도록 */
  z-index: 0;
`;

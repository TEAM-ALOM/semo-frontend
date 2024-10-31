import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BackgroundImageView } from '@semo-client/features/background-image/ui/components/BackgroundImageView';
import { Clock } from '@semo-client/features/clock/ui/components/Clock';
import { HeaderView } from '@semo-client/features/header/ui/components/HeaderView';

export const Home = () => {
  return (
    <AppContainer>
      <BackgroundImageView />
      <HeaderView />
      <Clock />

      {/* <Search /> */}
      {/* <Notice /> */}
      {/* <Bookmark /> */}
      {/* 여기까지 스크롤 전  */}
      {/* <ProjectCuration /> */}
    </AppContainer>
  );
};

const AppContainer = styled.main`
  position: relative;
  /* 다른 요소들이 위에 표시되도록 */
  z-index: 0;
`;

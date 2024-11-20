import { useState } from 'react';
import styled from 'styled-components';
import { ImportantNoticeView } from '@semo-client/features/academic/important-notice/ui/components/ImportantNoticeView';
import { AcademicNoticeView } from '@semo-client/features/academic/notice-detail-list/ui/components/AcademicNoticeView';
import { BackgroundImageView } from '@semo-client/features/background-image/ui/components/BackgroundImageView';
import { BookmarkListView } from '@semo-client/features/bookmark/ui/components/BookmarkListView';
import { Clock } from '@semo-client/features/clock/ui/components/Clock';
import { HeaderView } from '@semo-client/features/header/ui/components/HeaderView';
import { SearchInput } from '@semo-client/features/search/ui/components/SearchInput';
import { TrendingKeywords } from '@semo-client/features/search/ui/components/TrendingKeywords';
import { ScrollGuideButton } from '@semo-client/features/sliding-layout/ui/components/ScrollGuideButton';
import { SlidingLayout } from '@semo-client/features/sliding-layout/ui/components/SildingLayout';
import { LoginButtonView } from '@semo-client/features/users/ui/components/LoginButtonView';

export const Home = () => {
  // load user login status

  // temp siliding page state
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    <AppContainer>
      <SlidingLayout
        pages={[
          {
            component: (
              <>
                <BackgroundImageView />
                <HeaderView
                  userProfileView={
                    // view setting by user login status
                    // <UserProfileView />
                    <LoginButtonView />
                  }
                />

                <Clock />

                <SearchInputContainer>
                  <SearchInput />
                  <TrendingKeywords />
                </SearchInputContainer>

                <ImportantNoticeView />

                <BookmarkListView />
              </>
            ),
            renderGuideButton: goNextPage => (
              <ScrollGuideButton onClick={goNextPage} />
            ),
          },
          {
            component: (
              <SecondPageWrapper>
                <AcademicNoticeView />
                <AcademicNoticeView />
              </SecondPageWrapper>
            ),
          },
        ]}
        changePageIndex={i => setCurrentPageIndex(i)}
        currentPageIndex={currentPageIndex}
      />
    </AppContainer>
  );
};

// .... naming
const SecondPageWrapper = styled.section`
  background-color: #1c1c1e;
  padding: 80px;
  width: 100%;
  height: 100%;

  display: flex;
  gap: 80px;
`;

const SearchInputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 18px;
  width: 500px;
`;

const AppContainer = styled.main`
  position: relative;
  /* 다른 요소들이 위에 표시되도록 */
  z-index: 0;

  /* 미디어 쿼리 786 미만에서는 display: none; */
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

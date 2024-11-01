import styled from 'styled-components';
import { BackgroundImageView } from '@semo-client/features/background-image/ui/components/BackgroundImageView';
import { Clock } from '@semo-client/features/clock/ui/components/Clock';
import { HeaderView } from '@semo-client/features/header/ui/components/HeaderView';
import { NoticeView } from '@semo-client/features/notice/ui/components/NoticeView';
import { SearchInput } from '@semo-client/features/search/ui/components/SearchInput';
import { TrendingKeywords } from '@semo-client/features/search/ui/components/TrendingKeywords';

/**
 * TODO 각 요소 컴포넌트 에는 추가 스타일(여백,마진) 들어있지 않은 순수 요소 컴포넌트
 * 각 요소의 마진 요소들은 (레이아웃 잡기) 여기서 container 컴포넌트에서 잡아준다.
 */
export const Home = () => {
  return (
    <AppContainer>
      <BackgroundImageView />
      <HeaderView />
      <Clock />

      {/* Search */}
      <SearchInputContainer>
        <SearchInput />
        <TrendingKeywords />
      </SearchInputContainer>

      {/* <Notice /> */}
      <NoticeView />

      {/* <Bookmark /> */}
      <BookmarkContainer>
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
      </BookmarkContainer>

      {/* 여기까지 스크롤 전  */}
      {/* <ProjectCuration /> */}
    </AppContainer>
  );
};

// bookmark

const BookmarkContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 48px auto 0;
  gap: 18px;
`;

const BookmarkCard = () => {
  return (
    <BookmarkCardContainer>
      {/* <BookmarkCardImage /> */}
      {/* <BookmarkCardTitle> */}
      {/* title */}
      {/* </BookmarkCardTitle> */}
    </BookmarkCardContainer>
  );
};

const BookmarkCardContainer = styled.div`
  width: 80px;
  height: 64px;
  border-radius: 8px;
  background-color: #b93234;
  color: #000;
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

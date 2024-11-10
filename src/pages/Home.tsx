import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BackgroundImageView } from '@semo-client/features/background-image/ui/components/BackgroundImageView';
import { Clock } from '@semo-client/features/clock/ui/components/Clock';
import { HeaderView } from '@semo-client/features/header/ui/components/HeaderView';
import { NoticeView } from '@semo-client/features/notice/ui/components/NoticeView';
import { SearchInput } from '@semo-client/features/search/ui/components/SearchInput';
import { TrendingKeywords } from '@semo-client/features/search/ui/components/TrendingKeywords';
import { LoginButtonView } from '@semo-client/features/users/ui/components/LoginButtonView';
import professorsData from '@semo-utils/data/professors.json';
import { getInitials } from '@semo-utils/search/hangulUtils';
import { Professor } from '@semo-utils/types/Professor';
import { Controls } from '@storybook/blocks';

/**
 * TODO 각 요소 컴포넌트 에는 추가 스타일(여백,마진) 들어있지 않은 순수 요소 컴포넌트
 * 각 요소의 마진 요소들은 (레이아웃 잡기) 여기서 container 컴포넌트에서 잡아준다.
 */
export const Home = () => {
  const [query, setQuery] = useState<string>('');
  // 검색 결과 반영
  const [results, setResults] = useState<Professor[]>([]);

  /**
   * 검색어에 따라 교수님 데이터를 필터링합니다.
   * 전체 이름, 초성, 일부 이름을 포함하는지 확인합니다.
   * @param searchQuery 사용자 입력 검색어
   */
  const fetchData = (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const queryInitials = getInitials(normalizedQuery);

    const filtered = professorsData.filter(professor => {
      const name = professor.name.toLowerCase();
      const initials = getInitials(professor.name.toLowerCase());

      return (
        name.includes(normalizedQuery) || // 전체 이름 또는 일부 이름 포함
        initials.includes(normalizedQuery) // 초성 포함
      );
    });

    setResults(filtered);
  };

  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      fetchData(searchTerm);
    }, 300),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
    debouncedSearch(input);
  };

  const handleSubmit = () => {
    debouncedSearch.cancel();
    fetchData(query);
  };
  return (
    <AppContainer>
      <BackgroundImageView />
      <HeaderView
        userProfileView={
          // view setting by user login status
          // <UserProfileView />
          <LoginButtonView />
        }
      />

      <Clock />

      {/* Search */}
      <SearchInputContainer>
        <SearchInput
          query={query}
          setQuery={setQuery}
          onChange={handleChange}
          onSubmit={handleSubmit}
          results={results}
        />
        <DummyInputBox />
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

const DummyInputBox = styled.div`
  width: 100%;
  height: 90px;
`;

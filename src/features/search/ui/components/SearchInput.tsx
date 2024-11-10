import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Professor } from '@semo-client/features/search/models/Professor.ts';
import { SearchResults } from '@semo-client/features/search/ui/components/SearchResults.tsx';
import SearchIcon from '@semo-client/ui/assets/icons/Icon';
import searchPalette from '@semo-client/ui/styles/pallete/searchPalette.ts';

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  results: Professor[];
}

export const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  onChange,
  onSubmit,
  results,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
    setIsOverlayVisible(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
      handleCollapse();
    }
  };

  useEffect(() => {
    if (!isExpanded) {
      // 오버레이를 애니메이션 후에 숨김
      const timeoutId = setTimeout(() => {
        setIsOverlayVisible(false);
      }, 300); // 트랜지션 시간과 동일하게 설정

      // 검색창 초기화
      setQuery('');

      return () => clearTimeout(timeoutId);
    } else {
      setIsOverlayVisible(true);
    }
  }, [isExpanded]);

  return (
    <>
      <SearchInputWrapper isExpanded={isExpanded}>
        <InputContainer isExpanded={isExpanded}>
          <SearchIconWrapper>
            <SearchIcon
              width={24}
              height={24}
              fill={searchPalette.blackGray[50]}
            />
          </SearchIconWrapper>
          <StyledInput
            type='text'
            placeholder='무엇이든 검색해 보세요...'
            value={query}
            onChange={onChange}
            onKeyPress={handleKeyPress}
            onClick={e => {
              e.stopPropagation();
              handleExpand();
            }}
            isExpanded={isExpanded}
            autoFocus={isExpanded}
          />
        </InputContainer>
        {results.length != 0 && (
          <SearchResults value={query} results={results} />
        )}
      </SearchInputWrapper>

      {isOverlayVisible && (
        <Overlay isExpanded={isExpanded} onClick={handleCollapse} />
      )}
    </>
  );
};

const SearchInputWrapper = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  top: ${({ isExpanded }) => (isExpanded ? '40%' : '65%')};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: ${({ isExpanded }) => (isExpanded ? '50%' : '500px')};
  transition: 0.3s ease-in-out;
`;

const InputContainer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  border-radius: ${({ isExpanded }) =>
    isExpanded ? '8px 8px 0 0' : '8px'}; /* 조건부 border-radius */
  background-color: ${({ isExpanded }) =>
    isExpanded ? searchPalette.blackGray[90] : searchPalette.blackGray[70]};
  border: 1px solid ${searchPalette.whiteGray[30]};
  padding: 0 14px;
  gap: 10px;
  font-size: 20px;
  color: #fff;

  &:focus-within {
    outline: none;
    border-color: ${searchPalette.whiteGray[50]};
    background: ${({ isExpanded }) =>
      isExpanded ? searchPalette.whiteGray[70] : '#000000'};
  }

  /* 애니메이션 효과 */
  transition: all 0.3s ease-in-out;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

const StyledInput = styled.input<{ isExpanded: boolean }>`
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ isExpanded }) =>
    isExpanded ? searchPalette.black : searchPalette.white};
  font-size: 20px;
  position: relative;
  z-index: 2;

  &::placeholder {
    color: ${({ isExpanded }) =>
      isExpanded ? '#000' : searchPalette.whiteGray[50]};
  }

  &:focus {
    outline: none;
  }
`;

const Overlay = styled.div<{ isExpanded: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${searchPalette.blackGray[90]};
  z-index: 999;
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

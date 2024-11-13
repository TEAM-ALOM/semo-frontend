import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Professor } from '@semo-client/features/search/models/Professor';
import { SearchResults } from '@semo-client/features/search/ui/components/SearchResults';
import { useSearchOverlayController } from '@semo-client/features/search/ui/hooks/useSearchOverlayController';
import SearchIcon from '@semo-client/ui/assets/icons/Icon';

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
  const {
    isExpanded,
    isOverlayVisible,
    handleExpand,
    handleCollapse,
    handleKeyPress,
    handleOverlayAnimationEnd,
  } = useSearchOverlayController({ onSubmit, setQuery });

  return (
    <>
      <SearchInputWrapper isExpanded={isExpanded}>
        <InputContainer isExpanded={isExpanded}>
          <SearchIconWrapper>
            <SearchIcon width={24} height={24} />
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
            aria-label='검색 입력창'
          />
        </InputContainer>
        {isExpanded && results.length > 0 && (
          <SearchResults value={query} results={results} />
        )}
      </SearchInputWrapper>

      {isOverlayVisible && (
        <Overlay
          isExpanded={isExpanded}
          onClick={handleCollapse}
          onAnimationEnd={handleOverlayAnimationEnd}
          aria-live='polite'
        />
      )}
    </>
  );
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

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
  border-radius: ${({ isExpanded }) => (isExpanded ? '8px 8px 0 0' : '8px')};
  background-color: ${({ isExpanded, theme }) =>
    isExpanded
      ? theme.searchPalette.blackGray[90]
      : theme.searchPalette.blackGray[70]};
  border: 1px solid ${({ theme }) => theme.searchPalette.whiteGray[30]};
  padding: 0 14px;
  gap: 10px;
  font-size: 20px;
  color: #fff;

  &:focus-within {
    outline: none;
    border-color: ${({ theme }) => theme.searchPalette.whiteGray[50]};
    background: ${({ isExpanded, theme }) =>
      isExpanded ? theme.searchPalette.whiteGray[70] : '#000000'};
  }

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
  color: ${({ isExpanded, theme }) =>
    isExpanded ? theme.searchPalette.black : theme.searchPalette.white};
  font-size: 20px;
  position: relative;
  z-index: 2;

  &::placeholder {
    color: ${({ isExpanded, theme }) =>
      isExpanded
        ? theme.searchPalette.black
        : theme.searchPalette.whiteGray[50]};
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
  background-color: ${({ theme }) => theme.searchPalette.blackGray[90]};
  z-index: 999;
  animation: ${({ isExpanded }) => (isExpanded ? fadeIn : fadeOut)} 0.3s
    forwards;
  pointer-events: ${({ isExpanded }) => (isExpanded ? 'auto' : 'none')};
`;

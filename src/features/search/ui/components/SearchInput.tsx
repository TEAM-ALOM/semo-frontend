import styled from 'styled-components';

export const SearchInput = () => {
  return <StyledInput type='text' placeholder='무엇이든 검색해 보세요...' />;
};

const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 8px;

  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 14px;
  display: flex;
  gap: 10px;
  align-items: center;

  font-size: 20px;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

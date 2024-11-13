import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Professor } from '@semo-client/features/search/models/Professor';

interface SearchResultsProps {
  value: string;
  results: Professor[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  value,
  results,
}) => {
  return (
    <ResultsContainer value={value}>
      {results.map((professor, index) => (
        <ResultItem key={index}>
          <Profile>
            {/* TODO: 이미지 추가 필요 */}
            {/* <ProfileImage src={professor.image} alt={professor.name} /> */}
            <ProfileImage />
            <ProfileInfo>
              <Name>{professor.name} 교수님</Name>
              <Department>{professor.department}</Department>
            </ProfileInfo>
          </Profile>
          <Hr />
          <Details>
            <Badge>연구실</Badge>
            <p>{professor.labLocation}</p>
          </Details>
          <Details>
            <Badge>전화번호</Badge>
            <p>{professor.phoneNumber}</p>
          </Details>
          <Details>
            <Badge>이메일</Badge>
            <p>{professor.email}</p>
          </Details>
        </ResultItem>
      ))}
    </ResultsContainer>
  );
};

// 애니메이션 정의 (필요 시)
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

const ResultsContainer = styled.div<{ value: string }>`
  position: absolute;
  z-index: 999;
  width: 100%;
  background: ${({ theme }) => theme.searchPalette.whiteGray[70]};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  opacity: ${({ value }) => (value ? 1 : 0)};
  padding: 14px;
  transition: opacity 0.3s ease-in-out;
`;

const ResultItem = styled.div`
  background-color: ${({ theme }) => theme.searchPalette.blackGray[10]};
  backdrop-filter: blur(1px);
  border: 2px solid ${({ theme }) => theme.searchPalette.blackGray[10]};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #fff;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.searchPalette.blackGray[20]};
  }
`;

const Profile = styled.div`
  display: flex;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ProfileImage = styled.span`
  background: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.searchPalette.black};
`;

const Department = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.searchPalette.black};
`;

const Hr = styled.hr`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.searchPalette.blackGray[30]};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;

  p {
    color: ${({ theme }) => theme.searchPalette.black};
    font-size: 16px;
    font-weight: 400;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Badge = styled.span`
  display: flex;
  padding: 2px 3px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  font-size: 14px;
  background: #818181;
`;

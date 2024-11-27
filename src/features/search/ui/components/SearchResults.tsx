// src/components/SearchResults.tsx
import React from 'react';
import styled from 'styled-components';
// SVG 로고 이미지 임포트
import logo_0 from '@semo-client/features/search/logo/logo_0.svg';
import logo_1 from '@semo-client/features/search/logo/logo_1.svg';
import {
  SearchResultTypes,
  Professor,
  Site,
} from '@semo-client/features/search/models/models';

interface SearchResultsProps {
  value: string;
  results: SearchResultTypes[];
}

const logoMap: { [key: number] } = {
  0: logo_0,
  1: logo_1,
};

export const SearchResults: React.FC<SearchResultsProps> = ({
  value,
  results,
}) => {
  return (
    <ResultsContainer>
      {results.map(result => (
        <ResultItem
          key={`${result.id}-${isProfessor(result) ? 'professor' : 'site'}`}
        >
          {isProfessor(result) ? (
            <ProfessorResult>
              <Profile>
                {/* TODO: 이미지 추가 필요 */}
                {/* <ProfileImage src={result.image} alt={result.name} /> */}
                <ProfileImage />
                <ProfileInfo>
                  <Name>{result.name} 교수님</Name>
                  <Department>{result.department}</Department>
                </ProfileInfo>
              </Profile>
              <Hr />
              <Details>
                <Badge>연구실</Badge>
                <p>{result.labLocation}</p>
              </Details>
              <Details>
                <Badge>전화번호</Badge>
                <p>{result.phoneNumber}</p>
              </Details>
              <Details>
                <Badge>이메일</Badge>
                <p>{result.email}</p>
              </Details>
            </ProfessorResult>
          ) : (
            <SiteResult>
              <Profile>
                {/* 로고 이미지 동적 렌더링 */}
                {result.id !== undefined && logoMap[result.id] ? (
                  <SiteIcon
                    src={logoMap[result.id]}
                    alt={`${result.name} 로고`}
                    width='36'
                    height='36'
                  />
                ) : (
                  <DefaultSiteIcon />
                )}
                <ProfileInfo>
                  <NameDescriptionBox>
                    <Name>{result.name}</Name>
                    {result.description && (
                      <Description>
                        {' — '}
                        {result.description}
                      </Description>
                    )}
                  </NameDescriptionBox>
                  <URL>{result.url}</URL>
                </ProfileInfo>
              </Profile>
              <HoverBadge onClick={() => window.open(result.url)}>
                ↵으로 이동
              </HoverBadge>
            </SiteResult>
          )}
        </ResultItem>
      ))}
    </ResultsContainer>
  );
};

// 타입 가드 함수
const isProfessor = (result: SearchResultTypes): result is Professor => {
  return (result as Professor).department !== undefined;
};

// 스타일 정의
const ResultsContainer = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  background: ${({ theme }) => theme.searchPalette.whiteGray[70]};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 14px;
  max-height: 400px;
  overflow-y: auto;
`;

const HoverBadge = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  display: flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #818181;
`;

const ResultItem = styled.div`
  position: relative; /* HoverBadge의 절대 위치를 위해 추가 */
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

    /* HoverBadge 보이기 */

    ${HoverBadge} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const ProfessorResult = styled.div`
  /* 교수 결과에 대한 추가 스타일 */
`;

const SiteResult = styled.div`
  /* 사이트 결과에 대한 추가 스타일 */

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
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

const SiteIcon = styled.img`
  background: #ffffff;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  padding: 3px;
`;

const DefaultSiteIcon = styled.span`
  background: #007bff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.searchPalette.black};
  margin: 0;
`;

const Department = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.searchPalette.black};
  margin: 0;
`;

const NameDescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Description = styled.p`
  margin-top: 2px;
  margin-left: 10px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

const URL = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.searchPalette.black};
  margin: 0;
`;

const Hr = styled.hr`
  width: 100%;
  margin: 10px 0;
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
    margin: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Badge = styled.span`
  display: flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  background: #818181;
  color: #fff;
`;

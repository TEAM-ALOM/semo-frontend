import React from 'react';
import styled from 'styled-components';
import searchPalette from '@semo-client/ui/styles/pallete/searchPalette.ts';
import { Professor } from '@semo-utils/types/Professor.ts';

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
            <ProfileImage src={professor.image} alt={professor.name} />
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

const ResultsContainer = styled.div<{ value: string }>`
  position: absolute;
  width: 100%;
  background: ${searchPalette.whiteGray[70]};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  opacity: ${({ value }) => (value ? 1 : 0)};
  padding: 14px;
`;

const ResultItem = styled.div`
  background-color: ${searchPalette.blackGray[10]};
  backdrop-filter: blur(1px);
  border: 2px solid ${searchPalette.blackGray[10]};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #fff;
`;

const Profile = styled.div`
  display: flex;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ProfileImage = styled.img`
  background: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${searchPalette.black};
`;

const Department = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${searchPalette.black};
`;

const Hr = styled.hr`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${searchPalette.blackGray[30]};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  p {
    color: ${searchPalette.black};
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

import styled from 'styled-components';

/** todo model 로 빼서 가져오던지, api 로 가져오던지 흐름 연결 */
const keywords = [
  '가나다라',
  '온라인저지',
  '두드림',
  '나무위키',
  '디자인이노베이션',
  '구글',
  '세종대학교 포털',
];

export const TrendingKeywords = () => {
  return (
    <TrendingKeywordsContainer>
      <Title>실시간 검색어</Title>
      <KeywordList>
        {keywords.map((keyword, index) => (
          <Keyword key={index}>{keyword}</Keyword>
        ))}
      </KeywordList>
    </TrendingKeywordsContainer>
  );
};

const TrendingKeywordsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 12px;
`;

const KeywordList = styled.ul`
  display: flex;
`;

const Keyword = styled.li`
  font-size: 12px;
  font-weight: 400;
  color: #fff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    height: 9px;
    margin: 0 4px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

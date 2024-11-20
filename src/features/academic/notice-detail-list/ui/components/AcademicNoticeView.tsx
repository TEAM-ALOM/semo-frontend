import styled from 'styled-components';

interface NoticeItem {
  title: string;
  date: string;
  author: string;
}

interface NoticeBoardProps {
  notices: NoticeItem[];
}

const BoardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #1a1a1a;
  color: white;
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.div`
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #333;
  font-weight: 600;
  color: #ffffff;
`;

const Td = styled.div`
  border-bottom: 1px solid #2a2a2a;

  color: rgba(255, 255, 255, 0.8);

  font-family: 'Pretendard JP';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:first-child {
    width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:nth-child(2) {
    width: 20%;
  }

  &:last-child {
    width: 20%;
  }
`;

const Tr = styled.div`
  margin-bottom: 18px;
  &:hover {
    background-color: #2a2a2a;
  }
`;

const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  return (
    <BoardContainer>
      <Table>
        <Th>제목</Th>
        <Th>일자</Th>
        <Th>작성자</Th>
        <tbody>
          {notices.map((notice, index) => (
            <Tr key={index}>
              <Td>{notice.title}</Td>
              <Td>{notice.date}</Td>
              <Td>{notice.author}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </BoardContainer>
  );
};

const sampleNotices: NoticeItem[] = [
  {
    title: '2024학년도 동계 계절학기 운영...',
    date: '2024. 11. 13.',
    author: '학사지원과',
  },
  {
    title: '2024학년도 전공배정 안내',
    date: '2024. 11. 13.',
    author: '학사지원과',
  },
  {
    title: '2025-1학기 전부(전과) 신청 안...',
    date: '2024. 11. 13.',
    author: '학사지원과',
  },
  // ... 더 많은 공지사항 추가 가능
];
export const AcademicNoticeView = () => {
  return (
    <Container>
      {/* TODO => 컴포넌트화  */}
      <LeftSideWrapper>
        <IconWrapper>🔔</IconWrapper>
        <Title>학사공지</Title>
        <Description>
          세종대학교에서의 중요한 공지사항을 확인해 보세요!
        </Description>

        {/*  필터 영역  */}
        <FilterWrapper>
          <ul>
            <li>최신순</li>
          </ul>
        </FilterWrapper>
      </LeftSideWrapper>

      <div>
        테이블 영역
        {/* 리스트 */}
        <NoticeBoard notices={sampleNotices} />
        {/* 페이지네이션 */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  height: 100%;
`;

const LeftSideWrapper = styled.div`
  width: 170px;
  height: 100%;
`;

const FilterWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-top: 32px;
  margin-bottom: 36px;
  word-break: keep-all;
`;

const IconWrapper = styled.div`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

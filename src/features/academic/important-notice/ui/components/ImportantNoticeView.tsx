import styled from 'styled-components';

export const ImportantNoticeView = () => {
  return (
    <NoticeContainer>
      <div>
        {/* <NoticeIcon /> */}
        <NoticeTitle>중요 학사공지</NoticeTitle>
      </div>
      {/* notice slider section */}

      <NoticeText>
        2024학년도 수강정정 기간 실시 (2024.03.01 ~ 2024.03.10)
      </NoticeText>
    </NoticeContainer>
  );
};

const NoticeContainer = styled.div`
  display: flex;

  align-items: center;

  width: 500px;
  height: 36px;
  margin: 0 auto;
  padding: 10px;

  background-color: #b93234b2;
  border: 1px solid #b93234;
  border-radius: 8px;
  color: #fff;

  margin-top: 18px;
`;

const NoticeTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  &::after {
    content: '';
    display: inline-block;
    height: 11px;
    margin: -1px 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const NoticeText = styled.a`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

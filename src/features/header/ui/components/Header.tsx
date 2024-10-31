import styled from 'styled-components';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div>세모 로고</div>
        <FlexBox>
          <Input />
          <div>로그인</div>
          <div>회원가입</div>
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  padding: 16px 150px;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #1c1c1eb2;
`;

const Input = styled.input`
  border-radius: 8px;
  width: 250px;
  height: 32px;
  outline: none;
  border: none;
  background-color: #3c3d44;
`;
const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 14px;
  color: #fff;
`;

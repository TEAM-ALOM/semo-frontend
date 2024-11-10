import { ReactNode } from 'react';
import styled from 'styled-components';
import Logo from '@semo-client/ui/assets/logo.svg?react';

interface HeaderViewProps {
  userProfileView: ReactNode;
}

export const HeaderView = ({ userProfileView }: HeaderViewProps) => {
  return (
    <StyledHeader>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <FlexBox>{userProfileView}</FlexBox>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  padding: 16px 150px;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: #1c1c1eb2;
`;

const LogoWrapper = styled.div`
  margin-top: 8px;
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
  font-weight: 500;
  color: #fff;
`;

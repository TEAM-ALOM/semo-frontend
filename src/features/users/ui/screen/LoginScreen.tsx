import styled from 'styled-components';

export const LoginScreen = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export const StyledDiv = styled.div`
  ${({ theme }) => `
  color: ${theme.backgrounds.gray1};
  `}
`;

import styled from 'styled-components';
import { useGreetingMessage } from '../hooks/useGreetingMessage';

export const GreetingMessage = () => {
  const { greetingMessage } = useGreetingMessage();
  return <StyledMessage>{greetingMessage}</StyledMessage>;
};

const StyledMessage = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 400;
`;

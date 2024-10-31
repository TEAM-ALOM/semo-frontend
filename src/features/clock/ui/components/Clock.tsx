import styled from 'styled-components';
import { formatDate } from '../../service/formatDate';
import { formatTime } from '../../service/formatTime';
import { useTimeTick } from '../hooks/useTimeTick';
import { GreetingMessage } from './GreetingMessage';

export const Clock = () => {
  const { time } = useTimeTick();

  return (
    <ClockContainer>
      <DateDisplay>{formatDate(time)}</DateDisplay>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <GreetingMessage />
    </ClockContainer>
  );
};

const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 124px auto 88px;
`;

const DateDisplay = styled.div`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const TimeDisplay = styled.div`
  width: 700px;
  text-align: center;
  font-size: 180px;
  font-weight: 100;
  line-height: 214.8px;
  color: #ffffff;
`;

import { ReactNode } from 'react';
import styled from 'styled-components';
import { usePageChangeHandler } from '../hooks/usePageChangeHandler';

type SlidingPage = {
  component: ReactNode;
  renderGuideButton?: (goNextPage: () => void) => ReactNode;
};

interface SlidingLayoutProps {
  pages: SlidingPage[];
  currentPageIndex: number;
  changePageIndex: (index: number) => void;
}

export const SlidingLayout: React.FC<SlidingLayoutProps> = ({
  pages,
  currentPageIndex,
  changePageIndex,
}) => {
  const { goNextPage, changePageIndexByScrollDirection, showGuideButton } =
    usePageChangeHandler({
      changePageIndex,
      currentPageIndex,
      pageLength: pages.length,
    });

  return (
    <SlidingLayoutContainer onWheel={changePageIndexByScrollDirection}>
      {pages.map((page, index) => (
        <Page key={index} topOffset={(index - currentPageIndex) * 100}>
          {page.component}
          {showGuideButton && page.renderGuideButton?.(goNextPage)}
        </Page>
      ))}
    </SlidingLayoutContainer>
  );
};

const SlidingLayoutContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Page = styled.div<{ topOffset: number }>`
  position: absolute;
  top: ${({ topOffset }) => `${topOffset}vh`};
  width: 100%;
  height: 100%;
  transition: top 0.5s ease;
`;

import { useState } from 'react';
import { useScrollDetector } from '@semo-client/utils/react/hooks/useScrollDetector';

interface PageChangeHandlerHookProps {
  currentPageIndex: number;
  changePageIndex: (index: number) => void;
  pageLength: number;
}

export const usePageChangeHandler = ({
  currentPageIndex,
  changePageIndex,
  pageLength,
}: PageChangeHandlerHookProps) => {
  const [showGuideButton, setShowGuideButton] = useState(false);

  const isLastPage = currentPageIndex === pageLength - 1;
  const isFirtPage = currentPageIndex === 0;

  const pageChange = useScrollDetector(direction => {
    if (direction === 'down' && !showGuideButton) {
      setShowGuideButton(true);
      return;
    }

    if (direction === 'down' && !isLastPage) {
      changePageIndex(currentPageIndex + 1);
      setShowGuideButton(false);
      return;
    }

    if (direction === 'up' && !isFirtPage) {
      changePageIndex(currentPageIndex - 1);
      setShowGuideButton(false);
      return;
    }
  }, 1500);

  const goNextPage = () => {
    if (!isLastPage) {
      changePageIndex(currentPageIndex + 1);
      setShowGuideButton(false);
    }
  };

  return {
    pageChange,
    goNextPage,
    showGuideButton,
  };
};

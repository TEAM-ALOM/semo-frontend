import { useState } from 'react';
import { useThrottledScrollDirection } from '@semo-client/utils/react/hooks/useThrottledScrollDirection';

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

  const changePageIndexByScrollDirection = useThrottledScrollDirection(
    direction => {
      if (direction === 'down' && !showGuideButton && !isLastPage) {
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
    },
  );

  const goNextPage = () => {
    if (!isLastPage) {
      changePageIndex(currentPageIndex + 1);
      setShowGuideButton(false);
    }
  };

  return {
    changePageIndexByScrollDirection,
    goNextPage,
    showGuideButton,
  };
};

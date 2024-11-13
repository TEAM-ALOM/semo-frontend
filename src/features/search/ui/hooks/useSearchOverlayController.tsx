import React, { useState, useCallback } from 'react';

interface UseSearchOverlayControllerProps {
  onSubmit: () => void;
  setQuery: (query: string) => void;
}

interface UseSearchOverlayControllerReturn {
  isExpanded: boolean;
  isOverlayVisible: boolean;
  handleExpand: () => void;
  handleCollapse: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleOverlayAnimationEnd: () => void;
}

export const useSearchOverlayController = ({
  onSubmit,
  setQuery,
}: UseSearchOverlayControllerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleExpand = useCallback(() => {
    setIsOverlayVisible(true);
    setIsExpanded(true);
  }, []);

  const handleCollapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit();
        handleCollapse();
      }
    },
    [onSubmit, handleCollapse],
  );

  const handleOverlayAnimationEnd = useCallback(() => {
    if (!isExpanded) {
      setIsOverlayVisible(false);
      setQuery('');
    }
  }, [isExpanded, setQuery]);

  return {
    isExpanded,
    isOverlayVisible,
    handleExpand,
    handleCollapse,
    handleKeyPress,
    handleOverlayAnimationEnd,
  };
};

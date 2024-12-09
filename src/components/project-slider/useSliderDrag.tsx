import { useState } from 'react';
import { PanInfo } from 'framer-motion';

interface UseSliderDragProps {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
  totalItems: number;
}

export const useSliderDrag = ({
  setCurrentIndex,
  currentIndex,
  totalItems,
}: UseSliderDragProps) => {
  const [dragX] = useState(0);

  const handleDragEnd = (info: PanInfo) => {
    const dragThreshold = 50;
    if (Math.abs(info.offset.x) > dragThreshold) {
      if (info.offset.x > 0) {
        // Dragged right
        setCurrentIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
      } else {
        // Dragged left
        setCurrentIndex(currentIndex === totalItems - 1 ? 0 : currentIndex + 1);
      }
    }
  };

  return { handleDragEnd, dragX };
};
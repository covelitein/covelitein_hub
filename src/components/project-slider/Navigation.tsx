import React from 'react';
import { motion } from 'framer-motion';
import { SliderControl } from './SliderControl';

interface NavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Navigations: React.FC<NavigationProps> = ({
  onPrevClick,
  onNextClick,
}) => {
  return (
    <motion.div 
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-between px-4 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="pointer-events-auto">
        <SliderControl direction="left" onClick={onPrevClick} />
      </div>
      <div className="pointer-events-auto">
        <SliderControl direction="right" onClick={onNextClick} />
      </div>
    </motion.div>
  );
};
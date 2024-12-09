import React from 'react';
import { motion } from 'framer-motion';

interface SliderDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export const SliderDots: React.FC<SliderDotsProps> = ({ total, current, onChange }) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            index === current
              ? 'bg-blue-500 scale-125'
              : 'bg-gray-300 hover:bg-blue-300'
          }`}
        />
      ))}
    </div>
  );
};
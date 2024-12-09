import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SliderControlProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

export const SliderControl: React.FC<SliderControlProps> = ({
  direction,
  onClick,
  className,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={clsx(
        'w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center',
        'hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
    >
      <svg
        className="w-6 h-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{
          transform: direction === 'right' ? 'rotate(180deg)' : 'none',
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </motion.button>
  );
};
import { useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { useImmer } from 'use-immer'

export const useSwiper = () => {
  const [swiper, setSwiper] = useImmer<SwiperType | null>(null);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    setSwiper(swiper);
  }, []);

  const slideNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  const slidePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const slideTo = useCallback((index: number) => {
    swiper?.slideTo(index);
  }, [swiper]);

  return {
    swiper,
    handleSwiper,
    slideNext,
    slidePrev,
    slideTo,
  };
};
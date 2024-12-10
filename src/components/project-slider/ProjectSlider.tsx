'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative, Pagination } from 'swiper/modules';
import { projects } from './data';
import { Navigations } from './Navigation';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { useSwiper } from '@/hooks/useSwiper';
import { ProjectCard } from './ProjectCard';
import { SliderDots } from './SliderDots';

export const ProjectSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleSwiper, slideNext, slidePrev, slideTo } = useSwiper();

  return (
    <div id='projects' className="relative w-full max-w-4xl mx-auto sm:h-[600px] h-[900px]">
      <Swiper
        modules={[Navigation, EffectCreative, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ['-120%', 0, -500],
            rotate: [0, 0, -15],
            opacity: 0,
            scale: 0.8,
          },
          next: {
            translate: ['120%', 0, -500],
            rotate: [0, 0, 15],
            opacity: 0,
            scale: 0.8,
          },
        }}
        grabCursor={true}
        loop={true}
        speed={1000}
        onSwiper={handleSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectCard 
              project={project} 
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Navigations
        onPrevClick={slidePrev}
        onNextClick={slideNext}
      />

      <SliderDots
        total={projects.length}
        current={activeIndex}
        onChange={slideTo}
      />
    </div>
  );
};
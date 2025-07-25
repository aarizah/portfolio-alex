"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ProjectCard from '@/components/ui/project-card';
import { projects } from '@/lib/projects'; // Adjust the import path as necessary

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Prueba() {
  return (
    <>
        <div className="bg-secondary">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={2}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       {
        projects.map((project,index)=>(
          <SwiperSlide key={index} className="!w-sm">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))
       }

      </Swiper>
        </div>
    </>
  );
}


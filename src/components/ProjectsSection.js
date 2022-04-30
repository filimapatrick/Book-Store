import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
.swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background:var(--primary-color-brown);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 25rem;
    transform: translateY(50%);
    color: black;
    border-radius: 30px;
    border:var(--black-color);
  
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1rem;
  }

 
`;

export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container">
       
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 1,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 10) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    price={project.price}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
import React from 'react';
import styled from 'styled-components';
import data from '../data';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, {Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Pagination]);

const EventContainer = styled.div`

`;

const EventSection = () => {
  const {event:{title, eventList}} = data;
  return (
    <EventContainer>
      <img src={title} alt="title" />
      <Swiper
            modules={[Pagination]}
            slidesPerView={4}
            pagination={{ clickable: true }}
            spaceBetween={15}
        ></Swiper>
          {eventList.map((v, i) => (
            <SwiperSlide key={i}>
                <div src={v.src} stit={v.stit} info={v.info} period={v.period}></div>
            </SwiperSlide>
          ))}
    </EventContainer>
  )
}

export default React.memo(EventSection);
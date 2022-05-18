import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, {Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const MainBannerContainer = styled.div`

`;

const Banner = () => {
const {banner:{shortBn, mainBn}} = data;
  return (
    <MainBannerContainer>
      <div className='ShortBn' bgimg={shortBn}>
        <Link to="/"></Link>
      </div>
      <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
        ></Swiper>
          {mainBn.map((v, i) => (
            <SwiperSlide key={i}>
                <div bgimg={v.bgImg} bgcolor={v.color}></div>
            </SwiperSlide>
          ))}
    </MainBannerContainer>
  )
}

export default React.memo(Banner);
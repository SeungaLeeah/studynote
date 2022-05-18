import React, { useState, useEffect } from "react";
import data from "../data";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";

const SwiperContainer = styled.div`
    .swiper-slide {
      div {
        img {
        width: 100%;
        }
      }
    }
    .swiper-button-prev,
      .swiper-button-next {
      width: 109px;
      height: 109px;
      border: 5px solid #fce6ea;
      border-radius: 50%;
      background: none;
      color: #fce6ea;
      transform: translateY(-50%);
      }
    .swiper-button-prev {
    left: 20px;
    }
    .swiper-button-next {
    right: 20px;
    }
    .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
      .swiper-pagination-bullet {
      margin: 0 10px;
      width: 10px;
      height: 10px;
        &:hover {
        background-color: #301d17;
        transform: scale(1.6);
        transition: all 0.5s;
        }
      }
      .swiper-pagination-bullet-active {
      width: 13px;
      height: 13px;
      background-color: #301d17;
      }
    }
`;

const MySwiper=()=>{
const [ bannerImg, setBannerImg] = useState([]);
const {baneer:top} = data;
useEffect(() => {
  (async () => {
  try {
  const responese = await axios.get("http://localhost:3001/banner");
  setBannerImg((bannerImg) => responese.data);
  } catch (e) {
  console.error(e);
  alert("서버와 연결 되지 않았습니다.");
  }
  })();
  }, []);
  return (
    <SwiperContainer>
    <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 3000 }}
    loop={true}
    pagination={{ clickable: true }}
    >
    <div>
    <img src={top} alt="topbanner"/>

      {bannerImg.map((v, i) => {
    return (
      <SwiperSlide key={i}>
        <div>
        <img src={v.bgImg} alt="banner img" />
        </div>
      </SwiperSlide>
      );
      })}
      </div>
    </Swiper>
    </SwiperContainer>
  );
}
export default MySwiper;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";


const TopBanner = styled.div`
width: 100%;
height: 100%;
  img{
    width:100%;
  }
`;

const SwiperContainer = styled.div`
  width:auto;
  margin: 0 auto;
    .swiper-slide {
      div {
        img {
          width: 100%;
          margin: auto;
        }
      }
    }
    .swiper-button-prev,
      .swiper-button-next {
      width: 90px;
      height: 90px;
      border: 5px solid #eee;
      border-radius: 50%;
      background: none;
      color: #eee;
      font-weight:700;
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
      margin-bottom: 40px;
      .swiper-pagination-bullet {
        margin: 0 10px;
        width: 10px;
        height: 10px;
        color: white;
          &:hover {
          background-color: black;
          transform: scale(1.2);
          transition: all 0.5s;
          }
      }
      .swiper-pagination-bullet-active {
      width: 13px;
      height: 13px;
      background-color: black;
      }
    }
`;

const BannerSection=()=>{
const [ bannerImg, setBannerImg] = useState([]);
useEffect(() => {
  (async () => {
  try {
  const response = await axios.get("http://localhost:3001/banner");
  setBannerImg((bannerImg) => response.data);
  } catch (e) {
  console.error(e);
  alert("서버와 연결 되지 않았습니다.");
  }
  })();
  }, []);
  return (
    <>
    <TopBanner>
    <img src="http://www.baskinrobbins.co.kr/upload/main/1714824579.jpg" alt=""/>
    </TopBanner>
    <SwiperContainer>
    <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    slidesPerView={1}
    navigation
    autoplay={{ delay:3000 }}
    loop={true}
    pagination={{ clickable: true }}
    >
      {bannerImg.map((v, i) => {
    return (
      <SwiperSlide key={i}>
        <div>
        <img src={v.bgImg} alt="bannerImg" />
        </div>
      </SwiperSlide>
      );
      })}
    </Swiper>
    </SwiperContainer>
    </>
  );
}
export default React.memo(BannerSection);
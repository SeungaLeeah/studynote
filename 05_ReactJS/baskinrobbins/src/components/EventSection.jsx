import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const EventContainer=styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
    h3 {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 50px;
    }
    .swiper-slide {
      text-align:center;
      display:flex;
      align-items:center;
      justify-content:center;

        .eventPlace {
        margin-top: 20px;
        }
        .eventText {
        color: rgb(47, 35, 28);
        font-size: 17px;
        letter-spacing: -1px;
        line-height: 23px;
        }
        .eventPeriod {
        margin: 8px 0;
        color: rgb(148, 135, 128);
        font-size: 13px;
        font-weight: 300;
        letter-spacing: -1px;
        margin-bottom: 50px;
        }

    }
    .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
      .swiper-pagination-bullet {
        margin: 0 10px;
        width: 6px;
        height: 6px;
          &:hover {
          background-color: black;
          transform: scale(1.5);
          transition: all 0.5s;
          }
        }
      .swiper-pagination-bullet-active {
      width: 9px;
      height: 9px;
      background-color: #301d17;
      }
    }
`;
const EventSection = () => {
  const [eventAd, setEventAd] = useState([]);


  useEffect(() => {
    (async () => {
    try {
    const response = await axios.get("http://localhost:3001/event");
    setEventAd((eventAd) => response.data);
    } catch (e) {
    console.error(e);
    alert("서버와 연결 되지 않았습니다.");
    }
    })();
    }, []);
    return (
      <EventContainer>
      <h3>
      <img src={"http://www.baskinrobbins.co.kr/assets/images/main/h_event.png"} alt="" />
      </h3>
      <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={4}
      spaceBetween={20}
      slidesPerGroup={4}
      loop={false}
      >
      {eventAd && eventAd.map(({
        eventImg, image, info, period
      },i) => {
      return (
      <SwiperSlide key={i}>
      <div>
      <img src={eventImg} alt="" />
      <img className="eventPlace" src={image} alt="" />
      <p className="eventText">{info}</p>
      <p className="eventPeriod">{period}</p>
      </div>
      </SwiperSlide>
      );
      })}
      </Swiper>
      </EventContainer>
      );
      };
export default React.memo(EventSection);
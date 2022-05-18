import React, { useState, useEffect } from "react";
import data from "../data";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const EventContainer=styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
    h3 {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 50px;
    }
    .swiper-slide {
    margin-bottom: 40px;
      div {
      height: 465px;
        .event-point {
        margin-top: 22px;
        margin-bottom: 8px;
        }
        .event-text {
        color: rgb(47, 35, 28);
        font-size: 17px;
        letter-spacing: -0.65px;
        line-height: 23px;
        }
        .event-period {
        margin: 11px 0;
        color: rgb(148, 135, 128);
        font-size: 13px;
        font-weight: 300;
        letter-spacing: -0.65px;
        line-height: 19.5px;
        }
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
        background-color: #301d17;
        transform: scale(1.6);
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
  const {event:title} = data;

  useEffect(() => {
    (async () => {
    try {
    const responese = await axios.get("http://localhost:3001/event");
    setEventAd((eventAd) => responese.data);
    } catch (e) {
    console.error(e);
    alert("서버와 연결 되지 않았습니다.");
    }
    })();
    }, []);
    return (
      <EventContainer>

      <h3>
      <img src={title} alt="" />
      </h3>
      <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={4}
      spaceBetween={16}
      slidesPerGroup={3}
      >
      {eventAd && eventAd.map(({
        src, image, info, period
      },i) => {
      return (
      <SwiperSlide key={i}>
      <div>
      <img src={src} alt="event-img" />
      <img className="event-point" src={image} alt="" />
      <p className="event-text">{info}</p>
      <p className="event-period">{period}</p>
      </div>
      </SwiperSlide>
      );
      })}
      </Swiper>
      </EventContainer>
      );
      };
export default EventSection;
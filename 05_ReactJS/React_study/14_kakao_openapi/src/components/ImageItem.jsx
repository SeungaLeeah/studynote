import React,{ memo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import noimg from '../assets/img/noImg.png';

const ListItemContainer = styled.li`
  box-sizing: border-box;
  width: 20%;
  flex: none;
  padding: 10px;
    
// 한 줄에 4개의 이미지가 들어가고 1280px 이상은 5개가 들어간다
  @media (max-width: 1280px){
      width: 25%;
  }
  //한 줄에 3개의 이미지가 들어감
  @media (max-width: 960px){
      width: 33.3%;
  }
  // 한 줄에 2개의 이미가 들어감
  @media (max-width: 720px){
      width: 50%;
  }

  //640px이 가장 먼저 사용됨 한 줄에 1개
  @media (max-width: 640px){
      width: 100%;
  }

  .list-item-link{
      border: 1px solid #d5d5d5;
      box-sizing: border-box;
      width: 100%;
      display: 100%;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #000;
      transition: all 0.1s;

      &:hover{
          background-color: #eeeeee55;
      }

      .thumbnail{
          width: 100%;
          height: 360px;
          display: block;
          object-fit: cover;
          object-position: center top;
          flex: none;

            @media (max-width: 1280px){
                height: 360px;
            }

            @media (max-width: 960px){
                height: 340px;
            }
        
            @media (max-width: 720px){
                height: 320px;
            }

            @media (max-width: 640px){
                height: 100%;
            }
        }
        .content{
            flex: none;
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-content: flex-start;

            padding: 10px 15px;

            h3{
                box-sizing: border-box;
                font-size: 18px;
                height: 20px;
                line-height: 20px;
                font-weight: bold;
                margin: 10px 0;

                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                
                li{
                    font-size: 12px;
                }
            }
        }
  }
`;

// KakaoSearch에서 ListItem에 ImageItem에서 item={v} v는 JSON 1개를 item:를 비구조 문법으로 받음
const ImageItem= memo(({item:{doc_url, image_url, thumbnail_url, display_sitename, collection, width, height, datetime},inview}) =>{
    return (
      <ListItemContainer>
          {/* 클릭시 넘어갈 주소 */}
          <a className='list-item-link' href={doc_url} target="_blank" rel='noreferrer' ref={inview}>
              {/* image_url은 원본 thumbnail_url은 축소판  error는 이미지에 대한 404 Not Found*/}
              <img className='thumnail' src={thumbnail_url || noimg} onError={(e)=>{
                  e.target.src = noimg;
              }} alt={display_sitename}/>
              <div className='content'>
                  <h3>{display_sitename}</h3>
                  <ul>
                      <li>{collection}</li>
                      <li>이미지 크기: {width}x{height}</li>
                      <li>{dayjs(datetime).format('YYYY-MM-DD hh:mm')}</li>
                  </ul>
              </div>
          </a>
      </ListItemContainer>
  );
});

export default ImageItem;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import data from '../data';

const SnsContainer=styled.div`
  width: 100%;
    .content-wrap{
    width: 1200px;
    height: 800px;
    margin: auto;
    position: relative;
      hr{
      color: #C2BCB3;
      opacity: 0.5;
      }
      .section-name{
      position: absolute;
      top: 0;
      left: 38%;
      }
      .instagram-img{
      margin: 50px 0;
      display: flex;
      flex-wrap: wrap;
        li{
        width: 220px;
        height: 220px;
        overflow: hidden;
        margin: 3px;
          img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          }
        }
      }
    }
`;
const SnsSection = () => {
const {sns:{title, icon, sub}} = data;
const [instagram, setInstagram] = useState([]);
  useEffect(()=>{
    (async()=>{
      try {
        const response = await axios.get('http://localhost:3001/instgram');
      setInstagram(instagram=>response.data );
      } catch (e) {
        console.error(e);
        alert('ajax통신 실패')
      }
    })();
  },[])
return (
<SnsContainer>
<img className="hSns" src={title} alt="" />
<div className="sns">
<ul>
  {icon.map((v,i)=>(
    <li key={i}>
      <Link to='/'>
        <img src={v} alt='icon'/>
      </Link>
    </li>
  ))}
</ul>
</div>
<div className="snsbox-title">
<img src={sub} alt="" />
</div>
<ul>
{instagram.map((v, i) => {
return (
<li key={i}>
<img src={v.src} alt="" />
</li>
);
})}
</ul>
</SnsContainer>
);
};
export default SnsSection;
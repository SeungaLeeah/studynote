import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import data from '../data';


const SnsContainer=styled.div`
  width: 100%;
  height: 1150px;
  display: block;
    .inner{
    width: 1200px;
    height: 800px;
    margin: auto;

      .subTitle,
      .mainTitle{
      text-align: center;
      }
      .snsIcon>ul{
      display: flex;
      flex-direction: row;
      justify-content: center;
        li{
        width: 60px;
        margin: 30px 10px;
        display: block;
          img{
          width: 100%;
          }
        }
      }
      .subTitle{
        display: flex;
        margin-top: 20px;
        align-items: center;

        hr{
        border: 0.3px solid #ccc5ba;
        opacity: 0.5;
        width: 50%;
        height: 0;
        }
        img{
          align-items: flex-start;
        }
      }
      .instagram{
        display: block;
        margin-top: 50px;
        margin-bottom: 80px;
        ul{
          display: grid;
          grid-template-columns: repeat(5,1fr);
          grid-template-rows: repeat(5,1fr);
        li{
          
          img{
          width: 235px;
          height: 235px;
          object-fit: cover;
          }
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
        const response = await axios.get('http://localhost:3001/instagram');
      setInstagram(instagram=>response.data );
      } catch (e) {
        console.error(e);
        alert('ajax통신 실패')
      }
    })();
  },[])

return (

  <SnsContainer>
    <div className="inner">
    <div className="mainTitle">
      <img src={title} alt="" />
    </div>
    <div className="snsIcon">
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
  
    <div className="subTitle">
    <hr/>
    <img src={sub} alt="" />
    <hr/>
    </div>
    <div className="instagram">
    <ul>
    {instagram.map((v, i) => {
    return (
    <li key={i}>
    <img src={v.src} alt="" />
    </li>
    );
    })}
    </ul>
    </div>
    </div>
  </SnsContainer>
  );
  };
export default React.memo(SnsSection);
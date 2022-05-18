import React,{useState, useEffect} from 'react';
import axios from 'axios';
import data from '../data';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SnsContainer = styled.div`

`;

const SnsSection = () => {
  const [instagram,setInstagram] = useState([]);

  useEffect(()=>{
    (async()=>{
      try{
        const response = await axios.get('http://localhost:3001/instagram');
        setInstagram(response.data);
      }catch(error){
        console.error(error);
        alert('서버와 연결되지 않았습니다.');
      }
    })();

  },[]);

  const {sns:{title, icon, sub}} = data;
  return (
    <SnsContainer>
      <img src={title} alt="title"/>
      <div className='icon'>
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
      <Link to='/'>
        <img src={sub} alt='sub'/>
      </Link>
      <div className='instagramImg'>
            {instagram.map((v,i)=>(
              <div key={i}>
                <img src={v.src} alt="instagramImg" />
              </div>
            ))}
      </div>
    </SnsContainer>
  )
}

export default SnsSection;

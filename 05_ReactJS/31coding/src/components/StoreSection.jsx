import React from 'react'
import styled from 'styled-components';
import data from '../data';

const StoreContainer = styled.div`
  
`;
const StoreBox = styled.div`
  
`;


const StoreSection = () => {
  const {storeContent:store} = data;
  return (
    <StoreContainer className='content'>
      {store.map((v,i)=>(
      <StoreBox key={i}>
        <img src={v.title} alt="title" />
        <img src={v.Img} alt="img"/>
    </StoreBox>
    ))}
  </StoreContainer>
  )
}

export default React.memo(StoreSection);
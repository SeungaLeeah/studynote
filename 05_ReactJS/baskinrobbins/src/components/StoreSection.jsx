import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';

const StoreContainer = styled.div`
  width: 100%;
  padding: 80px 0;
    .container{
    width: 1200px;
    margin: auto;
      .allSet{
      display: flex;
      text-align: center;
        .store{
          img{
            margin: 20px 0;
          }
        }
        .delivery{
            img{
              margin: 20px 0; 
            }
        }
      }
  }
  `;
const StoreSection = () => {
  const {store:{title,Img}} = data;
  const {delivery:{order,tel}} = data;
  return (
    <StoreContainer>
      <div className="container">
        <div className="allSet">
          <div className="store">
          <img src={title} alt="" />
          <Link to=''><img src={Img} alt="" /></Link>
          </div>
          <div className="delivery">
          <img src={order} alt="" />
          <Link to=''><img src={tel} alt="" /></Link>
          </div>
        </div>
      </div>
    </StoreContainer>
);
};
export default React.memo(StoreSection);

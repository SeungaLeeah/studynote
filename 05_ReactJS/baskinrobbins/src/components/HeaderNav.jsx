import React,{useCallback, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../data'
import MenuNav from './MenuNav';

const NavBarContainer = styled.div`
width:100%;
margin: auto;
background: url("http://www.baskinrobbins.co.kr/assets/images/common/bg_header.gif") repeat-x;
z-index: 999;

  .navHeader{
    width: 1200px;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    .snsIcon>ul{
      display: flex;
      width: 70%;

      img{
        width: 80%;
      }  
    }
    .logo {
      width: 100px;
      display: flex;
      
      align-items: center;
    }
    .right_nav{
      font-size: 11px;
      font-weight:300;
      letter-spacing: -1px;
      display: flex;
      align-items: center;
      justify-content: right;
        li{
          padding-left: 20px;
        }
        button{
          border-radius: 50%;
        } 
    }
  
}
`;


const SearchContainer=styled.div`
  
    .searchBtn{
      height: 250px;
      background-color: white;
      margin-top: 20px;

        table{
          margin:auto;
          width: 1200px;

            tr{
            height: 100px;
            display: flex;
            flex-direction: row;
            }
            td{
            display:flex;
            align-content: center;
            justify-content: space-evenly;
          
            h6{
                font-size: 14px;
                font-weight: 300;
                padding: 8px;
            }
          }

          .product{
            width: 40%;
          .productItem{
            border: 1px solid #d5d5d5;
            color: gray;
            padding: 6px;
            width: 130px;
            border-radius: 3px;
            margin-right: 15px;
            }
            .productInput{
            background-color: #EFEFEF;
            border: none;
            padding: 7px;
            width: 250px;
            }
          }
            .hashtag{
              width: 60%;
              .hashInput{
                background-color: #EFEFEF;
                border: none;
                padding: 7px;
                width: 490px;
              }
                .bestProduct {
                    p{
                      font-size: 13px;
                      font-weight: 200;
                      color: gray;
                      padding-left: 10px
                    }
                    span{
                    color: #FF7C98;
                    font-size: 12px;
                    font-weight: 300;
                    letter-spacing: -1px;
                    word-spacing: 2px;
                    padding-left: 10px;
                    }
                }
              }
              .allergy{
                margin-bottom: -20px;
                position: relative;
                .allergy1{
                  font-size: 13px;
                  display: flex;
                  padding: 8px 0;
                
                  input{
                    width: 30px;
                    height: 15px;
                  }
                  
                }
                  .allergy2{
                  font-size: 13px;
                  position: absolute;
                  bottom: 40px;
                  left: 98px;

                  input{
                    width: 30px;
                    height: 15px;
                  }
                
              }
              }
          button{
            width: 140px;
            height: 40px;
            color: white;
            background-color: #FF7C98;
            border-radius: 20px;
            display: block;
            margin: auto;
            font-size: 15px;
            font-weight: 300;
            
            }
        }
    }
`;

const HeaderNav = () => {
  const [button, setButton] = useState(false);


  const onButtonChange = useCallback(() => {
    setButton(!button);
  }, [button]);

  const {navbar:{logo, icon, searchBtn, closeBtn}} = data;
  return (
  <>
  <NavBarContainer>
  <div className="navHeader">
    <div className='snsIcon'>
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
    <div className="logo">
      <Link to="">
        <img className='logoItem' src={logo} alt="logo"/>
      </Link>
    </div>
    <ul className="right_nav">
      <li><Link to="">????????????</Link></li>
      <li><Link to="">CONTACT US</Link></li>
      <li className="search">
      <button type="button" onClick={onButtonChange}>
        {button === false ? <img src={searchBtn}alt="search-icon" /> 
        : <img src={closeBtn} alt="close-icon" />}
      </button>
      </li>
    </ul>
  </div>
  <SearchContainer buttonState={button} />
</NavBarContainer>

<MenuNav/>

{button &&(
      <SearchContainer>
      <div className="searchBtn">
          <table>
              <tbody>
                  <tr>
                      <td className='product'>
                      <h6>?????????</h6>
                      <form>
                          <select className="productItem" >
                              <option value="">??????</option>
                              <option value="">???????????????</option>
                              <option value="">????????????????????????</option>
                              <option value="">??????</option>
                              <option value="">??????</option>
                              <option value="">?????????</option>
                              <option value="">block pack</option>
                              <option value="">ready pack</option>
                          </select>
                      <input className='productInput' type="text" />
                      </form>
                  </td>
                      <td className='hashtag'>
                      <h6>????????????</h6>
                      <div>
                      <input className='hashInput' type="text" />
                      <div className="bestProduct">
                          <p>??? ???????????? ????????????</p>
                          <span>#?????????????????????</span>
                          <span>#????????????????????????????????????</span>
                          <span>#???????????????????????????????????????</span>
                          <span>#??????????????????????????????</span>
                          <hr/>
                          <span>#????????????????????????</span>
                          <span>#???????????????</span>
                      </div>
                      </div>
                      </td>
                  </tr>
                  <tr className='allergy'>
                      <td colSpan={2}>
                      <h6>???????????? ??????</h6>
                      <form className='allergy1'>
                          <label><input type="checkbox" />??????</label>
                          <label><input type="checkbox" />??????</label>
                          <label><input type="checkbox" />????????????</label>
                          <label><input type="checkbox" />??????</label>
                        </form>
                        <form className='allergy2'>
                        <label><input type="checkbox" />???</label>
                        <label><input type="checkbox" />?????????</label>
                        <label><input type="checkbox" />??????</label>
                        <label><input type="checkbox" />??????</label>
                      </form>
                      </td>
                  </tr>
              </tbody>
          <button> ?????? </button>
          </table>
      </div>
  </SearchContainer>

    )}
</>
);
};
export default React.memo(HeaderNav);
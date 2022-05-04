import React from 'react';
import styledComponents from 'styled-components';
import tableImg from '../assets/img/tablesetting.jpg';


const MenuContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
  .text_Box:{
    width: 50%;
  }
  h1{
    text-align: center;
    font-weight: 500;
    letter-spacing: 4px;
    font-size:30px
}
  h4{
    font-weight: 500;
    letter-spacing: 4px;
  }
  .food_Info{
    color: gray;
    margin-bottom: 40px;
    font-size: 14px;
  }
`;
const Menu = () => {
  return (
    <MenuContainer className="article">
                <div className="text_Box">
                  <h1>Our Menu</h1>
                    <h4>Bread Basket</h4>
                        <p className='food_Info'>Assortment of fresh baked fruit breads and muffins 5.50</p>
                    <h4>Honey Almond Granola with Fruits</h4>  
                        <p className='food_Info'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p> 
                    <h4>Belgian Waffle</h4>    
                        <p className='food_Info'>Vanilla flavored batter with malted flour 7.50</p>
                    <h4>Scrambled eggs</h4>
                    <p className='food_Info'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                    <h4>Blueberry Pancakes</h4>
                    <p className='food_Info'>With syrup, butter and lots of berries 8.50</p>
                </div>
                <div className='img_Box'>
                  <img src={tableImg} alt="food"/>
                </div>
    </MenuContainer>
  );
};

export default Menu;
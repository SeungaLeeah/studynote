import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.article`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  h1{
    text-align: center;
    font-weight: 500;
    letter-spacing: 4px;
    font-size:30px
}

  .address{
    margin: 12px 0;
    font-size: 18px;
    color: #70708f;
    font-weight:600;
  }
  input{
    display:block;
    width:100%;
    margin:24px 0;
    padding:12px;
    border:none;
    border-bottom: 1px solid gray;
  }
  button{
    width: 160px; 
    margin-top: 24px;
    padding: 12px;
    border: none;
    cursor: pointer;
  }
`;

const Contact = () => {
  const date = new Date().toISOString().slice(0,10);
  return (
    <ContactContainer className='article'>

      <h1>Contact</h1>
                <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.
                <p className='address'>Catering Service, 42nd Living St, 43043 New York, NY</p>
                   You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                <form action="submit">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="How many people"/>
                    <input type="date" defaultValue={`${date}`}/>
                    <input type="text" placeholder="Message\Special requirements"/>
                    <button type="button" placeholder="SEND MESSAGE">SEND MESSAGE</button>
            </form>
    </ContactContainer>
  );
};

export default Contact;
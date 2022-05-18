import React from 'react'
import StoreSection from '../components/StoreSection';
import SnsSection from '../components/SnsSection';
import MenuSection from '../components/MenuSection';
import EventSection from '../components/EventSection';


const Main = () => {
  return (
    <>
    {/* EventSection */}
    <EventSection/>

    {/* MenuSection */}
    <MenuSection/>

    {/* StoreMain */}
    <StoreSection/>

    {/* SnsMain */}
    <SnsSection/>
    </>
  )
}

export default Main;
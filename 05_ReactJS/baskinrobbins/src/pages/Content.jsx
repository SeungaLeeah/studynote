import React from 'react'
import MenuSection from '../components/MenuSection'
import EventSection from '../components/EventSection';
import StoreSection from '../components/StoreSection';
import SnsSection from '../components/SnsSection';


const Content = () => {
  return (
    <>
    {/* EventContent */}
    <EventSection/>

    {/* MenuContent */}
    <MenuSection/>

    {/* StoreContent */}
    <StoreSection/>

    {/* SnsContent */}
    <SnsSection/>
    </>
  )
}

export default Content;
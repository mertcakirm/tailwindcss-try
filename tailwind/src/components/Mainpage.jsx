import React, { Component } from 'react'
import NavBar from './Nav/NavBar';
import TopItem from './MainPageItem/TopItem';
import MidComPonent from './MainPageItem/midComponent';
import BottomItem from './MainPageItem/bottomItem';
import BottomComment from './MainPageItem/bottomcomment'; 
const MainPage=()=>{
    return (
      <div className='bg-gray-300'>
        <NavBar />
        <TopItem />
        <MidComPonent />
        <BottomItem />
        <div className='b-0'>
          <BottomComment />
        </div>
      </div>
    )
}
export default MainPage;
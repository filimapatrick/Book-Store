import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import ProjectsSection from '../components/ProjectsSection';
import { MdCardTravel,MdOutlineSearch } from 'react-icons/md';

function FrontPage() {
  return (
    <>
<MainLayout>
     {/* Left side of the page */}


    <LeftSide>
        <Header/>
        <p>Left Side </p>
    
        
          </LeftSide>


    
 {/* Right side of the page */}
    <RightSide>
      <div className='icons'>
        <div className='icon1'>
        <MdCardTravel/>
        </div>
        <div className='icon2'>
          <input type='text'/>
        {/* <MdOutlineSearch/> */}
        </div>
      </div>
    <div className='carousel'>
    <ProjectsSection/>
</div>
    </RightSide>
</MainLayout>
    </>
  )
}

const LeftSide = styled.div`

background-color:var(--background-light-color);
width:70%;
height:100vh;
z-index:1;



`

const RightSide = styled.div`
background-color:var(--primary-color-brown);
width:30%;
height:100vh;
z-index:1;

.carousel{
  height:530px;
  width:400px;
  background-color:white;
  z-index:50;
  margin-left:-10rem;
  border-radius:20px;
  margin-top:4rem;
  filter: drop-shadow(2px 4px 8px #585858)
}

.icons{
  display:flex;
  justify-content:space-evenly
}

.icon2{
  width:100px;
  height:40px;
  color:green;
  cursor: pointer;
  border-radius:20px;
}

`

const MainLayout = styled.div`
display:flex;
`
export default FrontPage
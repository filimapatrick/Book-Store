import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import ProjectsSection from '../components/ProjectsSection';





function FrontPage() {
  return (
    <>
<MainLayout>
     {/* Left side of the page */}


    <LeftSide>
        <Header/>
      
          </LeftSide>


    
 {/* Right side of the page */}
    <RightSide>
      <div className='icons'>
        {/* <div className='icon1'>
        <MdCardTravel/>
        </div> */}
        <div className='icon2'>
          <input type='text' placeholder='search here'/>
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

background-image: url("./books12.jpeg");

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
  filter: drop-shadow(1px 1px 2px #585858)
}



.icon2{
  width:100px;
  height:40px;
  color:green;
  cursor: pointer;
  border-radius:20px;
}

input[type=text] {
width:15rem;

  padding: 0.5rem;
  margin-top: 2rem;
  box-sizing: border-box;
  margin-left:7rem;
  border-radius:20px;
  background-color:white;
  
}

@media only screen and (max-width: 390px) {
  background-color:none;

    .bookItem__img {
      height: 30px;
    }

    .text{
      display:hidden;
    }
  }

`

const MainLayout = styled.div`
display:flex;
`
export default FrontPage
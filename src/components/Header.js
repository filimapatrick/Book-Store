import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
      <>


     <HeaderButton>
     
    <div className='buttons'>
<button className='front_header'>Popular</button>
    </div>

    <div>
<button  className='front_header'>Trending</button>
    </div>
    <div>
<button  className='front_header'>Read</button>
    </div>
    <div>
<button  className='front_header'>Contact</button>
    </div>
    </HeaderButton>
    <div className='gap'></div>
    <div className='left_content'>
        <h1>The Book Store</h1>
        <p> Semantic UI packaged Gulp build tools so your project can preserve its own theme changes.

The easiest way to install Semantic UI is .

For installing with specific integrations like Ember, React, or Meteor, see our integration guide.</p>

    </div>
    <button className='btns'>Explore More</button>
    </>
  )
}

const HeaderButton = styled.div`
display:flex;
padding-top:3rem;
align-items:center;
justify-content:space-around;
width:600px;

.front_header{
    font-size:1rem;
    font-weight:bold;
    color:black;
    border:1px solid black;
    padding:0.5rem;
    border-radius:12px;
    cursor: pointer;
  
    &:hover{
        background:rgb(243,224,207);
        color:black;
        border:1px solid #ffffff;
        
    }
}

`
export default Header
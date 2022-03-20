import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
      <>


     <HeaderButton>
     
    <div>
<button>Books</button>
    </div>

    <div>
<button>Store</button>
    </div>
    <div>
<button>News</button>
    </div>
    <div>
<button>Contact</button>
    </div>
    </HeaderButton>
    </>
  )
}

const HeaderButton = styled.div`
display:flex;
padding-top:3rem;

`
export default Header
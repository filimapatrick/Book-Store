import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ProjectItemStyles = styled.div`

width:400px;
margin-top:2rem;


  .bookItem__img {
    width: 70%;
  
    border-radius: 12px;
    display: inline-block;
   
    img {
      height: 15.5rem;
    }
  }
  .bookItem__info {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 12px;
    padding-left:2rem;
    
  }
  .bookItem__title {
    font-size: 1.2rem;
    color:black;
  }
  .bookItem__desc {
    font-size: 13px;
    margin-top: 1rem;
  }
  .bookItem__price{
    font-size:2rem;
    font-weight:bold;
    margin-top:1rem;
  }
  @media only screen and (max-width: 390px) {
    .bookItem__img {
      height: 30px;
    }
  }
`;

export default function ProjectItem({
  img ,
  title ,
  desc,
  price,
}) {
  return (
    <ProjectItemStyles>
      <Link to="#" className="bookItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="bookItem__info">
        <Link to="#">
          <h3 className="bookItem__title">{title}</h3>
        </Link>
        <p className="bookItem__desc">{desc}</p>
        <p className="bookItem__price">${price}</p>
      </div>
    </ProjectItemStyles>
  );
}
import React from 'react';
import './MainPage.css'
import { Button, Container } from 'react-bootstrap';
import computer from '../../images/Rectangle 2.png'

const MainPage = () => {
    
        return (
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={computer} class="d-block w-100 image" alt="..."/>
      <div className='text-part'>
                        <h2>Computer Engineering</h2>
                        <p style={{fontSize:"18px"} }>142,765 Computer Engineers follow this</p>
                    </div>
    </div>
    
   
  </div>
</div>
        );
};

export default MainPage;
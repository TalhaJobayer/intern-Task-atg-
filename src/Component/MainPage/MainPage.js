import React from 'react';
import './MainPage.css'
import { Button, Container } from 'react-bootstrap';
import computer from '../../images/Rectangle 2.png'

const MainPage = () => {
    
        return (
          <section className="mainBody">
          <div>
            <img
              className=" w-100"
              src={computer}
              alt="banner"
            />
           
          </div>
          <div className="text_part ">
            <h2 className="textH2 ">
            Computer Engineering
            </h2>
            <p className="textP ">
            142,765 Computer Engineers follow this
            </p>
         
          </div>
        </section>
        );
};

export default MainPage;
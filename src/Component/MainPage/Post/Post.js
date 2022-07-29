import './Post.css'
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import cloudyForest from "../../../images/Rectangle 5.png"
import car from "../../../images/Rectangle 5 car.png"
import gate from "../../../images/Rectangle 5.1.png"
import pro1 from "../../../images/pro1.png"
import pro2 from "../../../images/pro2.png"
import pro3 from "../../../images/pro3.png"
import pro4 from "../../../images/pro4.png"
import {AiOutlineEye,AiOutlineShareAlt} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import {GoLocation} from "react-icons/go"

const Post = () => {
    return (
        <div className='container mt-5 d-flex'>
            <div className="col-lg-8">
            <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
     
    >
      <Tab eventKey="All Post" title="All Post">
      <Card >
        <Card.Img variant="top" src={cloudyForest} />
        <Card.Body>
          <Card.Title className='tag'>✍️ Article</Card.Title>
          <div className='d-flex justify-content-between'>
         <Card.Text className='question'>
         What if famous brands had regular fonts? Meet RegulaBrands!
          </Card.Text>
          <FiMoreVertical></FiMoreVertical>
         </div>
          <p>
          I've worked in UX for the better part of a decade. From now on, I plan to rei…
          </p>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
         <div className="profile d-flex">
         <img src={pro1} class="rounded-circle" style={{width: "50px",height:"50px"
}}  alt="Avatar" />
          <h5 className='name'>Sarthak Kamra</h5>
         </div>
         <div className="share d-flex  ">
                  <AiOutlineEye className='eye'></AiOutlineEye>
                  <p className='like '>1.4k views</p>
                 <button className='sharebtn '> <AiOutlineShareAlt></AiOutlineShareAlt></button>
         </div>
         <div className="sharetext ">
               
                 <button className='sharebtntext   '> <AiOutlineShareAlt></AiOutlineShareAlt>share</button>
         </div>
        </Card.Footer>
      </Card>
      <Card  >
      <Card.Img variant="top" src={car} />
        <Card.Body>
          <Card.Title className='tag'>🔬️ Education</Card.Title>
          <div className='d-flex justify-content-between'>
         <Card.Text className='question'>
         Tax Benefits for Investment under National Pension Scheme launched by Government
          </Card.Text>
          <FiMoreVertical></FiMoreVertical>
         </div>
          <p>
          I've worked in UX for the better part of a decade. From now on, I plan to rei…
          </p>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
         <div className="profile d-flex">
         <img src={ pro2} class="rounded-circle" style={{width: "50px",height:"50px"
}}  alt="Avatar" />
          <h5 className='name'>Sarah West</h5>
         </div>
         <div className="share d-flex  ">
                  <AiOutlineEye className='eye'></AiOutlineEye>
                  <p className='like '>1.4k views</p>
                 <button className='sharebtn '> <AiOutlineShareAlt></AiOutlineShareAlt></button>
         </div>
         <div className="sharetext ">
               
                 <button className='sharebtntext   '> <AiOutlineShareAlt></AiOutlineShareAlt>share</button>
         </div>
        </Card.Footer>
      </Card>
      <Card >
       
        <Card.Img variant="top" src={gate} />
        <Card.Body>
          <Card.Title className='tag'>🗓️ Meetup</Card.Title>
         <div className='d-flex justify-content-between'>
         <Card.Text className='question'>
          Finance and Investment Elite Social Mixer @Lujiazui
          </Card.Text>
          <div>
            <DropdownButton className='moreDropdown' title={ <FiMoreVertical></FiMoreVertical>} id="bg-nested-moredropdown">
      
        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
        <Dropdown.Item eventKey="2">Report</Dropdown.Item>
        <Dropdown.Item eventKey="2">Option 3</Dropdown.Item>
      </DropdownButton>
            </div>
         </div>
          <div className='d-flex '>
            <div className="date">
                <p>Fri, 12 Oct, 2018</p>
            </div>
            <div className="location">
            <p><GoLocation></GoLocation>Ahmedabad, India</p>
            </div>
          </div>
          <button className='applybtn'><p className='btn_text_visit'>Visit Website</p></button>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
         <div className="profile d-flex">
         <img src={ pro3} class="rounded-circle" style={{width: "50px",height:"50px"
}}  alt="Avatar" />
          <h5 className='name'>Ronal Jones</h5>
         </div>
         <div className="share d-flex  ">
                  <AiOutlineEye className='eye'></AiOutlineEye>
                  <p className='like '>1.4k views</p>
                 <button className='sharebtn '> <AiOutlineShareAlt></AiOutlineShareAlt></button>
         </div>
         <div className="sharetext ">
               
                 <button className='sharebtntext   '> <AiOutlineShareAlt></AiOutlineShareAlt>share</button>
         </div>
         
        </Card.Footer>
      </Card>
      <Card >
      
        <Card.Body>
          <Card.Title className='tag'>💼️ Job</Card.Title>
         
          <div className='d-flex justify-content-between'>
         <Card.Text className='question'>
         Software Developer
          </Card.Text>
          <FiMoreVertical></FiMoreVertical>
         </div>
          <div className='d-flex '>
            <div className="date">
                <p>Innovaccer Analytics Private Ltd.</p>
            </div>
            <div className="location">
            <p><GoLocation></GoLocation>Noida, India</p>
            </div>
          </div>
          <button className='applybtn'><p className='btn_text'>Apply on Timesjobs</p></button>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
         <div className="profile d-flex">
         <img src={pro4} class="rounded-circle" style={{width: "50px",height:"50px"
}}  alt="Avatar" />
          <h5 className='name'>Joseph Gray</h5>
         </div>
         <div className="share d-flex  ">
                  <AiOutlineEye className='eye'></AiOutlineEye>
                  <p className='like '>1.4k views</p>
                 <button className='sharebtn '> <AiOutlineShareAlt></AiOutlineShareAlt></button>
         </div>
         <div className="sharetext ">
               
                 <button className='sharebtntext   '> <AiOutlineShareAlt></AiOutlineShareAlt>share</button>
         </div>
        </Card.Footer>
      </Card>
      </Tab>
      <Tab eventKey="Article" title="Article">
      <h1>will be available soon</h1>
      </Tab>
      <Tab eventKey="Event" title="Event">
      <h1>will be available soon</h1>
      </Tab>
      <Tab eventKey="Education" title="Education">
      <h1>will be available soon</h1>
      </Tab>
      <Tab eventKey="Job" title="Job" >
      <h1>will be available soon</h1>
      </Tab>
     </Tabs>
            </div>
            <div className='d-none d-lg-block'>
            <div className="col-lg-4  d-flex">
            <div>
            <DropdownButton className='dropDown' title="Write a Post" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Story</Dropdown.Item>
        <Dropdown.Item eventKey="2">Post</Dropdown.Item>
      </DropdownButton>
            </div>
            <div>
                <button className='btn btn-primary joinbtn'>Join Group</button>
            </div>
            </div>
            </div>
     </div>
    );
};

export default Post;
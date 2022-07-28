import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand">ATGWORLD</a>
          <form class="d-flex" role="search">
            <input class="searchBar " type="search" placeholder=" Search for your favorite groups in ATG" aria-label="Search"/>
           
          </form>
          <p>Create Account <span style={{color:"#2F6CE5"}}>Its Free</span></p>
        </div>
      </nav>
    );
};

export default Navbar;
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-bg">
            <Navbar >
            <NavLink className="header-nav"
            to="/home"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     Home
    </NavLink>
            <NavLink className="header-nav"
            to="/about"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     About
    </NavLink>
            <NavLink className="header-nav"
            to="/services"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     Services
    </NavLink>
    
            <NavLink className="header-nav"
            to="/login"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     Login
    </NavLink>  
       </Navbar>   
            <div className="hero-image">
          <div className="hero-text">
            <h1 style={{fontSize:"4rem text-white"}}>Our Language Learning Team </h1>
            <p className="card-text fs-4 text-white">Language learning is an active process that begins at birth and continues throughout life.   </p>
            <button className="button draw-border p-3 header-button">SIGN UP</button>
          </div>
        </div>
              
        </div>
    );
};

export default Header;
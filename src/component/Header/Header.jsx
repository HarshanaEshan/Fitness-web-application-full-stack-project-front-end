import React from 'react'
import './Header.css'
// import Logo from '../../assets/images/logo.png'
import { useCookies } from 'react-cookie';
import { Button } from '@mui/material';
import LogoMain from './logo.png'


function Header() {
  const [cookies,, removeCookie] = useCookies(['id', 'password']);
  const handleClick = () => {
    // Remove cookies named 'id' and 'password'
    removeCookie('id');
    removeCookie('password');
  };
  return (
    <div className="header">
        <img src={LogoMain} alt="" className='main-logo'/>

        <ul className='header-menu'>
            <li><a className="nav-link" href="/Home">
                  Home
                </a></li>

                <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/login">
                  Login
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Login
                </a>
              )}</li>

              <li>{cookies.id && cookies.password ? (
                  
                  <Button className='logout' onClick={handleClick}>LogOut</Button>
                
              ) : (
                <a className="nav-link" href="/register">
                  Register
                </a>
              )}</li>

              

              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/chatbot">
                  Talk Me
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Talk Me
                </a>
              )}</li>



            <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/running">
                  Running Tracking
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Running Tracking
                </a>
              )}
              </li>

            <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/diet">
                  Diet Planes
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Diet Planes
                </a>
              )}</li>

              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/bmi">
                  profile
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  profile
                </a>
              )}</li>


              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/exercies">
                  Schedule
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Schedule
                </a>
              )}</li>

              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/exercieseqp">
                  Machines
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Machines
                </a>
              )}</li>
              
            <li>
            <p> </p>
            </li>
        </ul>
    </div>
  )
}

export default Header
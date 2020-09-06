import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import Logo from "../../images/medinet.png";
import PhotoCaptureIcon from "../../images/photo-capture2.png";
import './header.css';

function Header(props) {
  
  const disabledPhotoBtn = props.disabledPhotoBtn
  return (
    <div className="container">
      <Nav className="navbar navbar-light bg-faded" >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
          />
        </Navbar.Brand>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="header-text">{props.title}</div>
          </li>
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item">
          {!(disabledPhotoBtn === 'Y') && 
            <a href="/capture">
              <img alt="" src={PhotoCaptureIcon} width="30" height="30"/>
            </a>
         }
         </li>
        </ul>
      </Nav>
    </div>
  );
}

export default Header;

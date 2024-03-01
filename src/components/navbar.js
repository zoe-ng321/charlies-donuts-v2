import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby"


export default class NavBar extends React.Component {
  render(){
    const brandLinkStyle = {
      color: 'white',
      display: 'inline-block',
      margin: '0 0.5rem',
      padding: '0.25rem',
      textDecoration: 'none',
      fontSize: '24px',
      fontFamily: 'Poppins',
      fontWeight: 'bold'
    };

    const linkStyles = {
      color: 'white',
      display: 'inline-block',
      margin: '0 0.5rem',
      padding: '0.25rem',
      textDecoration: 'none',
      fontFamily: 'Poppins',
    };

    const activeLinkStyle = {
      color: '#F6C4CE',
      display: 'inline-block',
      margin: '0 0.5rem',
      padding: '0.25rem',
      textDecoration: 'none',
      fontFamily: 'Poppins',
    }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Navbar.Brand><Link style={brandLinkStyle} to="/"><strong>Charlie's Donuts</strong></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" style={{marginTop: '5px'}}>
              <Link to="/" style={linkStyles} activeStyle={activeLinkStyle}>Home</Link>
              <Link to="/about" style={linkStyles} activeStyle={activeLinkStyle}>About</Link>
              <Link to="/menu" style={linkStyles} activeStyle={activeLinkStyle}>Menu</Link>
              <Link to="/gallery" style={linkStyles} activeStyle={activeLinkStyle}>Gallery</Link>
              <Link to="/contact" style={linkStyles} activeStyle={activeLinkStyle}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

import React from "react";
import * as C from "react-bootstrap";

import "./header.css";

export default function Header() {
  return (
    <div className='header sticky-top'>
      <C.Navbar collapseOnSelect expand='md'>
        <C.Container>
          <C.Image src='/assets/sepaylogo.png' alt='Sepay Studio' width='40' />
          <C.Navbar.Brand href='/login' className='ms-2 fs-4'>
            <b>SEPAY</b> STUDIO
          </C.Navbar.Brand>
          <C.Navbar.Toggle aria-controls='responsive-nav' />
          <C.Navbar.Collapse id='responsive-nav'>
            <C.Nav className='ms-auto'>
              <C.Nav.Link href='/'>Home</C.Nav.Link>

              <C.Dropdown as={C.NavItem}>
                <C.Dropdown.Toggle as={C.NavLink}>Services & Products </C.Dropdown.Toggle>
                <C.Dropdown.Menu>
                  <C.Dropdown.Item href='/products/gamification'>
                    Gamification
                  </C.Dropdown.Item>
                  <C.Dropdown.Item href='/products/arvr'>
                    Augmented & Virtual Reality
                  </C.Dropdown.Item>
                  <C.Dropdown.Item href='/products/games'>Games</C.Dropdown.Item>
                </C.Dropdown.Menu>
              </C.Dropdown>

              <C.Nav.Link href='/blogs'>Blog</C.Nav.Link>
              <C.Nav.Link href='/about'>Abous Us</C.Nav.Link>
              <C.Nav.Link href='/contact'>Contact</C.Nav.Link>
            </C.Nav>
          </C.Navbar.Collapse>
        </C.Container>
      </C.Navbar>
    </div>
  );
}

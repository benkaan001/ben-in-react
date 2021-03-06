import React from 'react';
import Icons from '../Icons';

import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg'>
        <LinkContainer to='/ben-in-react'>
          <Navbar.Brand id='nav-brand'>Ben Kaan</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='mr-auto col-8'>
            <LinkContainer to='/about'>
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='resume'>
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to='contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Icons />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

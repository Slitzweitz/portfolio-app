import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class NavMenu extends Component {
  render() {
    return (
    <Navbar inverse staticTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#profiles-stack">CMB</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="https://github.com/Slitzweitz">GitHub</NavItem>
          <NavItem eventKey={2} href="#contact-stack">Contact</NavItem>
          <NavDropdown eventKey={3} title="Portfolio" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Instagram</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}
export default NavMenu;

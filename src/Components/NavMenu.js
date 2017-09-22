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
          <NavItem eventKey={1} href="#sandbox-stack">API Sandbox</NavItem>
          <NavItem eventKey={2} href="mailto:colinmbarlow@gmail.com">Contact Me</NavItem>
          <NavDropdown eventKey={3} title="Portfolio" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="https://colinmbarlow.com/img/Developer Resume Projects.pdf">Resume</MenuItem>
            <MenuItem eventKey={3.2} href="https://colinmbarlow.com">LEMP App</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3} href="https://linkedin.com/in/colinmbarlow">LinkedIn</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="mailto:colinmbarlow@gmail.com">Email Me</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}
export default NavMenu;

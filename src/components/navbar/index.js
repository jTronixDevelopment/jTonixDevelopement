import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">JDev</NavbarBrand>
        <NavbarToggler onClick={ this.toggle } />
        <Collapse isOpen={ this.state.isOpen } navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="" className="white-text">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  Projects
                </DropdownItem>
                <DropdownItem>
                  What We Do 
                </DropdownItem>
                <DropdownItem>
                  Pricing
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

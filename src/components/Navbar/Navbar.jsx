import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Navbar } from "react-bulma-components";
import "./Navbar.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };
  render() {
    const { open } = this.state;
    return (
      <div className="Nav">
        <Navbar active={open}>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="/">
              <img src="/images/logo.png" width="50px" alt="" />
            </Navbar.Item>
            <Navbar.Burger
              className="trigger-menu"
              active={open}
              onClick={this.handleClick}
            />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item href="/rooms">Rooms & Suites</Navbar.Item>
              <Navbar.Item href="/restaurants">Restaurants & Bars</Navbar.Item>
              <Navbar.Item href="/spa">Spa & Wellness</Navbar.Item>
              <Navbar.Item href="/events">Meetings & Events</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

export default Nav;

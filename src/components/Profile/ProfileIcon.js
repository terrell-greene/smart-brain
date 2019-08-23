import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./ProfileIcon.css";

class ProfileIcon extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () =>
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));

  signout = () => this.props.onRouteChange("signout");

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            aria-expanded={this.state.dropdownOpen}
            data-toggle="dropdown"
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              alt="avatar"
              className="br-100 ba h3 w3 dib"
            />
          </DropdownToggle>
          <DropdownMenu
            right={true}
            className="b--transparent shadow-5 "
            style={{
              backgroundColor: "rgba(225,225,225,0.5)"
            }}
          >
            <DropdownItem onClick={this.props.toggleModal}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={this.signout}>Signout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;

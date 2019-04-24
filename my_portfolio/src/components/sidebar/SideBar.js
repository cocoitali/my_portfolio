import React, { Component } from 'react';
import {
    SideBarWrapper,
    NavLinksWrapper,
    SideBarLink
  } from "../Styled";

class SideBar extends Component {
    render() {
      return (
        <SideBarWrapper>
            <NavLinksWrapper>
            <SideBarLink>HOME</SideBarLink>
            <SideBarLink>ABOUT</SideBarLink>
            <SideBarLink>SERVICES</SideBarLink>
            <SideBarLink>SKILLS</SideBarLink>
            <SideBarLink>EDUCATION</SideBarLink>
            <SideBarLink>EXPERIENCE</SideBarLink>
            <SideBarLink>PROJECTS</SideBarLink>
            <SideBarLink>BLOG</SideBarLink>
            <SideBarLink>CONTACT</SideBarLink>
            </NavLinksWrapper>
        </SideBarWrapper>
      );
    }
  }

export default SideBar;
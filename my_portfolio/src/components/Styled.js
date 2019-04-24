import styled from "styled-components";


//SideBar.js
export const SideBarWrapper = styled.div`
  width: 20%;
  background: #F3F4F8;
  height: 100vh;
  margin-left: 10%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

export const NavLinksWrapper = styled.div`
margin-top: 15px;
    display: flex;
    flex-direction: column;
 
`
export const SideBarLink = styled.div`
    margin:5px;
    :hover {
        color: #0d98ba;
        cursor: default;
        text-decoration: underline;
    }

`
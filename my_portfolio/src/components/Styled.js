import styled from "styled-components";


//SideBar.js
export const SideBarWrapper = styled.div`

    position: fixed;
    z-index: 2;
    width: 20%;
    background: #F3F4F8;
    height: 100vh;
    margin-left: 10%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
`;

export const NavLinksWrapper = styled.div`
    margin-top: 30px;
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
export const Cta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 40%;
    position: absolute;
    margin-top: 210px;
    // border: 1px solid black;
    z-index: 1;

    div {
        margin-top: 25px;
        font-size: 70px;
        padding: 10px;
    }
`
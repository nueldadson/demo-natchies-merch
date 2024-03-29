import styled from "styled-components";
// import { Link as LinkS } from 'react-scroll';
import { FaInstagram, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #946aef ;
  /* display: grid; */
  /* align-items: center; */
  top: 0;
  left: 0;
  transition: 0.7s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  /* top: 0; */
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  /* position: absolute; */
  `
export const Icon = styled.div`
z-index: 10000 !important;
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
  outline: none;
  `

export const SidebarContent = styled.div`
  color: #fff;
  `
export const SidebarMenu = styled.ul`
z-index: 1000 !important;
  display: grid;
  margin-top: 100px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 80px);
  }
`

export const SidebarLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  /* margin-left: -290px; */
  cursor: pointer;
  
  /* @media screen and (max-width: 400px){
     margin-left: -240px;
  }
  @media screen and (max-width: 310px){
     margin-left: -190px;
  } */

  &:hover{
    /* color: red; */
    font-weight: 800;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarIcon = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
`
export const LinkedinIcon = styled(FaLinkedin)`
  color: #fff;
  `

export const InstagramIcon = styled(FaInstagram)`
  color: #fff;
  padding-left: 10px;
  `

export const TwitterIcon = styled(FaTwitter)`
  color: #fff;
  padding-left: 10px;
`

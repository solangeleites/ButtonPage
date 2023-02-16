import styled from "styled-components";

export const MenuHamburger = styled.div`
  color: black;
  height: 55%;
  width: 2.2rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Icon = styled.span`
  position: relative;
  height: 2px;
  width: 25px;
  background: ${props => (props.clicked ? 'transparent' : 'black')};
  display: inline-block;
  transition: all 0.3s;
   position: absolute;
   border-radius:5px;

    
  &::before,
  &::after {
    background-color: black;
    content: '';
    width: 25px;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
    border-radius: 5px;
  }

  &::before {
    top: ${props => (props.clicked === true ? '0' : '-.5rem')};
    transform: ${props =>
      props.clicked === true ? 'rotate(135deg)' : 'rotate(0)'};
  }

  &::after {
    top: ${props => (props.clicked === true ? '0' : '.5rem')};
    transform: ${props =>
      props.clicked === true ? 'rotate(-135deg)' : 'rotate(0)'};
  }
`;
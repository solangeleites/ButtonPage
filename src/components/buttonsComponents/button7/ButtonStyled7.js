import styled from 'styled-components';

export const Boton = styled.button`
  display: flex;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -4px -4px 12px #ffffff;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  border: 1px solid #009087;
  }

  &::before{
    content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.5, 1);
  z-index: -1;

  &::after{
    content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
  }
  }

  &:hover::before{
    top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
  &:hover::after{
    top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  box-shadow: none;

  }
`;

import styled from 'styled-components';

export const Boton = styled.button`
  border: none;
  border-radius: 5px;
  padding:1em 2em;
  cursor: pointer;
  background: transparent;
  font-weight: 700;
  text-transform: uppercase;

  &::before {
    margin-left: auto;
  }
  &::before,
  &::after {
    content: '';
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    transition: 0.5s;
  }
  &:hover::after,
  :hover::before {
    width: 100%;
  }
`;

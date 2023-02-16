import styled from 'styled-components';

export const Boton = styled.button`
 color: #FAFAFA;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #FAFAFA;
  background: black;
  box-shadow: 3px 3px #fafafa;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;

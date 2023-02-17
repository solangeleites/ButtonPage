import styled from "styled-components";

export const Button = styled.button`
 position: relative;
 padding: 10px 20px;
 outline: none;
 background: #212121;
 color: #ae00ff;
 text-transform: uppercase;
 font-size: 18px;
 overflow: hidden;
 transition: 0.2s;
 border-radius: 5px;
 cursor: pointer;
 font-weight: 700;

    &:hover {
        box-shadow: 0 0px 5px #ae00ff, 0 0 10px #001eff, 0 0 15px #ae00ff;
  transition-delay: 0.6s;
  transition: 0.6s ease-in-out;
    }

    & span{
        position: absolute;
    }
`

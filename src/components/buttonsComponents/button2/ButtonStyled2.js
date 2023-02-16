import styled from "styled-components";
import { Icon } from "../button1/ButtonStyled";

export const Icon2 = styled(Icon)`
    &::before{
        top: ${props => (props.clicked === true ? '0' : '0.5rem')};
        transform: ${props => (props.clicked === true ? 'rotate(0deg)' : 'rotate(0)')};
    }
    &::after{
        top: ${props => (props.clicked === true ? '0' : '-0.5rem')};
        transform: ${props => (props.clicked === true ? 'rotate(-0deg)' : 'rotate(0)')};
    }

`

import styled from "styled-components";
import { Icon } from "../button1/ButtonStyled";

export const Icon3 = styled(Icon)`
&::before{
        top: ${props => (props.clicked === true ? '0' : '0.5rem')};
        transform: ${props => (props.clicked === true ? 'matrix(0.73,0.7,-0.8,0.866,0,0)' : 'matrix(0)')};
    }
    &::after{
        top: ${props => (props.clicked === true ? '0' : '-0.5rem')};
        transform: ${props => (props.clicked === true ? 'matrix(-0.73,0.7,0.8,0.866,0,0)' : 'matrix(0)')};
    }

`

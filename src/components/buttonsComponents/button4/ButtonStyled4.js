import styled from "styled-components";
import { Icon } from "../button1/ButtonStyled";


export const Icon4 = styled(Icon)`
    &::before{
        top: ${props => (props.clicked === true ? '0' : '0.5rem')};
        transform: ${props => (props.clicked === true ? 'rotate(90deg)' : 'rotate(0deg)')};
    }
    &::after{
        top: ${props => (props.clicked === true ? '0' : '-0.5rem')};
        transform: ${props => (props.clicked === true ? 'rotate(0deg)' : props.anotherOption ? 'rotate(-0deg)' : 'rotate(0deg)')};
}

&:hover::before{
    transform: ${props => (props.clicked === true ? 'rotate(45deg)' : 'rotate(0deg)')};
}
&:hover::after{
    transform: ${props => (props.clicked === true ? 'rotate(-45deg)' : 'rotate(0deg)')};
}
`
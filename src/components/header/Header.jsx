import React from 'react'
import { LinkItem } from '../links/LinksStyled'
import { HeaderContainer, LinkContainer, Logo } from './HeaderStyles'

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>Logo</Logo>
        <LinkContainer>

      <LinkItem to='/'>Home</LinkItem>
      <LinkItem to='buttons'>Buttons</LinkItem>
      <LinkItem to= 'menus'>Menus</LinkItem>

        </LinkContainer>
    </HeaderContainer>
  )
}

export default Header
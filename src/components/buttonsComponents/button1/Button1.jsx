import React, {useContext} from 'react'
import { MenuHamburger, Icon} from './ButtonStyled'
import { MenuContext } from '../../../context/Context'

const Button = () => {
  const ctx = useContext(MenuContext)

  return (
    <MenuHamburger onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen}  ></Icon>
    </MenuHamburger>
  )
}

export default Button
import React, {useContext} from 'react'
import { MenuHamburger } from '../button1/ButtonStyled'
import { Icon4 } from './ButtonStyled4'
import { MenuContext } from '../../../context/Context'

const Button4 = () => {
  const ctx = useContext(MenuContext)

  return (
    <MenuHamburger onClick={ctx.toggleMenu}>
      <Icon4 clicked={ctx.isMenuOpen} />
    </MenuHamburger>
  )
}

export default Button4
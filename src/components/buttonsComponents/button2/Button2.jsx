import React, {useContext} from 'react'
import { MenuHamburger } from '../button1/ButtonStyled'
import { Icon2 } from './ButtonStyled2'
import { MenuContext } from '../../../context/Context'


const Button2 = () => {
const ctx = useContext(MenuContext)

  return (
    <MenuHamburger onClick={ctx.toggleMenu}> 
        <Icon2 clicked={ctx.isMenuOpen}  />
    </MenuHamburger>
  )
}

export default Button2
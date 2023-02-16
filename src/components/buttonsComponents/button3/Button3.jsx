import React, { useContext } from 'react';
import { MenuHamburger } from '../button1/ButtonStyled';
import { MenuContext } from '../../../context/Context';
import { Icon3 } from './ButtonStyled3';

const Button3 = () => {
  const ctx = useContext(MenuContext);

  return (
<MenuHamburger onClick={ctx.toggleMenu}>

<Icon3 clicked={ctx.isMenuOpen} />

    </MenuHamburger>
  );
};

export default Button3;

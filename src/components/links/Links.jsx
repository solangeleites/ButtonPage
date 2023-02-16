import React from 'react'
import { LinkItem } from './LinksStyled'


const Links = ({to, children}) => {
  return (
    <LinkItem className={({isActive}) => (isActive ? 'active' : '')} to= {to}>
    {children}
    </LinkItem>
  )
}

export default Links
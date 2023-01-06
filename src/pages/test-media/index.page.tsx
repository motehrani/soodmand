import { FC, ReactNode, useState } from 'react'
import Image from 'next/image'

import { CSSTransition, Transition } from 'react-transition-group'

const Test = () => {
  return (
    <Navbar>
      <NavItem src={'/svg/test/arrow/down.svg'}> </NavItem>
      <NavItem src={'/svg/test/guardian.svg'}> </NavItem>
      <NavItem src={'/svg/test/aircraft.svg'}> </NavItem>
      <NavItem src={'/svg/test/turret.svg'}> </NavItem>
    </Navbar>
  )
}
interface NavbarProps {
  children: ReactNode
}
interface NavItem {
  src: string
  children: ReactNode
}
const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-navbar-nav">{children}</ul>
    </nav>
  )
}
const NavItem: FC<NavItem> = props => {
  const [open, setOpen] = useState(false)
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <Image alt="mltr" src={props.src} width="15" height="15" />
      </a>
      {open && props.children}
    </li>
  )
}

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('main')

  const Item: FC<NavbarProps> = props => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.children}</span>
        {props.children}
        <span className="icon-button">{props.children}</span>
      </a>
    )
  }
  return (
    <div className="">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <Item>My Profile</Item>
          <Item>
            <Image alt="Icon" src="/svg/test/arrow/left.svg" />
          </Item>
          <Item>
            <Image alt="Icon" src="/svg/test/arrow/right.svg" />
          </Item>
        </div>
      </CSSTransition>
    </div>
  )
}
export default Test

import { FC, ReactNode } from 'react'
import Image from 'next/image'

const Test = () => {
  return (
    <Navbar>
      <NavItem />
      <NavItem />
      <NavItem />
    </Navbar>
  )
}

interface NavbarProps {
  children: ReactNode
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  )
}

const NavItem = () => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        <Image alt="emj" src="/svg/test/e1.svg" width="15" height="15" />
      </a>
    </li>
  )
}

export default Test

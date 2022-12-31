import { FC } from 'react'

export const Test = () => {
  return (
    <Navbar className="test">
      <li></li>
    </Navbar>
  )
}

function Navbar: FC<> (props) {
  <nav className="navbar">
    <ul className="navbar-nav">{props.children}</ul>
  </nav>
}

import Footer from './footer'
import { Nav } from './nav'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="CONTENT">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

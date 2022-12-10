import { Footer } from './footer'
import { Nav } from './nav'
import { SearchBar } from './search-bar'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="CONTENT">
      <Nav />
      <SearchBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

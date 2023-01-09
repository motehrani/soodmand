import { Container } from 'reactstrap'
import { Footer } from '../footer'
import { Nav } from '../nav'
import { SearchBar } from '../search-bar'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-layout">
      <Nav />
      <SearchBar />
      <div className="page-content">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

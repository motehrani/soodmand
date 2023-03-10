import { Container } from 'reactstrap'

import { Footer } from '../footer'
import { SoodmandSearch } from '../soodmand-search'
import { NavBar } from '../navbar'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-layout">
      <div className="sood-nav">
        <SoodmandSearch />
        <NavBar />
      </div>
      <div className="page-content">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

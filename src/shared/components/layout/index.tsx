import { Container } from 'reactstrap'

import { Footer } from '../footer'
import { SoodmandSearch } from '../soodmand-search'
import { NavBar } from '../navbar'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-layout">
      <OverlayScrollbarsComponent
        element="span"
        options={{ scrollbars: { autoHide: 'scroll' } }}
        events={{
          scroll: () => {
            /* ... */
          },
        }}
        defer
      >
        <div className="sood-nav">
          <SoodmandSearch />
          <NavBar />
        </div>
        <div className="page-content">
          <Container>{children}</Container>
        </div>
        <Footer />
      </OverlayScrollbarsComponent>
    </div>
  )
}

export default Layout

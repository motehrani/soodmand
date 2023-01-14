import Link from 'next/link'
import { Row, Col, Container } from 'reactstrap'

import { QuickAccess } from './components'
import { Cat } from './components'

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Container>
        <Row>
          <Col className="column" xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
            <div className="grouping">
              <Cat />
            </div>
          </Col>
          <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6">
            <div className="navigators">
              <ul className="catagories">
                <li>
                  <Link href="/">خانه</Link>
                </li>
                <li>
                  <Link href="/">فروشگاه</Link>
                </li>
                <li>
                  <Link href="/">صفحات</Link>
                </li>
                <li>
                  <Link href="/">بلاگ</Link>
                </li>
                <li>
                  <Link href="/">ارتباط با ما</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
            <div className="quick">
              <QuickAccess
                title="فرصت محدود"
                description="پیشنهاد شگفت انگیز"
                image="/svg/discount.svg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

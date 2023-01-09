import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'

import { QuickAccess } from './quick-access'

export const Nav = () => {
  return (
    <div className="nav-bar">
      <Container>
        <Row>
          <Col className="icon" xl="2" lg="2" md="2">
            <Image src="/svg/book.svg" alt="LOGO" width={35} height={35} />
            <Image src="/svg/heart.svg" alt="LOGO" width={35} height={35} />
            <Image src="/svg/person.svg" alt="LOGO" width={35} height={35} />
          </Col>

          <Col className="navigators" xl="8" lg="8" md="8">
            <div>
              <QuickAccess
                title="پشتیبانی"
                description="09103381006"
                image="/svg/call.svg"
              />

              <QuickAccess
                title="فرصت محدود"
                description="پیشنهاد شگفت انگیز"
                image="/svg/discount.svg"
              />

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

          <Col className="logo" xl="2" lg="2" md="2">
            <Link href="/" id="logo">
              <Image
                src="/svg/logo.svg"
                draggable="false"
                alt="LOGO"
                width={100}
                height={50}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

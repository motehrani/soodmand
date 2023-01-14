import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'

export const Nav = () => {
  return (
    <div className="nav-bar">
      <Container>
        <Row>
          <Col xxl="10" xl="10" lg="10" md="10" sm="10" xs="10">
            <div className="soodmand-search">
              <Link href="/" className="logo">
                <Image
                  src="/svg/logo.svg"
                  draggable="false"
                  alt="LOGO"
                  width={100}
                  height={50}
                />
              </Link>
              <div className="search-box">
                <span className="material-icons">search</span>
                <input type="text" name="" placeholder="جستجوی محصولات..." />
              </div>
            </div>
          </Col>
          <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
            <div className="icon">
              <Image src="/svg/book.svg" alt="LOGO" width={30} height={30} />
              <Image src="/svg/heart.svg" alt="LOGO" width={30} height={30} />
              <Image src="/svg/person.svg" alt="LOGO" width={30} height={30} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

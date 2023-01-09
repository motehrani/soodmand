import Image from 'next/image'
import { Row, Col, Container } from 'reactstrap'

import { Cat } from './components'

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <Container>
        <Row>
          <Col className="column" xxl="3" xl="3" lg="3" md="4" sm="4" xs="4">
            <div className="offers">
              <span className="material-icons">expand_more</span>
              <h2>پیشنهاد شگفت انگیز</h2>
              <Image src="/svg/discount2.svg" alt="%" width={25} height={25} />
            </div>
          </Col>
          <Col className="column" xxl="6" xl="6" lg="6" md="5" sm="5" xs="5">
            <div className="search-box">
              <span className="material-icons">search</span>
              <input type="text" name="" placeholder="جستجوی محصولات..." />
            </div>
          </Col>
          <Col className="column" xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
            <div className="grouping">
              <Cat />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

import { Row, Col } from 'reactstrap'
import { NumberOfProduct } from './components'

const BuyBasket = () => {
  return (
    <Row className="buy-basket-row">
      <Col
        className="products-in-basket-col"
        xxl="8"
        xl="8"
        lg="8"
        md="6"
        sm="12"
        xs="12"
      >
        <div className="title">
          <h2>سبد خرید</h2>
        </div>
        <div className="line"></div>
        <div className="number-of-products">
          <NumberOfProduct />
          <NumberOfProduct />
        </div>
      </Col>
      <Col
        className="calculate-price-col"
        xxl="4"
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      ></Col>
    </Row>
  )
}

export default BuyBasket

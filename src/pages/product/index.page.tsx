import Image from 'next/image'

import { Row, Col } from 'reactstrap'

import { SliderImage } from './component'

const Product = () => {
  return (
    <div className="product">
      <Row className="row-path">
        <div className="path">
          <p>سودمند/شبرآلات/شیرآشپزخونه/یه شیر خوبی</p>
        </div>
      </Row>
      <Row className="row-product">
        <Col
          className="col-product-pictures"
          xxl="7"
          xl="7"
          lg="7"
          md="7"
          sm="7"
          xs="7"
        >
          <Row className="row-product-picture">
            <Image
              alt="/product"
              src="/img/prdct.jpg"
              width={400}
              height={400}
            />
          </Row>
          <Row className="row-slider-product-picture">
            <SliderImage />
          </Row>
        </Col>
        <Col
          className="col-detail-and-buy"
          xxl="5"
          xl="5"
          lg="5"
          md="5"
          sm="5"
          xs="5"
        >
          <Row className="row-detail-product">
            <h2>مشخصات کالا</h2>
            <div className="size">
              <h2>ابعاد:</h2>
              <h2>200 * 75</h2>
            </div>
            <div className="color">
              <h2>رنگ بندی:</h2>
              <h2>2 رنگ</h2>
            </div>
            <div className="material">
              <h2>جنس:</h2>
              <h2>استیل</h2>
            </div>
          </Row>
          <Row className="row-buy-product">
            <div className="price">
              <h2>420,000</h2>
              <h2>تومان</h2>
            </div>
            <div className="number">
              <div className="increase">{/* i was here */}</div>
              <div className="to-basket"></div>
              <div className="fav-share"></div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Product

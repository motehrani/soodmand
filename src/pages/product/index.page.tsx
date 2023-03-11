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
          className="col-product-intro"
          xxl="12"
          xl="12"
          lg="12"
          md="12"
          sm="12"
          xs="12"
        >
          <div>
            <div className="specification">
              <h2 className="name">شیرآلات نقره ای خم دار</h2>
              <h2 className="product-id">کد محصول B7DFH239</h2>
            </div>
            <div className="brand">
              <Image
                alt="/product"
                src="/img/brand/brand-rasan.jpg"
                width={120}
                height={120}
              />
            </div>
          </div>
        </Col>
        <Col
          className="col-product-pictures"
          xxl="5"
          xl="5"
          lg="5"
          md="5"
          sm="5"
          xs="5"
        >
          <Image alt="/product" src="/img/prdct.jpg" width={400} height={400} />
          <SliderImage />
        </Col>
        <Col
          className="col-detail-and-buy"
          xxl="7"
          xl="7"
          lg="7"
          md="7"
          sm="7"
          xs="7"
        >
          <div className="detail-product">
            <div className="detail">
              <h2 className="detail-title">مشخصات کالا</h2>
              <div>
                <h2 className="title">ابعاد:</h2>
                <h2 className="value">200 * 75</h2>
              </div>
              <div>
                <h2 className="title">رنگ بندی:</h2>
                <h2 className="value">2 رنگ</h2>
              </div>
              <div>
                <h2 className="title">جنس:</h2>
                <h2 className="value">استیل</h2>
              </div>
            </div>
            <div className="any-question">
              <div className="ask-us">
                <h2>سوالی دارید؟</h2>
                <p>منتظر صدای گرم شما هستیم</p>
              </div>

              <div className="contact">
                <div className="phone">
                  <span className="material-icons">phone</span>
                  <h2>05136059192</h2>
                </div>
                <div className="support-agent">
                  <span className="material-icons">support_agent</span>
                  <h2>ارتباط با پشتیبانی</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="buy-product">
            <div className="price">
              <h2>420,000</h2>
              <h2>تومان</h2>
            </div>
            <div className="number">
              <div className="increase">{/* i was here */}</div>
              <div className="to-basket"></div>
              <div className="fav-share"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Product

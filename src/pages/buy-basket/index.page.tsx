import { useState } from 'react'

import { Row, Col } from 'reactstrap'

import { ProductInBasket } from './components/product-in-basket'

const BuyBasket = () => {
  const [show, setShow] = useState(false)
  const showHandler = () => {
    setShow(!show)
  }

  return (
    <Row className="buy-basket-row">
      <Col
        className="products-in-basket-col"
        xxl="9"
        xl="9"
        lg="9"
        md="9"
        sm="12"
        xs="12"
      >
        <div className="title">
          <h2>سبد خرید</h2>
        </div>
        <div className="line"></div>
        <div className="number-of-products">
          <ProductInBasket />
          <div className="line"></div>
          <ProductInBasket />
        </div>
      </Col>
      <Col
        className="calculate-price-col"
        xxl="3"
        xl="3"
        lg="3"
        md="3"
        sm="12"
        xs="12"
      >
        <div className="price-detail">
          <h2 className="title">قیمت 2 کالا:</h2>
          <h2 className="description">1.346.400 تومان</h2>
        </div>
        <div className="line"></div>
        <div className="price-detail">
          <h2 className="title">مبلغ با احتساب تخفیف:</h2>
          <h2 className="description">1.346.400 تومان</h2>
        </div>
        <div className="price-detail">
          <h2 className="title">هزینه ارسال:</h2>
          <h2 className="description">رایگان</h2>
        </div>
        <div className="price-detail">
          <h2 className="title">مبلغ قابل پرداخت:</h2>
          <h2 className="description">1.346.400 تومان</h2>
        </div>
        <div className="line"></div>
        <div className="current-address">
          <h2 className="title">آدرس فعلی:</h2>
          <h2 className="description">خراسان رضوی مشهد مشششد</h2>
        </div>
        <div className="another-address">
          <label className="switch">
            <input type="checkbox" onChange={() => showHandler()} />
            <span className="slider"></span>
          </label>
          <h2>آیا تمایل به تغییر آدرس دارید؟</h2>
        </div>
        {show && (
          <div className="new-address">
            <input type="text" placeholder="استان محل سکونت" />
            <input type="text" placeholder="شهر" />
            <textarea placeholder="آدرس دقیق" />
          </div>
        )}
        <button>ادامه فرایند خرید</button>
      </Col>
    </Row>
  )
}

export default BuyBasket

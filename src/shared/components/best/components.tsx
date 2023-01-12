import { FC } from 'react'
import Image from 'next/image'
import { Row, Col } from 'reactstrap'

export interface ProductProps {
  title: string
  description: string
  image: string
  price: number
  rates: number
}
export interface SpecialProductProps {
  title: string
  description: string
  image: string
  price: number
  rates: number
  discount: number
  deadline: number
}

export const TitleBar = () => {
  return (
    <Row>
      <div className="best-title-bar">
        <div>
          <div className="best-title">
            <h2>محبوب ترین</h2>
          </div>
          <div className="best-cat">
            <h2>محصولات نقره</h2>
            <h2>محصولات زنانه</h2>
          </div>
        </div>
      </div>
    </Row>
  )
}

export const Products = () => {
  return (
    <div className="products">
      <Row>
        <Col xxl="4" xl="4" lg="4" md="4" sm="6" xs="6">
          <div className="side-products">
            <ProductCards />
          </div>
        </Col>
        <Col xxl="4" xl="4" lg="4" md="4" sm="12" xs="12">
          <div className="special-product">
            <SpecialProduct
              title="گل"
              description="دسته گل محمدی"
              image="/img/product.jpg"
              price={100}
              rates={1.5}
              discount={13}
              deadline={10}
            />
          </div>
        </Col>
        <Col xxl="4" xl="4" lg="4" md="4" sm="6" xs="6">
          <div className="side-products">
            <ProductCards />
          </div>
        </Col>
      </Row>
    </div>
  )
}

const Product: FC<ProductProps> = ({
  title,
  description,
  image,
  price,
  rates,
}) => {
  return (
    <div className="product">
      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>
      <Image src={image} alt="logo" width={150} height={110}></Image>
      <div>
        <h2>{price} تومان</h2>
        <h2>{rates} بازخورد </h2>
      </div>
    </div>
  )
}

const SpecialProduct: FC<SpecialProductProps> = ({
  title,
  description,
  image,
  price,
  rates,
  discount,
  deadline,
}) => {
  return (
    <div className="special-product">
      <div>
        <h2>پیشنهاد ویژه</h2>
        <h2>{discount}</h2>
        <Image src={image} alt="logo" width={350} height={255}></Image>
      </div>

      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>

      <div>
        {/* <h2>{(100 - discount) * price}</h2> */}
        <h2>{price} تومان</h2>
        <h2>{rates} بازخورد </h2>
      </div>

      <div>
        <h2>عجله کن! پایان پیشنهاد در</h2>
        <h2>{deadline} روز</h2>
        <h2>تا پایان پیشنهاد باقی می ماند</h2>
      </div>
    </div>
  )
}

const ProductCards = () => {
  return (
    <div className="product-card">
      <Product
        title="گل"
        description="دسته گل محمدی"
        image="/img/product.jpg"
        price={100}
        rates={1.5}
      />
      <Product
        title="گل"
        description="دسته گل محمدی"
        image="/img/product.jpg"
        price={100}
        rates={1.5}
      />
      <Product
        title="گل"
        description="دسته گل محمدی"
        image="/img/product.jpg"
        price={100}
        rates={1.5}
      />
      <Product
        title="گل"
        description="دسته گل محمدی"
        image="/img/product.jpg"
        price={100}
        rates={1.5}
      />
    </div>
  )
}

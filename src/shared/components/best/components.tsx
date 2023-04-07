import { FC } from 'react'
import Image from 'next/image'
import { Row, Col } from 'reactstrap'

export interface CardProps {
  title: string
  description: string
  image: string
  price: number
  rates: number
}
export interface SpecialCardProps {
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
    <Row className="title-row">
      <div className="best-title-bar">
        <div>
          <h2>محبوب ترین</h2>
        </div>
        <div>
          <h2>محصولات نقره</h2>
          <h2>محصولات زنانه</h2>
        </div>
      </div>
    </Row>
  )
}

export const Cards = () => {
  return (
    <Row className="cards-row">
      <div className="cards">
        <Col xxl="2" xl="2 " lg="6" md="6" sm="6" xs="6">
          <SideCards />
        </Col>
        <Col xxl="2" xl="2 " lg="6" md="6" sm="6" xs="6">
          <SideCards />
        </Col>
        <Col xxl="4" xl="4" lg="12" md="12" sm="12" xs="12">
          <SpecialCard
            title="گل"
            description="دسته گل محمدی"
            image="/img/product.jpg"
            price={100}
            rates={1.5}
            discount={13}
            deadline={10}
          />
        </Col>
        <Col xxl="2" xl="2" lg="6" md="6" sm="6" xs="6">
          <SideCards />
        </Col>
        <Col xxl="2" xl="2" lg="6" md="6" sm="6" xs="6">
          <SideCards />
        </Col>
      </div>
    </Row>
  )
}

const Card: FC<CardProps> = ({ title, description, image, price, rates }) => {
  return (
    <div className="product card">
      <div className="cat-and-name">
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>
      <Image src={image} alt="logo" width={150} height={110}></Image>
      <div className="price-and-rates">
        <h2>{price} تومان</h2>
        <h2>{rates} بازخورد </h2>
      </div>
    </div>
  )
}

const SpecialCard: FC<SpecialCardProps> = ({
  title,
  description,
  image,
  price,
  rates,
  discount,
  deadline,
}) => {
  return (
    <div className="special-card card">
      <div className="title">
        <h2>پیشنهاد ویژه</h2>
        <h2>{discount}</h2>
        <Image src={image} alt="logo" width={350} height={255}></Image>
      </div>

      <div className="cat-and-name">
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>

      <div className="price-and-rates">
        {/* <h2>{(100 - discount) * price}</h2> */}
        <h2>{price} تومان</h2>
        <h2>{rates} بازخورد </h2>
      </div>

      <div className="deadline">
        <h2>عجله کن! پایان پیشنهاد در:</h2>
        <h2>{deadline} روز دیگر</h2>
        <h2>تا پایان پیشنهاد باقی می ماند</h2>
      </div>
    </div>
  )
}

const SideCards = () => {
  return (
    <div className="side-cards">
      <div>
        <Card
          title="گل"
          description="دسته گل محمدی"
          image="/img/product.jpg"
          price={100}
          rates={1.5}
        />
        <Card
          title="گل"
          description="دسته گل محمدی"
          image="/img/product.jpg"
          price={100}
          rates={1.5}
        />
      </div>
    </div>
  )
}

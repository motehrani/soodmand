import Image from 'next/image'
import React, { Component, FC } from 'react'

import Slider from 'react-slick'
import { Card } from 'antd'

export const SliderImage = () => {
  return (
    <div className="slider-image">
      <div className="images">
        <ProductImageSlider />
      </div>
    </div>
  )
}

class ProductImageSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
    return (
      <div>
        <Slider {...settings}>
          <div className="image">
            <Image
              alt="other-picture"
              src="/img/prdct.jpg"
              width={75}
              height={75}
            ></Image>
          </div>
          <div className="image">
            <Image
              alt="other-picture"
              src="/img/prdct.jpg"
              width={75}
              height={75}
            ></Image>
          </div>
          <div className="image">
            <Image
              alt="other-picture"
              src="/img/prdct.jpg"
              width={75}
              height={75}
            ></Image>
          </div>
        </Slider>
      </div>
    )
  }
}

export default class RelatedProductsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <RelatedProductCard
              image="/img/product/related-product.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product2.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product3.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product4.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product5.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product2.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product3.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
          <div>
            <RelatedProductCard
              image="/img/product/related-product4.jpg"
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </div>
        </Slider>
      </div>
    )
  }
}

export interface RelatedProps {
  image: string
  title: string
  description: string
}

export const RelatedProductCard: FC<RelatedProps> = ({
  image,
  title,
  description,
}) => {
  const { Meta } = Card
  return (
    <div className="related-products-card">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={image} />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
}

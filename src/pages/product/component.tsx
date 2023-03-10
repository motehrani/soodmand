import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'

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

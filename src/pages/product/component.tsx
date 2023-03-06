import Image from 'next/image'

export const SliderImage = () => {
  return (
    <div className="slider-image">
      <div className="arrow">
        <span className="material-icons">arrow_forward_ios</span>
      </div>
      <div className="images">
        <ProductImage />
        <ProductImage />
      </div>
      <div className="arrow">
        <span className="material-icons">arrow_back_ios</span>
      </div>
    </div>
  )
}

export const ProductImage = () => {
  return (
    <div className="image">
      <Image
        alt="other-picture"
        src="/img/prdct.jpg"
        width={75}
        height={75}
      ></Image>
    </div>
  )
}

import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classNames from 'classnames'

export interface FacilityProps {
  title: string
  description: string
  image: string
}

export const Facility: FC<FacilityProps> = ({ title, description, image }) => {
  return (
    <div className="facility">
      <Image src={image} alt="logo" width={35} height={35}></Image>
      <div>
        <h2 className="title">{title}</h2>
        <h2 className="description">{description}</h2>
      </div>
    </div>
  )
}

export interface SlideProps {
  title: string
  description: string
  image: string
  isActive: boolean
}

export const Slide: FC<SlideProps> = ({
  title,
  description,
  image,
  isActive,
}) => {
  const containerClassNames = classNames('slide', {
    active: isActive,
  })

  return (
    <div className={containerClassNames}>
      <Link href="/" id="opening">
        <Image alt="opening" src={image} width={1366} height={512} />
        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export interface SliderProps {
  slides: Omit<SlideProps, 'isActive'>[]
}

export const Slider: FC<SliderProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const getNavigationClassNames = (index: number) => {
    return classNames('slide-icon', {
      active: index === activeSlide,
    })
  }

  const goToNextSlide = () => {
    setActiveSlide(currentActiveSlide => {
      return currentActiveSlide + 1
    })
  }

  const goToPrevSlide = () => {
    setActiveSlide(currentActiveSlide => {
      return currentActiveSlide - 1
    })
  }

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <Slide key={index} isActive={index === activeSlide} {...slide} />
      ))}

      <div className="navigation">
        <i onClick={goToPrevSlide} className="fas fa-chevron-left prev-btn"></i>
        <i
          onClick={goToNextSlide}
          className="fas fa-chevron-right next-btn"
        ></i>
      </div>

      <div className="navigation-visibility">
        {slides.map((slide, index) => (
          <div className={getNavigationClassNames(index)} key={index}></div>
        ))}
      </div>
    </div>
  )
}

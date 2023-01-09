import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classNames from 'classnames'
import { Col } from 'reactstrap'

export interface FacilityProps {
  title: string
  description: string
  image: string
}

export const Facility: FC<FacilityProps> = ({ title, description, image }) => {
  return (
    <Col xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
      <div className="facility">
        <Image src={image} alt="logo" width={35} height={35}></Image>
        <div>
          <h2 className="title">{title}</h2>
          <h2 className="description">{description}</h2>
        </div>
      </div>
    </Col>
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
  // but there is no map or useEffect on line64... when this line checking classes
  const goToNextSlide = () => {
    setActiveSlide(currentActiveSlide => {
      if (currentActiveSlide === slides.length - 1) {
        return 0
      }
      return currentActiveSlide + 1
    })
  }

  const goToPrevSlide = () => {
    setActiveSlide(currentActiveSlide => {
      if (currentActiveSlide === 0) {
        return slides.length - 1
      }
      return currentActiveSlide - 1
    })
  }

  useEffect(() => {
    const interValidId = window.setInterval(goToNextSlide, 5000)

    return () => {
      window.clearInterval(interValidId)
    }
  }, [])
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

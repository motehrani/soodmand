import { FC } from 'react'
import Image from 'next/image'

import { Col } from 'reactstrap'

export interface ExistenceProps {
  title: string
  number: number
}

const Existence: FC<ExistenceProps> = ({ title, number }) => {
  return (
    <div className="existence">
      <div>
        <span className="material-icons">chevron_left</span>
        <h2>{title}</h2>
      </div>
      <h2>({number})</h2>
    </div>
  )
}

export const CatCard = () => {
  return (
    <Col className="cat-card" xxl="3" xl="3" lg="6" md="6" sm="12" xs="12">
      <div>
        <Image
          src="/img/cat-cards.jpg"
          alt="cat-card"
          width={300}
          height={225}
        />
        <h2 className="title">کامپیوتر و لبتاپ</h2>
        <Existence title="ساعت های هوشمند" number={24} />
        <Existence title="بازی" number={24} />
        <Existence title="هدفون" number={24} />
        <Existence title="ساعت های هوشمند" number={24} />
        <Existence title="دوربین و فیلم ها" number={24} />
      </div>
    </Col>
  )
}

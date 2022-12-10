import { FC } from 'react'
import Image from 'next/image'

export interface ExistenceProps {
  title: string
  number: number
}

const Existence: FC<ExistenceProps> = ({ title, number }) => {
  return (
    <div className="existence">
      <span className="material-icons">chevron_left</span>
      <h2>{title}</h2>
      <h2>{number}</h2>
    </div>
  )
}

export const CatCard = () => {
  return (
    <div className="cat-card">
      <Image src="/img/cat-cards.jpg" alt="cat-card" width={300} height={225} />
      <h2>کامپیوتر و لبتاپ</h2>
      <Existence title="ساعت های هوشمند" number={24} />
      <Existence title="بازی" number={24} />
      <Existence title="هدفون" number={24} />
      <Existence title="ساعت های هوشمند" number={24} />
      <Existence title="دوربین و فیلم ها" number={24} />
    </div>
  )
}

import { FC } from 'react'
import Image from 'next/image'

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

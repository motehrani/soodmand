import { FC } from 'react'
import Image from 'next/image'

export interface FacilitiesProps {
  title: string
  description: string
  image: string
}

export const Facilities: FC<FacilitiesProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="facilities">
      <Image src={image} alt="logo" width={35} height={35}></Image>
      <div>
        <h6>{title}</h6>
        <h5>{description}</h5>
      </div>
    </div>
  )
}

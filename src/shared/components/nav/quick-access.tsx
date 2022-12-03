import { FC } from 'react'
import Image from 'next/image'

export interface QuickAccessProps {
  title: string
  description: string
  image: string
}

export const QuickAccess: FC<QuickAccessProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="quick-access">
      <div>
        <h6>{title}</h6>
        <h5>{description}</h5>
      </div>

      <Image src={image} alt="logo" width={35} height={35}></Image>
    </div>
  )
}

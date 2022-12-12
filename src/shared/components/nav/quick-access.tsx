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
        <h2 className="title">{title}</h2>
        <h2 className="description">{description}</h2>
      </div>

      <Image src={image} alt="logo" width={35} height={35}></Image>
    </div>
  )
}

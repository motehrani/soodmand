import { FC } from 'react'
import Image from 'next/image'

import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'

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

export const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
]

export const Cat: React.FC = () => (
  <Dropdown menu={{ items }} placement="bottomRight">
    <a onClick={e => e.preventDefault()} className="dropdown">
      <span className="material-icons">list</span>
      دسته بندی
      <span className="material-icons">expand_more</span>
    </a>
  </Dropdown>
)

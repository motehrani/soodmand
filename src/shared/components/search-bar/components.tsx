import { Dropdown, Space } from 'antd'

import type { MenuProps } from 'antd'

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
    <a
      onClick={e => e.preventDefault()}
      className="ant-dropdown-trigger dropdown"
    >
      <Space>
        <span className="material-icons">expand_more</span>
        دسته بندی
        <span className="material-icons">list</span>
      </Space>
    </a>
  </Dropdown>
)

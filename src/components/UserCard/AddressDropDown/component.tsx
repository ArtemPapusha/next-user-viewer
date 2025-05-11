import { EnvironmentOutlined } from "@ant-design/icons"
import { Space, Dropdown } from "antd"
import type React from "react"

import { User } from "@/types/app"
import useContainer from "./hook"

const AdressDropDown: React.FC<Pick<User, "address">> = ({ address }) => {
  const { items } = useContainer({ address })

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          <EnvironmentOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default AdressDropDown

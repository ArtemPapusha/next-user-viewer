import { User } from "@/types/app"
import { CaretRightOutlined } from "@ant-design/icons"
import { Flex, message } from "antd"
import type { MenuProps } from "antd"

const useContainer = ({ address }: Pick<User, "address">) => {
  const [messageApi, contextHolder] = message.useMessage()
  const info = () => {
    messageApi.info("Address was copied!")
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(
        address.street +
          " St., " +
          address.suite +
          ", " +
          address.city +
          ", ZIP  " +
          address.zipcode +
          ", latitude: " +
          address.geo.lat +
          ", longitude: " +
          address.geo.lng
      )
      .then(() => info())
  }

  const items: MenuProps["items"] = [
    {
      label: (
        <Flex vertical onClick={handleCopy}>
          {contextHolder}
          <span>
            <CaretRightOutlined /> {address.street} {"St."}
          </span>
          <span>
            <CaretRightOutlined /> {address.suite}
          </span>
          <span>
            <CaretRightOutlined /> {address.city}
          </span>
          <span>
            <CaretRightOutlined /> {"ZIP: "}
            {address.zipcode}
          </span>
          <span>
            {"📍 "}
            {address.geo.lat} {", "} {address.geo.lng}
          </span>
        </Flex>
      ),
      key: "0",
    },
  ]

  return { items }
}

export default useContainer

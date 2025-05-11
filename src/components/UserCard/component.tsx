import type React from "react"
import { Card } from "antd"
import { User } from "@/types/app"
import {
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
  SmileOutlined,
} from "@ant-design/icons"
import AdressDropDown from "./AddressDropDown"
import CompanyTooltip from "./CompanyTooltip"

const UserCard: React.FC<User> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <Card
      title={name}
      style={{ minWidth: "250px" }}
      actions={[
        <AdressDropDown key="adress" address={address} />,
        <CompanyTooltip key="company" company={company} />,
      ]}
    >
      <div>
        <SmileOutlined /> {username}
      </div>

      <div>
        <MailOutlined /> {email}
      </div>

      <div>
        <PhoneOutlined /> {phone}
      </div>

      <div>
        <GlobalOutlined /> {website}
      </div>
    </Card>
  )
}

export default UserCard

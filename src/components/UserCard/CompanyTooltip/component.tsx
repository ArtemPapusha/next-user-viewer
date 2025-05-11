import type React from "react"

import { BankOutlined } from "@ant-design/icons"
import { Flex, Tooltip, Typography } from "antd"

import { User } from "@/types/app"

const CompanyTooltip: React.FC<Pick<User, "company">> = ({ company }) => {
  return (
    <Tooltip
      title={
        <Flex vertical>
          <Typography.Title level={5} style={{ margin: 0, color: "white" }}>
            {company.name}
          </Typography.Title>
          <Typography.Text italic style={{ color: "white" }}>
            {"❝" + company.catchPhrase + "❞"}
          </Typography.Text>
          <Typography.Text italic style={{ color: "white" }}>
            {company.bs}
          </Typography.Text>
        </Flex>
      }
    >
      <BankOutlined />
    </Tooltip>
  )
}

export default CompanyTooltip

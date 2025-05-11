import type React from "react"
import { Flex, Input, Select, Button, Empty } from "antd"
import Loading from "@/app/loading"
import UserCard from "@/components/UserCard"
import { SearchOutlined } from "@ant-design/icons"
import useContainer from "./hook"

const CardList: React.FC = () => {
  const {
    searchValue,
    selectedCitiesOptions,
    filteredData,
    isLoading,
    cityOptions,
    contextHolder,
    handleCitiesChangeSelect,
    handleInputChange,
    handleResetFilters,
  } = useContainer()

  if (isLoading) return <Loading />

  return (
    <>
      {contextHolder}

      <Flex vertical>
        <Input
          placeholder="Search by name, username, email or phone"
          type="text"
          prefix={<SearchOutlined />}
          style={{ marginBottom: "0.5rem", marginTop: "1rem" }}
          onChange={handleInputChange}
          value={searchValue}
        />

        <Select
          value={selectedCitiesOptions}
          mode="multiple"
          allowClear
          style={{ marginBottom: "0.5rem" }}
          placeholder="Select cities"
          onChange={handleCitiesChangeSelect}
          options={cityOptions}
        />
      </Flex>

      {filteredData?.length === 0 ? (
        <Empty>
          <Button
            block
            onClick={handleResetFilters}
            style={{ marginBottom: "1rem", maxWidth: "150px" }}
          >
            Reset filters
          </Button>
        </Empty>
      ) : (
        <Flex wrap gap={20} justify="center" style={{ paddingBottom: "1rem" }}>
          {filteredData?.map(user => <UserCard key={user.id} {...user} />)}
        </Flex>
      )}
    </>
  )
}

export default CardList

import { useEffect, useState } from "react"
import { notification } from "antd"
import { useUsersQuery } from "@/hooks/useUsersQuery"
import type { SelectProps } from "antd"

const useContainer = () => {
  const { data, isLoading, error } = useUsersQuery()
  const [api, contextHolder] = notification.useNotification()

  const [searchValue, setSearchValue] = useState<string>("")
  const [selectedCitiesOptions, setSelectedCitiesOptions] = useState<string[]>(
    []
  )

  const [selectedPhone, setSelectedPhone] = useState<string>("")

  const cityOptions: SelectProps["options"] = data?.map(item => ({
    label: item.address.city,
    value: item.address.city,
  }))

  const filteredDataBySearchValue = data?.filter(
    ({ name, username, email, phone }) =>
      [name, username, email, phone].some(item =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      )
  )

  const filteredDataBySelectedOptions =
    selectedCitiesOptions?.length > 0
      ? filteredDataBySearchValue?.filter(item =>
          selectedCitiesOptions.includes(item.address.city)
        )
      : filteredDataBySearchValue

  const handleCitiesChangeSelect = (value: string[]) => {
    setSelectedCitiesOptions(value)
  }

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    const { value } = event.target
    setSearchValue(value)
  }

  const handleResetFilters = () => {
    setSearchValue("")
    setSelectedPhone("")
    setSelectedCitiesOptions([])
  }

  useEffect(() => {
    if (error) {
      api.error({
        message: error.name,
        description: error.message,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return {
    searchValue,
    selectedPhone,
    selectedCitiesOptions,
    filteredData: filteredDataBySelectedOptions,
    isLoading,
    cityOptions,
    contextHolder,
    handleCitiesChangeSelect,
    handleInputChange,
    handleResetFilters,
  }
}

export default useContainer

import React from 'react'
import Select from 'react-select'
import { SelectOption } from '../../interfaces/SelectOption'

interface CommonSelectProps {
  options: any[]
  defaultValue?: SelectOption
  width?: string | number
  placeholder?: string
  displayDropdownIndicator?: string
  displayindicatorSeparator?: string
}

export const CommonSelect: React.FC<CommonSelectProps> = ({
  options,
  defaultValue,
  width,
  placeholder,
  displayDropdownIndicator,
  displayindicatorSeparator,
}) => {
  const styles = {
    container: (base: any) => ({
      ...base,
      width: width,
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      display: displayDropdownIndicator,
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: displayindicatorSeparator,
    }),
  }

  return (
    <Select
      styles={styles}
      defaultValue={defaultValue}
      options={options}
      placeholder={placeholder}
    />
  )
}

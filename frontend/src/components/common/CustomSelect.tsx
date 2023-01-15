import React from 'react'
import Select from 'react-select'
import { SelectOption } from '../../interfaces/SelectOption'

interface CommonSelectProps {
  options: any[]
  defaultValue?: SelectOption
  width?: string | number
  placeholder?: string
  displayDropdownIndicator?: boolean
  displayindicatorSeparator?: boolean
  alignSingleValueText?: boolean
  value?: string | number | undefined
  onChange?: (e: any) => any
}

const CustomSelect: React.FC<CommonSelectProps> = ({
  options,
  defaultValue,
  width,
  placeholder,
  displayDropdownIndicator,
  displayindicatorSeparator,
  alignSingleValueText,
  value,
  onChange,
}) => {
  const styles = {
    container: (base: any, state: any) => ({
      ...base,
      width: width,
    }),
    valueContainer: (base: any, state: any) => ({
      ...base,
      width: width,
      justifyContent: alignSingleValueText ? 'center' : 'inherit',
      alignItems: alignSingleValueText ? 'center' : 'inherit',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      display: displayDropdownIndicator ? 'flex' : 'none',
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: displayindicatorSeparator ? 'flex' : 'none',
    }),
  }

  const selectValue: SelectOption = { label: value, value: value }

  return (
    <Select
      autoFocus={false}
      styles={styles}
      defaultValue={defaultValue}
      options={options}
      placeholder={placeholder}
      value={selectValue}
      components={{ IndicatorSeparator: () => null }}
      onChange={onChange}
    />
  )
}

export default CustomSelect

import React from 'react'
import Select from 'react-select'
import { SelectOption } from '../../interfaces/SelectOption'

interface CommonSelectProps {
  options: any[]
  defaultValue?: SelectOption
  width?: string | number
  placeholder?: string
}

export const CommonSelect: React.FC<CommonSelectProps> = ({
  options,
  defaultValue,
  width,
  placeholder,
}) => {
  const styles = {
    container: (base: any) => ({
      ...base,
      width: width,
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
